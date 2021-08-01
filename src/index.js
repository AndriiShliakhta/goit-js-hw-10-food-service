import './sass/main.scss';
// ========= Ссылки ==========
import getMarkupMenu from './partials/menu.json';
import template from './partials/templates/menuItem.hbs';
import * as refs from './partials/refs.js';


// === Запись в localStorage темы по умолчанию, если ее там нет. ===
// === Установление из localStorage, если она там есть. ===
function reloadTheme() {
        if (localStorage.getItem('theme') === null) {
                refs.setToStorageLightTheme();
                refs.elementBody.classList.add(localStorage.getItem('theme'));
            }
            else {
                if (localStorage.getItem('theme') === refs.Theme.DARK) {
                    refs.checkBox.checked = true;
                    setNewTheme();
                }
                else {
                    refs.checkBox.checked = false;
                    setNewTheme();
                }
            }
        }
reloadTheme();


// === Запись в localStorage теми в зависимости от положения чекбокса ===
function appendToStorage() {
            refs.checkBox.checked ? refs.setToStorageDarkTheme() : refs.setToStorageLightTheme();  
        }
        
// === Переключение темы в localStorage и в меню ===
function setNewTheme () {
            appendToStorage();
            function addTheme() {
                refs.elementBody.removeAttribute('class');
                refs.elementBody.classList.add(localStorage.getItem('theme'));
            }
            addTheme();
        }

// === Вставка пунктов меню в список ===
refs.menuList.innerHTML = template(getMarkupMenu)


  
// === Переключение темы в localStorage и в меню приклике на чекбокс ===
refs.checkBox.addEventListener('click', () => setNewTheme())


