import React, { FC } from 'react';
import Actions from './Actions/Actions';
import styles from './Header.module.css';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className='container'>
        <div className={styles.header__inner}>
          <Logo />
          <Navigation />
          <Actions />
        </div>
      </div>
    </div>
  )
};

export default Header;