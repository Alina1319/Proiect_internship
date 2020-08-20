
//hidden navbar

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-firstPage").style.top = "0";
  } else {
    document.getElementById("nav-firstPage").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

//toggle the menu in navbar (index.html)

  document.getElementById('nav-toggle').onclick = function () {
  document.getElementById("menu-content").classList.toggle("hidden");
  }
  document.getElementById('menu-content').onclick = function () {
  document.getElementById("menu-content").classList.toggle("hidden");
    }
  
  