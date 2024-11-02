import { useTranslation } from 'react-i18next';

import { addItemToCart, IProduct, useAppDispatch, useAppSelector } from 'store';
import { Button, H2, HR, ProductPath, Span } from 'components';

import { SVGCart, SVGRemoveCart, SVGStar } from 'assets';

import styles from './styles.module.scss';

export const Content = ({ category, title, image, rating, price, description, id }: IProduct) => {
  const { t } = useTranslation(['common']);

  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.cart);
  const isFavorite = products.find((v) => v === id);

  const handleDelete = () => {
    dispatch(addItemToCart({ id }));
  };

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
              <Span>{t('common:product.rating', { value: rating.count })}</Span>
            </div>
            <b>{t('common:product.price', { price })}</b>
          </div>

          <HR />

          <b>{t('common:product.description')}</b>
          <p>{description}</p>

          <Button className={styles.cart} buttonType={isFavorite ? 'red' : undefined} onClick={handleDelete}>
            {isFavorite ? <SVGRemoveCart /> : <SVGCart />}
            {isFavorite ? t('common:buttons.removeFromCart') : t('common:buttons.addToCart')}
          </Button>
        </section>
      </div>
    </div>
  );
};
