import { MouseEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { env } from 'config';
import { APP_ROUTES } from 'Router';
import { useOrderModal } from 'context';
import { useHandleNavigation } from 'hooks';
import { Button, H3, Loader, Span } from 'components';
import { addItemToCart, IProduct, useAppDispatch, useAppSelector } from 'store';

import { IMGMail, SVGDelete } from 'assets';

import styles from './styles.module.scss';

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const Content = ({ setIsOpen, isOpen }: Props) => {
  const { t } = useTranslation(['cart']);
  const { setOrderModalOpen } = useOrderModal();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  const { products: cartProducts } = useAppSelector((state) => state.cart);

  //Апи не предоставляет эндпоинта на получение нескольких товаров. Поэтому вот
  useEffect(() => {
    if (!isOpen) return;

    const fetchProducts = async () => {
      setIsLoading(true);
      const promises = cartProducts.map((pr) => fetch(`${env.apiUrl}/products/${pr}`));

      const res = await Promise.allSettled(promises);

      const productsData = await Promise.all(
        res.filter((item) => item.status === 'fulfilled').map((item) => (item.value as Response).json()),
      );

      setProducts(productsData);
      setIsLoading(false);
    };

    setIsLoading(true);
    fetchProducts();
  }, [cartProducts, isOpen]);

  const handleOpenOrderModal = () => {
    setIsOpen();
    setOrderModalOpen();
  };

  return (
    <div className={styles.container}>
      <section className={styles.container_header}>
        <H3>{t('cart:yourCart')}</H3>
        <Span>{t('cart:nItems', { value: cartProducts.length })}</Span>
      </section>
      {!cartProducts.length && (
        <section className={styles.container_empty}>
          <img loading="lazy" src={IMGMail} />
          <p>{t('cart:cartIsEmpty')}</p>
        </section>
      )}
      {isLoading ? (
        <Loader center />
      ) : (
        <section className={styles.container_cards}>
          {products.map((pr, i) => (
            <Card key={i} setIsOpen={setIsOpen} {...pr} />
          ))}
        </section>
      )}
      <Button disabled={!cartProducts.length || isLoading} onClick={handleOpenOrderModal}>
        {t('cart:placeOrder')}
      </Button>
    </div>
  );
};

interface CardProps extends Pick<IProduct, 'id' | 'title' | 'price' | 'image'> {
  setIsOpen: () => void;
}

const Card = ({ setIsOpen, id, title, price, image }: CardProps) => {
  const { t } = useTranslation(['common']);
  const { handleNavigate } = useHandleNavigation(setIsOpen);

  const dispatch = useAppDispatch();

  const handleAddToCart = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.stopPropagation();
    dispatch(addItemToCart({ id }));
  };

  return (
    <div className={styles.card}>
      <button onClick={() => handleNavigate(`${APP_ROUTES.PRODUCT}/${id}`)} className={styles.card_link} />
      <img loading="lazy" className={styles.card_img} src={image} />
      <div className={styles.card_name}>
        <p>{title}</p>
        <div className={styles.card_name__price}>
          <b>{t('common:product.price', { price })}</b>
          <Button buttonType="default" className={styles.delete} onClick={(e) => handleAddToCart(e)}>
            <SVGDelete />
          </Button>
        </div>
      </div>
    </div>
  );
};
