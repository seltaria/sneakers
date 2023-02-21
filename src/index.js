import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { CartContext } from './context';


function AppPro() {
  // const [cartList, setCartList] = React.useState([]);
  const [itemCount, setItemCount] = React.useState(0);

  return (
    <React.StrictMode>
      <CartContext.Provider value={{ itemCount, setItemCount }}>
        <App />
      </CartContext.Provider>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppPro />
);

