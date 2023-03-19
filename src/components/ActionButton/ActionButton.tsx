import React, {FC} from 'react';
import styles from './ActionButton.module.css';
import favourites from '../../images/heart.svg';

interface ActionButtonProps {
  type: string;
  onClick: any;
}

const ActionButton: FC<ActionButtonProps> = ({type, onClick}) => {
  return (
    <button onClick={onClick} className={styles.button__action}>
      {type === 'favourites' && 
        <img src={favourites} alt="action-icon" />
      }
      
    </button>
  )
};

export default ActionButton;