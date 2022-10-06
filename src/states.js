import { atom } from "recoil";

// atomerna använder vi för att kunna skicka, ändra på och använda vissa data mellan olika komponenter och vyer utan att behöva vara bundna till att bygga hierarkisk layout av koden

export const blogListState = atom({
    key: 'blogListState',
    default: []
  });

export const blogPostState = atom({
    key: 'blogPostState',
    default: null
  });

export const modalState = atom({
  key: 'modalState',
  default: false
})

