import { cx } from 'utils';
import { Header } from 'components';

import styles from './styles.module.scss';

interface Props {
  header?: boolean;
  children?: React.ReactNode;
}

export const AppHolder = ({ header, children }: Props) => {
  return (
    <main className={cx(styles.container, header && styles.header)}>
      {header && <Header />}
      {children}
    </main>
  );
};
