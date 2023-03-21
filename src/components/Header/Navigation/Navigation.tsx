import React, { FC } from 'react';
import styles from './Navigation.module.css';
import { NavLink } from "react-router-dom";

const Navigation: FC = () => {
  return (
    <nav className={styles.header__nav}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='#'>Tours</NavLink>
      <NavLink to='#'>About</NavLink>
      <NavLink to='#'>Help</NavLink>
    </nav>
  )
};

export default Navigation;