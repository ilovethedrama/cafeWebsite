const restNavLinks = document.querySelectorAll(
    ".restaurant-navigation__link a"
  ),
  sidenavBtnClose = document.querySelector(".sidenav__button--close"),
  titleAddy = document.querySelector(".restaurant__title--addy"),
  foodMenuClose = document.getElementById("foodmenu-btn-close"),
  mealMenu = document.getElementById("restaurant-navigation"),
  titleGroup = document.querySelector(".restaurant__title"),
  socials = document.getElementById("social-media-menu"),
  foodMenu = document.getElementById("foodmenu"),
  header = document.querySelector("header"),
  menuOption = restNavLinks[0];

function lockArff() {
  mealMenu.classList.toggle("shutter");
  socials.classList.toggle("shutter");
  header.classList.toggle("heightPush");
}

function openNav() {
  foodMenuClose.style.opacity = "1";
  foodMenu.style.width = "100%";
  header.style.marginLeft = "100%";
}

function closeNav() {
  foodMenuClose.style.opacity = "0";
  foodMenu.style.width = "0";
  header.style.marginLeft = "0";
}

for (var i = 0; i < restNavLinks.length; i++) {
  restNavLinks[i].onclick = function() {
    lockArff();
    console.log("pie");
  };
}

sidenavBtnClose.onclick = function() {
  lockArff();
  console.log("cherry");
};

menuOption.onclick = function() {
  openNav();
};

// function windowScaleDownMsg() {
//   let currentSize =
//     window.innerWidth < 600
//       ? console.log("the foodmenu should be 100% and a block element")
//       : console.log("the foodmenu should be 65% and a flex element");
// }

// window.addEventListener("resize", windowScaleDownMsg);
