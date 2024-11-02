import { NavLink } from 'react-router-dom';

import { APP_ROUTES } from 'Router';
import { useCartModal } from 'context';
import { Button, H1 } from 'components';

import HeaderLng from './Lng/Lng';

import { SVGMenu } from 'assets';

import styles from './styles.module.scss';

export const Header = () => {
  const { setCartModalOpen } = useCartModal();

  return (
    <header className={styles.container}>
      <section className={styles.container_logo}>
        <NavLink to={APP_ROUTES.HOME}>
          <H1>Logo</H1>
        </NavLink>
        <HeaderLng />
      </section>

      <Button buttonType="default" className={styles.container_menu} onClick={setCartModalOpen}>
        <SVGMenu />
      </Button>
    </header>
  );
};
