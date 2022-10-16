import { createRoot } from 'react-dom/client';
import 'simplebar/src/simplebar.css';
import 'assets/third-party/apex-chart.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

reportWebVitals();
