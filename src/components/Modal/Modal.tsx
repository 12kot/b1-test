import { ReactNode } from 'react';

import { cx } from 'utils';
import { useEscapeKey } from 'hooks';

import { IMGmodalTiles } from 'assets';

import styles from "./styles.module.scss";

interface Props {
  children?: ReactNode;
  className?: string;
  isOpen: boolean;
  setIsOpen: () => void;
}

export const Modal = ({ children, isOpen, setIsOpen, className }: Props) => {
  useEscapeKey(() => setIsOpen(), isOpen);

  return (
    <div className={cx(styles.container, isOpen && 'active')} onClick={setIsOpen}>
      <div className={cx(styles.container_content, className)} onClick={(e) => e.stopPropagation()}>
        {children}
        <img src={IMGmodalTiles} loading="lazy" className={styles.container_content__bg} />
      </div>
    </div>
  );
};
