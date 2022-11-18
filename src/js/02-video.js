import Player from '@vimeo/player';

iframe = document.querySelector('iframe');
console.log(iframe);

const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
