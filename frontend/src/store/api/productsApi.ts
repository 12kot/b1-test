import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<ICategory[], void>({
      query: () => `/products/categories`,
    }),
    getProducts: builder.query<IProduct[], { category?: ICategory }>({
      query: ({ category }) => (category ? `/products/category/${category}` : `/products`),
    }),
    getProductById: builder.query<IProduct, { id: number }>({
      query: ({ id }) => `/products/${id}`,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsQuery, useGetProductByIdQuery } = productsApi;

export type ICategory = string;

export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: ICategory;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
