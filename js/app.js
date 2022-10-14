const model = document.querySelector(".model");
const close = document.querySelector(".close");
const btn = document.getElementById("btn");

btn.addEventListener("click", openModel);
close.addEventListener("click", closeModel);
model.addEventListener("click", closeModel);

function openModel(e) {
  e.preventDefault();
  model.style.display = "block";
}

function closeModel() {
  model.style.display = "none";
}
