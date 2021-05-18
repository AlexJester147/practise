const rect = document.querySelector('#rect')

rect.addEventListener('click', () => {
  navigator.vibrate(1000);
});