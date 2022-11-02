const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', (e) => {
  if (!e.currentTarget.value.trim()) output.textContent = "Anonymous";
  else output.textContent = e.currentTarget.value.trim();
})