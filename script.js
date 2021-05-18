const Rect = document.querySelector('.rect');

console.log(Rect);


Rect.addEventListener('click', () => {
  navigator.vibrate([1000, 500, 1000, 500, 2000]);
});