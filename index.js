const tg = window.Telegram.WebApp //позволяет работать с тг апи

document.addEventListener('DOMContentLoaded', function () {
    const tg = window.Telegram.WebApp; // позволяет работать с тг апи
    tg.expand(); // растягивает на фулл скрин при запуске
    tg.disableVerticalSwipes(); // Отключает скролл
});
