import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import QuizIcon from '@mui/icons-material/Quiz';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

import './index.scss';
import { Link } from 'react-router-dom';
const menuItems = [
    {
        path: '/home',
        title: 'Home',
        icon: <HomeIcon />
    },
    {
        path: '/question',
        title: 'Question',
        icon: <QuestionAnswerIcon />
    },
    {
        path: '/test',
        title: 'Test',
        icon: <QuizIcon />
    },
    {
        path: '/class',
        title: 'Class',
        icon: <GroupIcon />
    },
    {
        path: '/setting',
        title: 'Setting',
        icon: <SettingsIcon />
    }
];

export default function NavigatorMenu() {
    const [tab, setTab] = React.useState(0);
    const navigate = useNavigate();

    const handleChangeTab = (index, path) => {
        setTab(index);
        navigate(path);
    };

    return (
        <div>
            <div className="logo">
                <Link to="/home">Online Test Logo</Link>
            </div>
            <div className="list-menu">
                {menuItems.map((item, index) => (
                    <div
                        className={tab === index ? 'list-item-active' : 'list-item'}
                        onClick={() => handleChangeTab(index, item.path)}
                        aria-hidden="true"
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
