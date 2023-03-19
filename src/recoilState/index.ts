import {atom, selector,} from 'recoil';


export const activeLinkState = atom({
  key: 'activeLinkState', 
  default: 'home',
});