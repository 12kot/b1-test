import { RigthModal } from 'components';

import { IMGtilesBottom } from 'assets';

import styles from './styles.module.scss';

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
}

const AccountModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <RigthModal setIsOpen={setIsOpen} isOpen={isOpen}>
      <div className={styles.container}>
        <Content setIsOpen={setIsOpen} />
        <img src={IMGtilesBottom} loading="lazy" className={styles.container_bg} />
      </div>
    </RigthModal>
  );
};

export default AccountModal;

const Content = ({ setIsOpen }: { setIsOpen: () => void }) => {
  return <></>;
};
