function openNav() {
  document.getElementById("sideNav").style.width = "68%";
  document.getElementById("main").style.marginLeft = "66%";
  document.getElementById("closeIcon").style.opacity = "1";
  // document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.4)";
  // document.getElementsByClassName("pic").style.backgroundColor = "rgba(255,255,255,0.5)";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("closeIcon").style.opacity = "0";
  // document.getElementById("main").style.backgroundColor = "rgba(255, 235, 205, 1)";
  // document.getElementById("pic").style.opacity = "1";
  // document.getElementsByClassName("pic").style.opacity = "1";
    // document.getElementsByTagName("img").style.opacity = "1";
    // document.getElementById("pic").style.backgroundColor = "none";

}

function lockArff() {
  var mealMenu = document.getElementById('mealMenu');
  mealMenu.classList.toggle('shutter');

}




window.onscroll = function() {
  // myFunction()
  console.log('beep');

};

// Get the navbar
// var header = document.getElementsByTagName("header");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     header.classList.add("pureStick")
//   } else {
//     header.classList.remove("pureStick");
//   }
// }