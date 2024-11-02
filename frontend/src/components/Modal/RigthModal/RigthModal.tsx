import { ReactNode } from 'react';

import { cx } from 'utils';
import { Button, H1 } from 'components';
import { APP_ROUTES } from 'Router';
import { useEscapeKey, useHandleNavigation } from 'hooks';

import { SVGClose } from 'assets';

import styles from './styles.module.scss';

interface Props {
  children?: ReactNode;
  className?: string;
  isOpen: boolean;
  setIsOpen: () => void;
}

export const RigthModal = ({ children, isOpen, setIsOpen, className }: Props) => {
  useEscapeKey(() => setIsOpen(), isOpen);
  const { handleNavigate } = useHandleNavigation(setIsOpen);

  return (
    <div className={cx(styles.container, isOpen && styles.active)} onClick={setIsOpen}>
      <div className={cx(styles.container_content, className)} onClick={(e) => e.stopPropagation()}>
        <header className={styles.container_header}>
          <Button
            buttonType="default"
            className={styles.container_header__logo}
            onClick={() => handleNavigate(APP_ROUTES.HOME)}>
            <H1>Logo</H1>
          </Button>
          <Button buttonType="default" className={styles.container_header__close} onClick={setIsOpen}>
            <SVGClose />
          </Button>
        </header>
        {children}
      </div>
    </div>
  );
};
