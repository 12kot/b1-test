import { NavLayout } from 'layouts';

import { Content } from './Content';
import { Recommendations } from './Recommendations';

export const Product = () => {
  return (
    <NavLayout overflow='hidden'>
      <Content />
      <Recommendations />
    </NavLayout>
  );
};
