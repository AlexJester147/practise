const Rect = document.querySelector('.rect');
const text = document.querySelector('#text');
console.log(text);


Rect.addEventListener('click', () => {
  navigator.vibrate([100, 100, 200, 200, 300, 300, 400, 400, 500, 500, 600, 600, 700 ,700, 800, 800, 900, 900, 1000, 1000]);
});