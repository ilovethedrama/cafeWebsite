const restNavLinks = document.querySelectorAll(
  ".restaurant-navigation__link a"
),
  foodchoice = document.getElementsByClassName('foodmenu__item--section');
sidenavBtnClose = document.querySelector(".sidenav__button--close"),
  titleAddy = document.querySelector(".restaurant__title--addy"),
  foodMenuClose = document.getElementById("foodmenu-btn-close"),
  mealMenu = document.getElementById("restaurant-navigation"),
  foodMenuItem = document.querySelectorAll('.foodmenu__item'),
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
  restNavLinks[i].onclick = function () {
    lockArff();
  };
}

sidenavBtnClose.onclick = function () {
  lockArff();
};

menuOption.onclick = function () {
  openNav();
};

foodMenuClose.onclick = () => {
  foodMenu.style.alignItems = "center";
  foodMenu.style.WebkitAlignItems = "center";
}


const starters = document.getElementById('starterSection')








for (i = 0; i < foodMenuItem.length; i++) {
  foodMenuItem[i].addEventListener("click", function () {
    this.nextElementSibling.classList.toggle('hideIt')
    console.log('boop!', this.nextElementSibling);
    foodMenu.style.alignItems = "flex-start";
    foodMenu.style.WebkitAlignItems = "flex-start";
  });
}



var hamburgerMenu = document.getElementById('nav-icon4');


hamburgerMenu.onclick = () => {
  hamburgerMenu.classList.toggle('open');
  lockArff();
}



