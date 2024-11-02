import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { APP_ROUTES } from 'Router';
import { Button, H2 } from 'components';

import { IMGBigTiles, IMGNotFound } from 'assets';

import styles from './styles.module.scss';

export const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(['notFound']);

  return (
    <div className={styles.container}>
      <img loading="lazy" src={IMGNotFound} className={styles.container_main} />

      <div className={styles.container_text}>
        <H2>{t('notFound:header')}</H2>
        <p>{t('notFound:text')}</p>
      </div>

      <div className={styles.container_actions}>
        <Button onClick={() => navigate(APP_ROUTES.HOME)} buttonType="transparent">
          {t('notFound:actions.homePage')}
        </Button>
        <Button onClick={() => (window.location.href = 'https://t.me/kod41')}>{t('notFound:actions.contactMe')}</Button>
      </div>
      <img src={IMGBigTiles} loading="lazy" className={styles.container_tiles} />
    </div>
  );
};
