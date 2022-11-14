import { Outlet } from 'react-router-dom';

// material-ui
import { Box, Toolbar } from '@mui/material';

import Header from './Header';
import navigation from 'menu-items';
import Breadcrumbs from 'components/@extended/Breadcrumbs';

const MainLayout = () => {
    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Header open={open} />
            <Box component="main" sx={{ width: '100%', height: '100vh' }}>
                <Toolbar />
                <Breadcrumbs navigation={navigation} title titleBottom card={false} divider={false} />
                <Outlet />
            </Box>
        </Box>
    );
};

export default MainLayout;
