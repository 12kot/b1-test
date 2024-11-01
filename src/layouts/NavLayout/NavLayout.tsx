import { ReactNode } from 'react';

import styles from './styles.module.scss';
import { cx } from 'utils';

interface Props {
  children?: ReactNode | ReactNode[];
  overflow?: "hidden";
}

export const NavLayout = ({ children, overflow }: Props) => {
  return <div className={cx(styles.container, overflow === 'hidden' && styles.overlow)}>{children}</div>;
};
