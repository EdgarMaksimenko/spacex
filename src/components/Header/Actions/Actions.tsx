import React, {FC} from 'react';
import styles from './Actions.module.css';
import { useNavigate } from "react-router-dom";
import favourite from '../../../images/heart.svg';
import { useRecoilState, useRecoilValue } from 'recoil';
import { activeFavourite } from '../../../recoilState';

const Actions: FC = () => {
  const navigate = useNavigate();
  const [active, setActive] = useRecoilState(activeFavourite);

  const toggleFavourites = () => {
    setActive(true);
    navigate('/favourite');
  }

  return (
    <div className={styles.actions}>
      <button onClick={() => toggleFavourites()} className={active ? styles.favourite + ' ' + styles.active : styles.favourite}><img src={favourite} alt="favourite"/></button>
      <button className={styles.signin}>sign in</button>
    </div>
  )
};

export default Actions;