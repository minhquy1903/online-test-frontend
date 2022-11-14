// material-ui
import { Box, Button } from '@mui/material';
// import { GithubOutlined } from '@ant-design/icons';

// project import
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import { Link } from 'react-router-dom';

const HeaderContent = () => {
    return (
        <>
            <div>
                <Link style={{ padding: '0 30px' }} to="/">
                    Online Test Logo
                </Link>
            </div>
            <Search />
            <Box sx={{ flexShrink: 0, ml: 0.75 }}>
                <Link className="create-test-btn" to="/creator">
                    <Button variant="contained">
                        <b>Create test</b>
                    </Button>
                </Link>
            </Box>
            <Notification />
            <Profile />
        </>
    );
};

export default HeaderContent;
