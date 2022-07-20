function menuButton() {
  document.getElementById("sideBar").style.width = "100vw";
  document.getElementById("sideBar").style.height = "100vh";
}

function closeMenu() {
  document.getElementById("sideBar").style.width = "0";
}

window.onscroll = function () {
  barScroll();
};

var topbar = document.getElementById("header");
var logo = document.getElementById("logo");
var sticky = topbar.offsetTop + 50;

// console.log(sticky);

function barScroll() {
  if (window.scrollY >= sticky) {
    topbar.classList.add("sticky");
  } else {
    topbar.classList.remove("sticky");
  }
}
