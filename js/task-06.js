const input = document.querySelector("#validation-input");

input.addEventListener("blur", ({ currentTarget }) => {
  const classList = currentTarget.classList;

  if (currentTarget.value.length === +currentTarget.dataset.length) {
    classList.remove("invalid");
    classList.add("valid");
    return;
  }
  classList.remove("valid");
  classList.add("invalid");
});
