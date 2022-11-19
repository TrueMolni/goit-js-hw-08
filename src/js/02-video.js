import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
//імпорти
const STORAGE_KEY = 'videoplayer-current-time';

//створюємо відеоплеєр
iframe = document.querySelector('iframe');
const player = new Player(iframe);

//методом оn() відслідковуємо зміну часу в плеєрі, не частіше разу в сек
player.on('timeupdate', throttle(onPlay, 1000));

//зберігаємо в локальне сховище дані з плеєру
function onPlay(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

//підгружаємо дані після оновлення сторінки, якщо вони є
function getCurrentTime() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    // відновлюємо відтворення відео з попереднього моменту
    player.setCurrentTime(parsedData.seconds);
  }
}
// викликаємо функцію, щоб все працювало
getCurrentTime();
