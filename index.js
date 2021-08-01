// ========= Ссылки ==========
import getMarkupMenu from './src/menu.json';
import template from './src/templates/menuItem.hbs';

const checkBox = document.querySelector('#theme-switch-toggle');
const elementBody = document.querySelector('body');
const menuList = document.querySelector('.menu');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const setToStorageDarkTheme = ()=>localStorage.setItem('theme', Theme.DARK);
const setToStorageLightTheme = ()=>localStorage.setItem('theme', Theme.LIGHT);

// === Запись в localStorage темы по умолчанию, если ее там нет. ===
// === Установление из localStorage, если она там есть. ===
function reloadTheme() {
        if (localStorage.getItem('theme') === null) {
                setToStorageLightTheme();
                elementBody.classList.add(localStorage.getItem('theme'));
            }
            else {
                if (localStorage.getItem('theme') === Theme.DARK) {
                    checkBox.checked = true;
                    setNewTheme();
                }
                else {
                    checkBox.checked = false;
                    setNewTheme();
                }
            }
        }
reloadTheme();


// === Запись в localStorage теми в зависимости от положения чекбокса ===
function appendToStorage() {
            checkBox.checked ? setToStorageDarkTheme() : setToStorageLightTheme();  
        }
        
// === Переключение темы в localStorage и в меню ===
function setNewTheme () {
            appendToStorage();
            function addTheme() {
                elementBody.removeAttribute('class');
                elementBody.classList.add(localStorage.getItem('theme'));
            }
            addTheme();
        }

// === Вставка пунктов меню в список ===
menuList.innerHTML = template(getMarkupMenu)


  
// === Переключение темы в localStorage и в меню приклике на чекбокс ===
checkBox.addEventListener('click', () => setNewTheme())

