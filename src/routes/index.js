import { createBrowserRouter } from 'react-router-dom';
import CreatorRoutes from './CreatorLayout';

import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

export const router = createBrowserRouter([MainRoutes, LoginRoutes, CreatorRoutes]);
