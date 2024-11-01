import { useTranslation } from 'react-i18next';

import { H2, ProductCard } from 'components';

import styles from './styles.module.scss';

export const Recommendations = () => {
  const { t } = useTranslation(['common']);

  return (
    <section className={styles.container}>
      <H2>{t('common:recommendations')}</H2>
      <div className={styles.container_list}>
        {Array(15)
          .fill(null)
          .map((_, i) => (
            <ProductCard key={i} />
          ))}
      </div>
    </section>
  );
};