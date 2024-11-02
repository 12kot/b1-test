import { useEffect } from 'react';

import { Routes } from 'Router';
import { setItemsInCart, useAppDispatch } from 'store';
import { AuthProvider, OrderModalProvider } from 'context';


import './index.scss';

import i18n from './locales/config';
i18n.init();

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (!cart) return;

    try {
      const res: number[] = JSON.parse(cart);
      if (!res.length) return;
      dispatch(setItemsInCart({ products: res }));
    } catch {
      console.log('Из-за отсутствия бэка сохраняю локально');
    }
  }, [dispatch]);

  return (
    <AuthProvider>
      <OrderModalProvider>
        <Routes />
      </OrderModalProvider>
    </AuthProvider>
  );
};

export default App;
