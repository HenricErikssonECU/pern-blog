import { atom } from "recoil";

export const blogListState = atom({
    key: 'blogPostList',
    default: []
  });

export const viewState = atom({
    key: "view",
    default: 'list'
  });

export const blogPostDataState = atom({
    key: 'blogPostData',
    default: null
  });