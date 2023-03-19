import React, { FC } from 'react';
import styles from './Navigation.module.css';
import { NavLink } from "react-router-dom";
import { activeLinkState } from '../../../recoilState';
import { useRecoilState } from 'recoil';


const Navigation: FC = () => {
  const [active, setActive] = useRecoilState(activeLinkState);

  return (
    <nav className={styles.header__nav}>
      <NavLink
        to='/'
        className={active === 'home' ? styles.active : ''}
        onClick={() => setActive('home')}
      >Home</NavLink>
      <NavLink
        to='#'
        className={active === 'tours' ? styles.active : ''}
        onClick={() => setActive('tours')}
      >Tours</NavLink>
      <NavLink
        to='#'
        className={active === 'about' ? styles.active : ''}
        onClick={() => setActive('about')}
      >About</NavLink>
      <NavLink
        to='#'
        className={active === 'help' ? styles.active : ''}
        onClick={() => setActive('help')}
      >Help</NavLink>
    </nav>
  )
};

export default Navigation;