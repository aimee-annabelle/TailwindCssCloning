let bigDiv = document.getElementById("big-div");
let coloredNav = document.getElementById("navbar-colored");
let transparentNav = document.getElementById("navbar-transparent");
console.log(coloredNav.classList);
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    coloredNav.style.display = "flex";
    transparentNav.style.display = "none";
    console.log(coloredNav.classList);
  } else {
    coloredNav.style.display = "none";
    transparentNav.style.display = "flex";
  }
});
