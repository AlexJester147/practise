const text = document.querySelector('#text');
const result = document.querySelector('.result');

const keyValue = result.querySelector('#key-value');
const keyCodeValue = result.querySelector('#keyCode-value');
const codeValue = result.querySelector('#code-value');
const charCodeValue = result.querySelector('#charCode-value');

document.addEventListener('keydown',(event) => {

keyValue.innerHTML = `${event.key}<br><div class="subscription">event.key</div>`;
keyCodeValue.innerHTML = `${event.keyCode}<br><div class="subscription">event.keyCode</div>`;
codeValue.innerHTML = `${event.code}<br><div class="subscription">event.code</div>`;
charCodeValue.innerHTML = `${event.charCode}<br><div class="subscription">event.charCode</div>`;

text.style.display = 'none';
result.style.display = 'flex';
});