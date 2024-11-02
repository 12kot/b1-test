
import { NavLayout } from 'layouts';

import { Banners } from './Banners';
import { Content } from './Content';

export const Home = () => {
  return (
    <NavLayout>
      <Content />
      <Banners />
    </NavLayout>
  );
};
