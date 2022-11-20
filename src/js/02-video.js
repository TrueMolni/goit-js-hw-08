import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
//імпорти
const STORAGE_KEY = 'videoplayer-current-time';

//створюємо відеоплеєр
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

//методом оn() відслідковуємо зміну часу в плеєрі, не частіше разу на сек
player.on('timeupdate', throttle(onPlay, 1000));

//зберігаємо в локальне сховище дані з плеєру
function onPlay({ seconds }) {
  try {
    localStorage.setItem(STORAGE_KEY, seconds);
  } catch (error) {
    console.log(`an ${error.name} has arived!`);
    return [];
  }
}

//підгружаємо дані після оновлення сторінки, якщо вони є
function load() {
  const savedTime = localStorage.getItem(STORAGE_KEY);
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
}
load();
