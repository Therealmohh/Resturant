const hamburger = document.getElementsByClassName("hamburger")[0];
const mobile = document.getElementsByClassName("container")[0];

hamburger.addEventListener("click", () => {
  mobile.classList.toggle("active");
});