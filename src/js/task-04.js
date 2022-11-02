let counterValue = 0;
const value = document.querySelector("#value");
const buttons = document.querySelectorAll("button");

for (let button of buttons) {
  button.addEventListener("click", (e) => {
    const action = e.currentTarget.dataset.action;
    action === "increment" && (counterValue += 1);
    action === "decrement" && (counterValue -= 1);
    value.textContent = counterValue;
  });
}
