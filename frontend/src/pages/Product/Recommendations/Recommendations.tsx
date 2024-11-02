import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ICategory, useGetProductsQuery } from 'store';
import { H2, Loader, ProductCard } from 'components';

import styles from './styles.module.scss';

interface Props {
  category: ICategory;
}

export const Recommendations = ({ category }: Props) => {
  const { t } = useTranslation(['common']);
  const { data: products, isLoading } = useGetProductsQuery({ category });

  const productsMemo = useMemo(() => products?.map((pr, i) => <ProductCard key={i} {...pr} />), [products]);

  if (isLoading || !products) return <Loader center />;

  return (
    <section className={styles.container}>
      <H2>{t('common:recommendations')}</H2>
      <div className={styles.container_list}>
        {productsMemo}
      </div>
    </section>
  );
};
