const Rect = document.querySelector('.rect');
const text = document.querySelector('#text');
console.log(text);


Rect.addEventListener('click', () => {
  do {navigator.vibrate([i*100, i*100]);} while (i<10)
});
