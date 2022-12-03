import { createBrowserRouter } from 'react-router-dom';

import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

export const router = createBrowserRouter([MainRoutes, LoginRoutes]);
