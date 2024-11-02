import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICartState {
  products: number[];
}

const initialState: ICartState = {
  products: [],
};

export const CartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<{ id: number }>) => {
      if (state.products.find((v) => v === action.payload.id)) {
        const products = state.products.filter((v) => v !== action.payload.id);

        state.products = products;
        localStorage.setItem('cart', JSON.stringify(products));
        return;
      }
      
      const products = [...state.products, action.payload.id];

      state.products = products;
      //Из-за отсутствия бэка сохраняю локально
      localStorage.setItem('cart', JSON.stringify(products));
    },

    setItemsInCart: (state, action: PayloadAction<{ products: number[] }>) => {
      state.products = action.payload.products;

      //Из-за отсутствия бэка сохраняю локально
      localStorage.setItem('cart', JSON.stringify(action.payload.products));
    },
  },
});

export const { addItemToCart, setItemsInCart } = CartSlice.actions;
