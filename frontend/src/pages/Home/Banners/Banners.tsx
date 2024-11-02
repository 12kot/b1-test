import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { H2 } from 'components';

import styles from './styles.module.scss';

export const Banners = () => {
  const { t } = useTranslation(['common']);

  return (
    <section className={styles.container}>
      <H2>{t('common:ourPromotions')}</H2>
      <div className={styles.container_list}>
        {images.map((url, i) => (
          <NavLink to="/" key={i} className={styles.container_list__img}>
            <img key={i} src={url} alt={'Banner'} />
          </NavLink>
        ))}
      </div>
    </section>
  );
};

const images = [
  'https://api-static.edostavka.by/media/671f9b920e84a_560h820-kras.webp?id=21995',
  'https://api-static.edostavka.by/media/65e1a40ad23ab_2-924h280-bez-sahara.jpg?id=19001',
  'https://api-static.edostavka.by/media/66e2e14cee860_560h820-sedevry-ot-sefa-3.webp?id=21492',
  'https://api-static.edostavka.by/media/65e1a421c6063_1-924h280-bez-alkogola.jpg?id=19003',
  'https://api-static.edostavka.by/media/6711012a7199d_379h468-uslovia-dostavki-uze-edu.jpg?id=21901',
  'https://api-static.edostavka.by/media/65e1a431539b6_3-924h280-bez-laktozy-2.jpg?id=19005'
];
