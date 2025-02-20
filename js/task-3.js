const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const valueInput = nameInput.value.trim();
  nameOutput.textContent = valueInput === '' ? 'Anonymous' : valueInput;
});
