import { useParams } from 'react-router-dom';

import { NotFound } from 'pages';
import { NavLayout } from 'layouts';
import { Loader } from 'components';
import { useGetProductByIdQuery } from 'store';

import { Content } from './Content';
import { Recommendations } from './Recommendations';

export const Product = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useGetProductByIdQuery(
    { id: Number(id) },
    {
      skip: !id || isNaN(Number(id)),
    },
  );

  if (isLoading) return <Loader center />;
  if (!product) return <NotFound />;

  return (
    <NavLayout overflow="hidden">
      <Content {...product} />
      <Recommendations category={product.category} />
    </NavLayout>
  );
};
