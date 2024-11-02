import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

import { cx } from 'utils';

import styles from './styles.module.scss';

interface Props extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = ({ error, className, ...rest }: Props) => {
  return <textarea className={cx(styles.container, className, error && styles.error)} {...rest} />;
};
