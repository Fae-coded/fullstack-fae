import { StrictMode } from 'react';
//import react from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
