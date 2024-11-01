import { useTranslation } from 'react-i18next';

import { B, Button, H2, HR, Span } from 'components';

import { SVGCart, SVGStar } from 'assets';

import styles from './styles.module.scss';

export const Content = () => {
  const { t } = useTranslation(['common']);

  return (
    <div className={styles.container}>
      <div>
        <p>
          <Span>
            Main → Catalog → <B>Wow Product 228 ebat'</B>
          </Span>
        </p>
      </div>

      <div className={styles.container_content}>
        <img
          loading="lazy"
          className={styles.container_content__img}
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXQk5DLvdRYSxeNw-1TD92VUED9p9P3Ru_A&s'}
        />
        <section className={styles.container_content__info}>
          <H2>Wow Product 228 ebat'</H2>

          <div className={styles.price}>
            <div className={styles.rating}>
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <SVGStar key={i} />
                ))}
              <Span>{t('common:rating', { value: 1212 })}</Span>
            </div>
            <b>$ 1006.44</b>
          </div>

          <HR />

          <b>{t('common:description')}</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam excepturi sed itaque! Iusto totam suscipit
            placeat expedita id commodi! Laborum expedita consequuntur tenetur exercitationem commodi praesentium quas
            dignissimos quisquam, tempora est culpa vitae similique, adipisci reprehenderit nisi voluptas! Vitae error
            excepturi aut a incidunt earum assumenda, repellendus nobis praesentium, fugit pariatur, id hic possimus
            temporibus cumque qui sapiente itaque numquam ad optio. Vitae minus quasi eos natus, neque similique
            reprehenderit quia voluptatem culpa quidem quis molestiae possimus eaque impedit architecto doloremque sequi
            optio recusandae error sed vel rerum ratione sapiente? Ipsa commodi repudiandae minima animi corrupti autem
            similique facilis neque!
          </p>

          <Button className={styles.cart}>
            <SVGCart />
            {t('common:buttons.addToCart')}
          </Button>
        </section>
      </div>
    </div>
  );
};
