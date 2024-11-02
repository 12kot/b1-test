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
        state.products = state.products.filter((v) => v !== action.payload.id);
        return;
      }

      state.products = [...state.products, action.payload.id];

      //Из-за отсутствия бэка сохраняю локально
      localStorage.setItem('cart', JSON.stringify([...state.products, action.payload.id]));
    },

    setItemsInCart: (state, action: PayloadAction<{ products: number[] }>) => {
      state.products = action.payload.products;

      //Из-за отсутствия бэка сохраняю локально
      localStorage.setItem('cart', JSON.stringify(action.payload.products));
    },
  },
});

export const { addItemToCart, setItemsInCart } = CartSlice.actions;
