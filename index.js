const tg = window.Telegram.WebApp //позволяет работать с тг апи

tg.expand(); // растягивает на фулл скрин при запуске

// Получаем имя пользователя Telegram
const username = tg.initDataUnsafe.user ? tg.initDataUnsafe.user.username : "Unknown User";

// Заменяем текст "Babitovec" на имя пользователя
document.addEventListener("DOMContentLoaded", function() {
    const usernameElements = document.getElementsByClassName("username");
    for (let i = 0; i < usernameElements.length; i++) {
        usernameElements[i].textContent = username;
    }
});
