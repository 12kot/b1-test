import { ReactNode } from 'react';

import { cx } from 'utils';

import styles from './styles.module.scss';

interface Props {
  children?: ReactNode;
  uppercase?: boolean;
  className?: string;
}

export const H1 = ({ children, uppercase, className }: Props) => {
  return <h1 className={cx(className, uppercase && styles.uppercase)}>{children}</h1>;
};

export const H2 = ({ children, uppercase, className }: Props) => {
  return <h2 className={cx(className, uppercase && styles.uppercase)}>{children}</h2>;
};

export const H3 = ({ children, uppercase, className }: Props) => {
  return <h3 className={cx(className, uppercase && styles.uppercase)}>{children}</h3>;
};
