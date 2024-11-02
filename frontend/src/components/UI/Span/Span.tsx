import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.scss';
import { cx } from 'utils';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  children?: ReactNode;
}

export const Span = ({ children, className, ...rest }: Props) => {
  return <span className={cx(styles.container, className)} {...rest}>{children}</span>;
};
