import { lazy } from 'react';
import { redirect } from 'react-router-dom';

import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

const HomePage = Loadable(lazy(() => import('pages/home')));

const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

const MainRoutes = {
    path: '/',
    loader: async () => {
        const user = localStorage.getItem('access-token');

        if (!user) {
            return redirect('/login');
        }
    },
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: 'color',
            element: <Color />
        },

        {
            path: 'shadow',
            element: <Shadow />
        },
        {
            path: 'typography',
            element: <Typography />
        },
        {
            path: 'icons/ant',
            element: <AntIcons />
        }
    ]
};

export default MainRoutes;
