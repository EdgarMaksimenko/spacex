import React, {FC} from 'react';
import ActionButton from '../../ActionButton/ActionButton';
import styles from './Actions.module.css';
import { useNavigate } from "react-router-dom";
import { activeLinkState } from '../../../recoilState';
import { useRecoilState } from 'recoil';

const Actions: FC = () => {
  const navigate = useNavigate();
  const [active, setActive] = useRecoilState(activeLinkState);

  const openFavourite = () => {
    setActive('');
    navigate('/favourites');
  };

  return (
    <div className={styles.actions}>
      <ActionButton type={'favourites'} onClick={() => openFavourite()}/>
      <button className={styles.signin}>sign in</button>
    </div>
  )
};

export default Actions;