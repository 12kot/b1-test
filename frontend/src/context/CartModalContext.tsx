import { createContext, useContext, useState, ReactNode } from 'react';

import { CartModal } from 'components';

interface ModalContextProps {
  isCartModalOpen: boolean;
  setCartModalOpen: () => void;
}

const CartModalContext = createContext<ModalContextProps | undefined>(undefined);

export const CartModalProvider = ({ children }: { children: ReactNode }) => {
  const [isCartModalOpen, setIsModalOpen] = useState<boolean>(false);

  const setCartModalOpen = () => {
    setIsModalOpen((v) => !v);
  };

  return (
    <CartModalContext.Provider value={{ isCartModalOpen, setCartModalOpen }}>
      {children}
      <CartModal isOpen={isCartModalOpen} setIsOpen={setCartModalOpen} />
    </CartModalContext.Provider>
  );
};

export const useCartModal = () => {
  const context = useContext(CartModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
