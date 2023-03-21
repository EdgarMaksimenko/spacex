import React, {FC} from 'react';
import Banner from '../../components/Banner/Banner';
import styles from './Home.module.css';
import { useRecoilState } from 'recoil';
import { activeFavourite } from '../../recoilState';

const Home: FC = () => {
  const [active, setActive] = useRecoilState(activeFavourite);
  // React.useEffect(() => {
  //   setActive(false)
  // })
  return (
    <Banner/>
  )
};

export default Home;