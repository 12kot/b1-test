import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Button, H3, Span } from 'components';

import { SVGCart, SVGStar } from 'assets';

import styles from './styles.module.scss';
import { APP_ROUTES } from 'Router';

export const ProductCard = () => {
  const { t } = useTranslation(['common']);

  return (
    <NavLink to={`${APP_ROUTES.PRODUCT}/${1}`} className={styles.container}>
      <img
        loading="lazy"
        className={styles.container_img}
        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXQk5DLvdRYSxeNw-1TD92VUED9p9P3Ru_A&s'}
      />
      <section className={styles.container_info}>
        <H3>$ 100.86</H3>
        <div>
          <p>Wow Picture</p>
          <div className={styles.container_info__rating}>
            <SVGStar />
            <Span>4.5 (77) • Man's clothes</Span>
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
