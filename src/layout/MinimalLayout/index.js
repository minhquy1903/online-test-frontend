import { Outlet } from 'react-router-dom';
import NavigateSetter from 'utils/NavigateSetter';

const MinimalLayout = () => (
    <>
        <NavigateSetter />
        <Outlet />
    </>
);

export default MinimalLayout;
