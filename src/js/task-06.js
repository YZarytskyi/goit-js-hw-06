const input = document.querySelector("#validation-input");

input.addEventListener("blur", (e) => {
  const classList = e.currentTarget.classList;

  if (e.currentTarget.value.length == e.currentTarget.dataset.length) {
    classList.remove("invalid");
    classList.add("valid");
    return;
  }
  classList.remove("valid");
  classList.add("invalid");
});
