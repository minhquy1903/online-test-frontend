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
            <Box component="div" className="navigator-menu">
                <NavigatorMenu />
            </Box>
            <Box
                component="main"
                className="main-container"
                sx={{ width: 'calc(100% - 240px)', display: 'flex', flexDirection: 'column', marginLeft: 'auto' }}
            >
                <Header />
                <Box component="div" sx={{ width: '100%', height: '93vh', padding: '24px' }}>
                    <Box component="div" sx={{ marginBottom: '22px' }}>
                        <Breadcrumbs className="breadcrumbs" separator="/" aria-label="breadcrumb">
                            {breadcrumbs()}
                        </Breadcrumbs>
                    </Box>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};

export default MainLayout;
