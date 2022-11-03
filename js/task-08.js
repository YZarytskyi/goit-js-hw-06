const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  const {
    elements: { email, password },
  } = e.currentTarget;
  
  e.preventDefault();
  if (!email.value || !password.value) {
    return alert("All fields should be filled");
  }
  console.log(`Email: ${email.value} Password: ${password.value}`);
  e.currentTarget.reset();
});
