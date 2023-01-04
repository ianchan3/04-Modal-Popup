const model = document.querySelector(".model");
const modelContent = document.querySelector(".model-content");
const close = document.querySelector(".close");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  model.style.display = "block";
});

close.addEventListener("click", () => {
  modelContent.classList.add("slide-up")
  setTimeout(() => {
    model.style.display = "none";
    modelContent.classList.remove("slide-up")
  }, 500)
});
