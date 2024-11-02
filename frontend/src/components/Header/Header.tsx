import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Button, H1 } from 'components';
import { APP_ROUTES } from 'Router';

import HeaderLng from './Lng/Lng';
import AccountModal from './Modal/Modal';

import { SVGMenu } from 'assets';

import styles from './styles.module.scss';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <AccountModal setIsOpen={() => setIsModalOpen((v) => !v)} isOpen={isModalOpen} />
      <header className={styles.container}>
        <section className={styles.container_logo}>
          <NavLink to={APP_ROUTES.HOME}>
            <H1>Logo</H1>
          </NavLink>
          <HeaderLng />
        </section>

        <Button
          buttonType="default"
          className={styles.container_menu}
          onClick={() => setIsModalOpen((v) => !v)}>
          <SVGMenu />
        </Button>
      </header>
    </>
  );
};
