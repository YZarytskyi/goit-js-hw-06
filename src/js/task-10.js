function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input')
const buttonCreate = document.querySelector('[data-create]')
const buttonDestroy = document.querySelector('[data-destroy]')
const controls = document.querySelector('#controls')
const boxes = document.querySelector('#boxes')

const createBoxes = (amount) => {
  if (!amount) return
  boxes.innerHTML = "";
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    const rect = `${30 + 10 * i}px`;
    div.style.width = rect;
    div.style.height = rect;
    div.style.backgroundColor = getRandomHexColor();
    boxes.append(div)
  }
  input.value = ""
}

const destroyBoxes = () => {
  boxes.innerHTML = "";
}

buttonCreate.addEventListener('click', () => createBoxes(input.value))
buttonDestroy.addEventListener('click', destroyBoxes)