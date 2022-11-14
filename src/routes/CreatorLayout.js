import { lazy } from 'react';
import { redirect } from 'react-router-dom';
import Loadable from 'components/Loadable';
import CreatorLayout from 'layout/CreatorLayout/index';
const Creator = Loadable(lazy(() => import('pages/creator/index')));

const CreatorRoutes = {
    path: '/',
    loader: async () => {
        const user = localStorage.getItem('access-token');

        if (!user) {
            return redirect('/login');
        }
    },
    element: <CreatorLayout />,
    children: [
        {
            path: '/creator',
            element: <Creator />
        }
    ]
};

export default CreatorRoutes;
