import { B, Button, H2, ProductCard, Span } from 'components';

import styles from './styles.module.scss';

export const Content = () => {
  return (
    <div className={styles.container}>
      <section className={styles.container_filters}>
        <Button buttonType="filter">Filter 1</Button>
        <Button buttonType="filter">Filter 2</Button>
        <Button buttonType="filter">Filter 3</Button>
        <Button buttonType="filter">Filter 4</Button>
        <Button buttonType="filter_active">Filter 5</Button>
        <Button buttonType="filter">Filter 6</Button>
        <Button buttonType="filter">Filter 7</Button>
      </section>
      <section className={styles.container_content}>
        <p>
          <Span>
            Main → <B>Catalog</B>
          </Span>
        </p>

        <H2>Catalog</H2>

        <div className={styles.container_content__cards}>
          {Array(15)
            .fill(null)
            .map((_, i) => (
              <ProductCard key={i} />
            ))}
        </div>
      </section>
    </div>
  );
};
