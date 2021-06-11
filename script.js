const text = document.querySelector('#text');
const rect = document.querySelector('#rect');
const aim = document.querySelector('.aim');
let count = 0;

rect.style.display = 'flex';

const listener = (e) => {
  rect.style.left = e.pageX - (rect.offsetWidth/2) + "px";
  rect.style.top = e.pageY - (rect.offsetHeight/2) + "px";

  let Rect = rect.getBoundingClientRect();
  let Aim = aim.getBoundingClientRect();
  
  if (Rect.top <= Aim.bottom && 
    Rect.right >= Aim.left &&
    Rect.left <= Aim.right &&
    Rect.bottom >= Aim.top){
      localStorage.setItem('key', count);
      count = localStorage.getItem('key');
    count++;
    rect.textContent=count;
    
   
    aim.style.opacity = '0';
    aim.style.top = (Math.floor(Math.random()*window.innerHeight-aim.offsetHeight));
    aim.style.left = (Math.floor(Math.random()*window.innerWidth-aim.offsetWidth));
    aim.style.right = (Math.floor(Math.random()*window.innerWidth-aim.offsetWidth));
    aim.style.bottom =  (Math.floor(Math.random()*window.innerHeight-aim.offsetHeight));
  } else {
    aim.style.opacity = '1';
  }

};

rect.addEventListener('mousedown', e => {
    document.addEventListener('mousemove', listener);
    
});

rect.addEventListener('mouseup', e => {
    document.removeEventListener('mousemove', listener);
});



