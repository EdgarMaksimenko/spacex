import React, {FC} from 'react';
import styles from './Favourites.module.css';
import { useRecoilState } from 'recoil';
import { activeFavourite } from '../../recoilState';



const Favourites: FC = () => {
  const [active, setActive] = useRecoilState(activeFavourite);

  React.useEffect(() => {
    return () => setActive(false)
  })

  return (
    <>Favourites page</>
  )
};

export default Favourites;