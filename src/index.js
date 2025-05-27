import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CarrinhoProvider } from './context/CarrinhoContext/CarrinhoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <CarrinhoProvider>
      <App />
   </CarrinhoProvider>
  
);


