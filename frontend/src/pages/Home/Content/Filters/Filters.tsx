import { useMemo } from 'react';

import { Button } from 'components';
import { ICategory, useGetCategoriesQuery } from 'store';

import styles from './styles.module.scss';

interface Props {
  activeCategory?: ICategory;
  setCategory: (v?: ICategory) => void;
}

export const Filters = ({ setCategory, activeCategory }: Props) => {
  const { data: categories } = useGetCategoriesQuery();

  const filters = useMemo(() => {
    const allCatrgories = ['all', ...(categories || [])];
    return allCatrgories.map((category) => (
      <Button
        buttonType={activeCategory === category || (category === 'all' && !activeCategory) ? 'filter_active' : 'filter'}
        key={category}
        onClick={() => setCategory(category === 'all' ? undefined : category)}>
        {category}
      </Button>
    ));
  }, [categories, activeCategory, setCategory]);

  return <section className={styles.container}>{filters}</section>;
};
