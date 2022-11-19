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
function onPlay({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}

//підгружаємо дані після оновлення сторінки, якщо вони є
if (STORAGE_KEY) player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
