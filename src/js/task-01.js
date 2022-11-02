const items = document.querySelectorAll("li.item");

console.log("Number of categories:", items.length);

for (let item of items) {
  const title = item.querySelector("h2");
  const elements = item.querySelectorAll("li");

  console.log("Category:", title.textContent);
  console.log("Elements:", elements.length);
}
