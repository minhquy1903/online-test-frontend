// project import
import { router } from 'routes';
import ThemeCustomization from 'themes';
// import ScrollTop from 'components/ScrollTop';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => (
    <ThemeCustomization>
        <Provider store={store}>
            {/* <ScrollTop> */}
            {/* <Navigator /> */}
            <RouterProvider router={router} />
            {/* </ScrollTop> */}
        </Provider>
    </ThemeCustomization>
);

export default App;
