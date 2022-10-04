import { atom } from "recoil";

export const blogListState = atom({
    key: 'blogListState',
    default: []
  });

export const blogPostDataState = atom({
    key: 'blogPostDataState',
    default: null
  });

export const modalState = atom({
  key: 'modalState',
  default: false
})