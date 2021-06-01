let vibrateLength = document.querySelector('input');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');

console.log(startButton, stopButton);

startButton.addEventListener('click', () =>{
console.log(vibrateLength.value);

if (!vibrateLength.value){
  vibrateLength.value = 1;
}

  navigator.vibrate(vibrateLength.value*100);
});

stopButton.addEventListener('click', () =>{
  navigator.vibrate(0);
});