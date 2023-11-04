    
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', inputRename);

function inputRename() {
    output.textContent = input.value || 'Anonymous';
  }