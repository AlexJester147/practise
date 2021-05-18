const Rect = document.querySelector('.rect');

console.log(Rect);


Rect.addEventListener('click', () => {
  navigator.vibrate(3000);
});