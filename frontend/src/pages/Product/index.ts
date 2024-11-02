import { lazy } from 'react';

export * from "./Product";

export const ProductLazy = lazy(() =>
  import('./Product').then(({ Product }) => ({
    default: Product,
  })),
);
