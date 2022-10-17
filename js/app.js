const model = document.querySelector(".model");
const modelContent = document.querySelector(".model-content");
const close = document.querySelector(".close");
const btn = document.getElementById("btn");

btn.addEventListener("click", openModel);
close.addEventListener("click", closeModel);

function openModel(e) {
  e.preventDefault();
  model.style.display = "block";
}

function closeModel() {
  modelContent.classList.add("slide-up")
  setTimeout(() => {
    model.style.display = "none";
    modelContent.classList.remove("slide-up")
  }, 500)
}
