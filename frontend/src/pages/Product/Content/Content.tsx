import { useTranslation } from 'react-i18next';

import { IProduct } from 'store';
import { Button, H2, HR, ProductPath, Span } from 'components';

import { SVGCart, SVGStar } from 'assets';

import styles from './styles.module.scss';

export const Content = ({ category, title, image, rating, price, description }: IProduct) => {
  const { t } = useTranslation(['common']);

  return (
    <div className={styles.container}>
      <ProductPath path={[category, title]} />

      <div className={styles.container_content}>
        <img loading="lazy" className={styles.container_content__img} src={image} />
        <section className={styles.container_content__info}>
          <H2>{title}</H2>

          <div className={styles.price}>
            <div className={styles.rating}>
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <SVGStar key={i} notActive={rating.rate < i + 1} />
                ))}
              <Span>{t('common:rating', { value: rating.count })}</Span>
            </div>
            <b>{t('common:price', { price })}</b>
          </div>

          <HR />

          <b>{t('common:description')}</b>
          <p>{description}</p>

          <Button className={styles.cart}>
            <SVGCart />
            {t('common:buttons.addToCart')}
          </Button>
        </section>
      </div>
    </div>
  );
};
