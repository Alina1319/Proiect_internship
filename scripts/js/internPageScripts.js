const goTopPageBtn = document.getElementById("goTopPageBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

const stickyNavbar = () => {
  if (document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50) {
    goTopPageBtn.classList.add("sticky")
  } else {
    goTopPageBtn.classList.remove("sticky");
  }
}

//toggle the menu in navbar
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("hiddenLinks");
  navLinks.classList.toggle("sideDrawer");
});


console.log("_ internPageScripts.js LOADED _");