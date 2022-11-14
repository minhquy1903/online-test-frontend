import React from 'react';

import { Box, Button } from '@mui/material';

import { Link } from 'react-router-dom';
import Notification from 'layout/MainLayout/Header/HeaderContent/Notification';
import Profile from 'layout/MainLayout/Header/HeaderContent/Profile/index';

export const CreatorHeader = () => {
    return (
        <div className="creator-header">
            <div className="left">
                <Link to="/">Online Test Logo</Link>
            </div>

            <div className="right">
                <Box sx={{ flexShrink: 0, ml: 0.75 }}>
                    <Link className="create-test-btn" to="/creator">
                        <Button variant="contained">
                            <b>Save</b>
                        </Button>
                    </Link>
                </Box>
                <Notification />
                <Profile />
            </div>
        </div>
    );
};
