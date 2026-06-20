const btn = document.getElementById("btn");
const list = document.getElementById("list");

btn.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "DOM";
  list.appendChild(newItem);
});

list.addEventListener("click", function (event) {
  if (event.target.tagName == "LI") {
    event.target.classList.toggle("list");
  }
});
