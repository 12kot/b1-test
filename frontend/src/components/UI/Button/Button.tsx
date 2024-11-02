import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

import { cx } from 'utils';

import styles from './styles.module.scss';

type EButtonType = 'transparent' | 'default' | 'red' | 'filter' | 'filter_active';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  buttonType?: EButtonType;
  children?: ReactNode;
}

export const Button = ({ buttonType, children, className, ...rest }: Props) => {
  return (
    <button
      className={cx(
        styles.container,
        buttonType === 'default' && styles.default,
        buttonType === 'transparent' && styles.transparent,
        buttonType === 'red' && styles.red,
        buttonType === 'filter' && styles.filter,
        buttonType === 'filter_active' && styles.filter_active,
        className,
      )}
      {...rest}>
      {children}
    </button>
  );
};
