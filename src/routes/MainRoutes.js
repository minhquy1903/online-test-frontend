import { lazy } from 'react';
import { redirect } from 'react-router-dom';

import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { Class } from 'pages/class/Class';
import { CreateClass } from 'pages/class/CreateClass';
import { Question } from 'pages/question/ListQuestion';
import { CreateQuestion } from 'pages/question/CreateQuestion';
import { Test } from 'pages/test/Test/index';
import { CreateTest } from 'pages/test/CreateTest/index';

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
            path: '/home',
            element: <HomePage />
        },
        {
            path: '/question',
            element: <Question />,
            children: [
                {
                    path: '/question/create',
                    element: <CreateQuestion />
                }
            ]
        },
        {
            path: '/test',
            element: <Test />,
            children: [
                {
                    path: '/test/create',
                    element: <CreateTest />
                }
            ]
        },
        {
            path: '/class',
            element: <Class />,
            children: [
                {
                    path: '/class/create',
                    element: <CreateClass />
                }
            ]
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
