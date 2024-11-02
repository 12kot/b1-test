import { RigthModal } from 'components';

import { IMGTilesBottom } from 'assets';

import { Content } from './Content';
import styles from './styles.module.scss';

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
}

const AccountModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <RigthModal setIsOpen={setIsOpen} isOpen={isOpen}>
      <Content setIsOpen={setIsOpen} isOpen={isOpen} />
      <img src={IMGTilesBottom} loading="lazy" className={styles.bg} />
    </RigthModal>
  );
};

export default AccountModal;
