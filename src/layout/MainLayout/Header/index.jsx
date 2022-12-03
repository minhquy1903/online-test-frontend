import React from 'react';

import { Box, Button } from '@mui/material';

import { Link } from 'react-router-dom';
import Notification from 'layout/MainLayout/Header/Notification';
import Profile from 'layout/MainLayout/Header/Profile/index';
import './index.scss';

const Header = () => {
    return (
        <div className="creator-header">
            <div className="right">
                <Notification />
                <Profile />
            </div>
        </div>
    );
};

export default Header;
