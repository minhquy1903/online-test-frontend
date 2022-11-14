// project import
import { router } from 'routes';
import ThemeCustomization from 'themes';
// import ScrollTop from 'components/ScrollTop';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
    <ThemeCustomization>
        <Provider store={store}>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="light"
            />
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    </ThemeCustomization>
);

export default App;
