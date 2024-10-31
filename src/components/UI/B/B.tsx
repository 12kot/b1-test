import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.scss';
import { cx } from 'utils';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children?: ReactNode;
}

export const B = ({ children, className, ...rest }: Props) => {
  return <b className={cx(styles.container, className)} {...rest}>{children}</b>;
};
