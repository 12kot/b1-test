import { useCallback, useMemo } from 'react';

import { Loader, ProductCard } from 'components';
import { addItemToCart, ICategory, useAppDispatch, useAppSelector, useGetProductsQuery } from 'store';

import styles from './styles.module.scss';

interface Props {
  activeCategory?: ICategory;
}

export const Products = ({ activeCategory }: Props) => {
  const dispatch = useAppDispatch();
  const { products: cartProducts } = useAppSelector((state) => state.cart);

  const handleAddToCart = useCallback(
    (id: number) => {
      dispatch(addItemToCart({ id }));
    },
    [dispatch],
  );

  const { data: products, isLoading } = useGetProductsQuery({ category: activeCategory });

  const memoProducts = useMemo(
    () =>
      products?.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          isFavorite={!!cartProducts.find((v) => v === product.id)}
          handleAddToCart={handleAddToCart}
        />
      )),
    [products, cartProducts, handleAddToCart],
  );

  if (!products || isLoading) return <Loader center />;

  return <div className={styles.container}>{memoProducts}</div>;
};
