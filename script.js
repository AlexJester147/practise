const Rect = document.querySelector('.rect');
const text = document.querySelector('#text');
console.log(text);


Rect.addEventListener('click', () => {
  for (let i=0; i<10; i++){
  navigator.vibrate([i*100, i*100]);
}
});