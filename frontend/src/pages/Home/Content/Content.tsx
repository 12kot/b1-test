import { useTranslation } from 'react-i18next';

import { ICategory } from 'store';
import { useQueryParam } from 'hooks';
import { H2, ProductPath } from 'components';
import { capitalizeFirstLetter } from 'utils';

import { Filters } from './Filters';
import { Products } from './Products';

import styles from './styles.module.scss';

export const Content = () => {
  const { t } = useTranslation(['common']);
  const [activeCategory, setCategory] = useQueryParam<ICategory>('c');

  return (
    <div className={styles.container}>
      <Filters activeCategory={activeCategory} setCategory={setCategory} />

      <section className={styles.container_content}>
        <ProductPath path={[activeCategory]} />
        <H2>{capitalizeFirstLetter(activeCategory || t('common:catalog'))}</H2>
        <Products activeCategory={activeCategory} />
      </section>
    </div>
  );
};
