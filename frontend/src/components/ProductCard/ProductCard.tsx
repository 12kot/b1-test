import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { IProduct } from 'store';
import { APP_ROUTES } from 'Router';
import { Button, H3, Span } from 'components';
import { capitalizeFirstLetter } from 'utils';

import { SVGCart, SVGStar } from 'assets';

import styles from './styles.module.scss';

export const ProductCard = ({ image, title, price, category, rating, id }: IProduct) => {
  const { t } = useTranslation(['common']);

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
        <Button>
          <SVGCart />
          {t('common:buttons.addToCart')}
        </Button>
      </section>
    </NavLink>
  );
};
