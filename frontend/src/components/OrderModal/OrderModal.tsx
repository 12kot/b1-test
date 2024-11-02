import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { setItemsInCart, useAppDispatch } from 'store';
import { Modal, H2, Input, Textarea, Button } from 'components';

import styles from './styles.module.scss';

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const OrderModal = ({ isOpen, setIsOpen }: Props) => {
  const { t } = useTranslation(['cart', 'common']);
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    phone: Yup.string().required(),
    address: Yup.string().required(),
    wishes: Yup.string().required(),
  });

  const formik = useFormik<IFormik>({
    initialValues: initFormik,
    validationSchema,
    onSubmit: (data, { resetForm }) => {
      console.log(data);
      resetForm();
      dispatch(setItemsInCart({ products: [] }));
      setIsOpen();
      alert('Done');
    },
  });
    
  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen} className={styles.container}>
      <H2>{t('cart:modal.deliveryInfo')}</H2>
      <form className={styles.container_form} onSubmit={formik.handleSubmit}>
        <div className={styles.container_flex}>
          <Input
            type="email"
            disabled
            placeholder={t('cart:modal.email')}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!(formik.touched.email && formik.errors.email)}
          />
          <Input
            type="phone"
            disabled
            placeholder={t('cart:modal.phone')}
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!(formik.touched.phone && formik.errors.phone)}
          />
        </div>
        <Input
          type="text"
          placeholder={t('cart:modal.address')}
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={!!(formik.touched.address && formik.errors.address)}
        />
        <Textarea
          rows={5}
          placeholder={t('cart:modal.wishes')}
          name="wishes"
          value={formik.values.wishes}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={!!(formik.touched.wishes && formik.errors.wishes)}
        />
        <footer className={styles.container_flex}>
          <Button buttonType="transparent" className="--transparent w-full" type="button" onClick={setIsOpen}>
            {t('common:buttons.cancel')}
          </Button>
          <Button className="w-full ">{t('common:buttons.done')}</Button>
        </footer>
      </form>
    </Modal>
  );
};

interface IFormik {
  email: string;
  phone: string;
  address: string;
  wishes: string;
}

const initFormik: IFormik = {
  phone: '+375 29 281 20 71',
  email: 'yakol.nikita@gmail.com',
  address: '',
  wishes: '',
};
