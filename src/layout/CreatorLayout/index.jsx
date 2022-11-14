import { Outlet } from 'react-router-dom';
import { CreatorHeader } from './Header/index';

import './index.scss';

const CreatorLayout = () => (
    <>
        <CreatorHeader />
        <Outlet />
    </>
);

export default CreatorLayout;
