import {atom, selector,} from 'recoil';


export const activeFavourite = atom({
  key: 'activeLinkState', 
  default: false,
});