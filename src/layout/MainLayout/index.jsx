import { Link, Outlet } from 'react-router-dom';

// material-ui
import { Box, Breadcrumbs } from '@mui/material';

import Header from './Header/index';
import { useLocation } from 'react-router-dom';
import './index.scss';
import NavigatorMenu from './NavigatorMenu/index';

const MainLayout = (props) => {
    const location = useLocation();

    const breadcrumbs = () => {
        const path = location.pathname;
        const pathItem = path.split('/');

        const breadcrumbs = pathItem.filter((item) => item != '');

        return breadcrumbs.map((item, index) => (
            <span underline="hover" key={index} color="inherit" to={item}>
                {item.toUpperCase()}
            </span>
        ));
    };

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box component="div" className="navigator-menu" sx={{ height: '100hv' }}>
                <NavigatorMenu />
            </Box>
            <Box
                component="main"
                className="main-container"
                sx={{ width: '100%', height: '93hv', display: 'flex', flexDirection: 'column' }}
            >
                <Header />
                <Box component="div" sx={{ width: '100%', height: '100%', padding: '16px' }}>
                    <Breadcrumbs className="breadcrumbs" separator="/" aria-label="breadcrumb">
                        {breadcrumbs()}
                    </Breadcrumbs>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};

export default MainLayout;
