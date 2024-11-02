import { RigthModal } from 'components';

import { Content } from './Content';

import { IMGTilesBottom } from 'assets';

import styles from './styles.module.scss';

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const CartModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <RigthModal setIsOpen={setIsOpen} isOpen={isOpen}>
      <Content setIsOpen={setIsOpen} isOpen={isOpen} />
      <img src={IMGTilesBottom} loading="lazy" className={styles.bg} />
    </RigthModal>
  );
};
