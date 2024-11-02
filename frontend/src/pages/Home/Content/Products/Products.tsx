import { useMemo } from 'react';

import { Loader, ProductCard } from 'components';
import { ICategory, useGetProductsQuery } from 'store';

import styles from './styles.module.scss';

interface Props {
  activeCategory?: ICategory;
}

export const Products = ({ activeCategory }: Props) => {
  const { data: products, isLoading } = useGetProductsQuery({ category: activeCategory });

  const memoProducts = useMemo(
    () => products?.map((product) => <ProductCard key={product.id} {...product} />),
    [products],
  );

  if (!products || isLoading) return <Loader center />;

  return <div className={styles.container}>{memoProducts}</div>;
};
