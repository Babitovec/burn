const tg = window.Telegram.WebApp //позволяет работать с тг апи

tg.expand(); // растягивает на фулл скрин при запуске

const overflow = 100
document.body.style.overflowY = 'hidden'
document.body.style.marginTop = `${overflow}px`
document.body.style.height = window.innerHeight + overflow + "px"
document.body.style.paddingBottom = `${overflow}px`
window.scrollTo(0, overflow)

let ts: number | undefined
const onTouchStart = (e: TouchEvent) => {
  ts = e.touches[0].clientY
}
const onTouchMove = (e: TouchEvent) => {
  if (scrollableEl) {
    const scroll = scrollableEl.scrollTop
    const te = e.changedTouches[0].clientY
    if (scroll <= 0 && ts! < te) {
      e.preventDefault()
    }
  } else {
    e.preventDefault()
  }
}
document.documentElement.addEventListener('touchstart', onTouchStart, { passive: false })
document.documentElement.addEventListener('touchmove', onTouchMove, { passive: false })

// Получаем имя пользователя Telegram
const username = tg.initDataUnsafe.user ? tg.initDataUnsafe.user.username : "Unknown User";

// Заменяем текст "Babitovec" на имя пользователя
document.addEventListener("DOMContentLoaded", function() {
    const usernameElements = document.getElementsByClassName("username");
    for (let i = 0; i < usernameElements.length; i++) {
        usernameElements[i].textContent = username;
    }
});
