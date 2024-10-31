
import { Banners } from './Banners';
import { Content } from './Content';

import styles from "./styles.module.scss";

export const Home = () => {
  return (
    <div className={styles.container}>
      <Content />
      <Banners />
    </div>
  );
};
