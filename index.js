const tg = window.Telegram.WebApp; // позволяет работать с тг апи

tg.expand(); // растягивает на фулл скрин при запуске

// тест
window.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });
window.scrollTo(0, 100);
Telegram.WebApp.ready();

// Получаем имя пользователя Telegram
const username = tg.initDataUnsafe.user ? tg.initDataUnsafe.user.username : "Unknown User";

// Заменяем текст "Babitovec" на имя пользователя
document.addEventListener("DOMContentLoaded", function() {
    const usernameElements = document.getElementsByClassName("username");
    for (let i = 0; i < usernameElements.length; i++) {
        usernameElements[i].textContent = username;
    }

    // Фиксируем элемент навигации
    fixNavigation();
    window.addEventListener('resize', fixNavigation);
    window.addEventListener('scroll', fixNavigation);
});

// Функция для фиксирования элемента навигации
function fixNavigation() {
    const nav = document.getElementById('navigation');
    nav.style.position = 'fixed';
    nav.style.bottom = '0';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.width = '100%';
    nav.style.backgroundColor = '#000000'; // При необходимости, можно убрать
    nav.style.zIndex = '1000'; // Чтобы навигация была поверх других элементов
}
