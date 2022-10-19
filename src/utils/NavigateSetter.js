import { useNavigate } from 'react-router-dom';
import History from './History';

const NavigateSetter = () => {
    console.log('use Navigate Setter');
    History.navigate = useNavigate();
    return null;
};

export default NavigateSetter;
