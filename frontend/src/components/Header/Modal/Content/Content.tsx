import { MouseEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { env } from 'config';
import { APP_ROUTES } from 'Router';
import { useHandleNavigation } from 'hooks';
import { addItemToCart, IProduct, useAppDispatch, useAppSelector } from 'store';
import { Button, H3, Loader, Span } from 'components';

import { SVGDelete } from 'assets';

import styles from './styles.module.scss';

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const Content = ({ setIsOpen, isOpen }: Props) => {
  const { t } = useTranslation(['common']);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  const { products: cartProducts } = useAppSelector((state) => state.cart);

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

  return (
    <div className={styles.container}>
      <section className={styles.container_header}>
        <H3>{t('common:yourCart')}</H3>
        <Span>{t('common:nItems', { value: cartProducts.length })}</Span>
      </section>
      {isLoading ? (
        <Loader center />
      ) : (
        <section className={styles.container_cards}>
          {products.map((pr, i) => (
            <Card key={i} setIsOpen={setIsOpen} {...pr} />
          ))}
        </section>
      )}
      <Button>{t('common:placeOrder')}</Button>
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
    e.preventDefault();
    e.stopPropagation();
    dispatch(addItemToCart({ id }));
  };

  return (
    <Button buttonType="default" className={styles.card} onClick={() => handleNavigate(`${APP_ROUTES.PRODUCT}/${1}`)}>
      <img loading="lazy" className={styles.card_img} src={image} />
      <div className={styles.card_name}>
        <p>{title}</p>
        <div className={styles.card_name__price}>
          <b>{t('common:price', { price })}</b>
          <Button buttonType="default" className={styles.delete} onClick={(e) => handleAddToCart(e)}>
            <SVGDelete />
          </Button>
        </div>
      </div>
    </Button>
  );
};
