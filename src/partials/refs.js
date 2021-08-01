export const checkBox = document.querySelector('#theme-switch-toggle');
export const elementBody = document.querySelector('body');
export const menuList = document.querySelector('.menu');
export const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
export const setToStorageDarkTheme = ()=>localStorage.setItem('theme', Theme.DARK);
export const setToStorageLightTheme = ()=>localStorage.setItem('theme', Theme.LIGHT);