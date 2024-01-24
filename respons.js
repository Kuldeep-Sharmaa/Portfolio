burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
ul = document.querySelector("ul");

burger.addEventListener("click", () => {
  ul.classList.toggle("visibilty");
  navbar.classList.toggle("height-nav");
});
