import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';
import { AppBar, Toolbar } from '@mui/material';
import HeaderContent from './HeaderContent';

import './index.scss';

const Header = ({ open, handleDrawerToggle }) => {
    const theme = useTheme();

    const mainHeader = (
        <Toolbar>
            <HeaderContent />
        </Toolbar>
    );

    const appBar = {
        position: 'fixed',
        color: 'inherit',
        elevation: 0,
        sx: {
            borderBottom: `1px solid ${theme.palette.divider}`
        }
    };

    return (
        <>
            <AppBar {...appBar}>{mainHeader}</AppBar>
        </>
    );
};

Header.propTypes = {
    open: PropTypes.bool,
    handleDrawerToggle: PropTypes.func
};

export default Header;
