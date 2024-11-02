import { createContext, useContext, useState, ReactNode } from 'react';

import { OrderModal } from 'components';

interface ModalContextProps {
  isOrderModalOpen: boolean;
  setOrderModalOpen: () => void;
}

const OrderModalContext = createContext<ModalContextProps | undefined>(undefined);

export const OrderModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOrderModalOpen, setIsModalOpen] = useState<boolean>(false);

  const setOrderModalOpen = () => {
    setIsModalOpen((v) => !v);
  };

  return (
    <OrderModalContext.Provider value={{ isOrderModalOpen, setOrderModalOpen }}>
      {children}
      <OrderModal isOpen={isOrderModalOpen} setIsOpen={setOrderModalOpen} />
    </OrderModalContext.Provider>
  );
};

export const useOrderModal = () => {
  const context = useContext(OrderModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
