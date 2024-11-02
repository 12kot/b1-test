import { MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { IProduct } from 'store';
import { APP_ROUTES } from 'Router';
import { Button, H3, Span } from 'components';
import { capitalizeFirstLetter } from 'utils';

import { SVGCart, SVGRemoveCart, SVGStar } from 'assets';

import styles from './styles.module.scss';

interface Props extends IProduct {
  isFavorite: boolean;
  handleAddToCart: (id: number) => void;
}

export const ProductCard = ({ image, title, price, category, rating, id, isFavorite, handleAddToCart }: Props) => {
  const { t } = useTranslation(['common']);

  const hancleClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    handleAddToCart(id);
  };

  return (
    <NavLink to={`${APP_ROUTES.PRODUCT}/${id}`} className={styles.container}>
      <img loading="lazy" className={styles.container_img} src={image} />
      <section className={styles.container_info}>
        <H3>{t('common:price', { price })}</H3>
        <div>
          <p>{title}</p>
          <div className={styles.container_info__rating}>
            <SVGStar />
            <Span>
              {t('common:fullRating', {
                rate: rating.rate,
                count: rating.count,
                category: capitalizeFirstLetter(category),
              })}
            </Span>
          </div>
        </div>
        <Button buttonType={isFavorite ? 'red' : undefined} onClick={(e) => hancleClick(e)}>
          {isFavorite ? <SVGRemoveCart /> : <SVGCart />}
          {isFavorite ? t('common:buttons.removeFromCart') : t('common:buttons.addToCart')}
        </Button>
      </section>
    </NavLink>
  );
};
