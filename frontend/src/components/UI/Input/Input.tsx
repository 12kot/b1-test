import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import { cx } from 'utils';

import styles from './styles.module.scss';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: boolean;
}

export const Input = ({ error, className, ...rest }: Props) => {
  return <input className={cx(styles.container, className, error && styles.error)} {...rest} />;
};
