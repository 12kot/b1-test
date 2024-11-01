import { APP_ROUTES } from 'Router';
import { useTranslation } from 'react-i18next';

import { useHandleNavigation } from 'hooks';
import { Button, H3, Span } from 'components';

import { SVGDelete } from 'assets';

import styles from './styles.module.scss';

interface Props {
  setIsOpen: () => void;
}

export const Content = ({ setIsOpen }: Props) => {
  const { t } = useTranslation(['common']);

  return (
    <div className={styles.container}>
      <section className={styles.container_header}>
        <H3>{t('common:yourCart')}</H3>
        <Span>{t('common:nItems', { value: 10 })}</Span>
      </section>
      <section className={styles.container_cards}>
        {Array(15)
          .fill(null)
          .map((_, i) => (
            <Card key={i} setIsOpen={setIsOpen} />
          ))}
      </section>
      <Button>{t('common:placeOrder')}</Button>
    </div>
  );
};

const Card = ({ setIsOpen }: Props) => {
  const { handleNavigate } = useHandleNavigation(setIsOpen);

  return (
    <Button buttonType="default" className={styles.card} onClick={() => handleNavigate(`${APP_ROUTES.PRODUCT}/${1}`)}>
      <img
        loading="lazy"
        className={styles.card_img}
        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXQk5DLvdRYSxeNw-1TD92VUED9p9P3Ru_A&s'}
      />
      <div className={styles.card_name}>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <div className={styles.card_name__price}>
          <b>$100</b>
          <Button buttonType="default" className={styles.delete}>
            <SVGDelete />
          </Button>
        </div>
      </div>
    </Button>
  );
};
