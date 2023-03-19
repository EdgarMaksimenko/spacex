import React, {FC} from 'react';
import styles from './Logo.module.css';
import { NavLink } from "react-router-dom";
import logo from '../../../images/logo.png';

const Logo: FC = () => {
  return (
    <NavLink to='/'><img src={logo} alt="logo" /></NavLink>
  )
};

export default Logo;