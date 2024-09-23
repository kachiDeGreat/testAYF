AOS.init();

$(window).on("load", function () {
  // Preloader
  $(".loader").fadeOut();
  $(".loader-mask").delay(350).fadeOut("slow");
});

var countDownDate = new Date("Dec 13, 2024 22:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // console.log(distance)

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".count-down").innerHTML = "Count down experied";
  }
});

// console.log(countDownDate);

// // Add event listener to window scroll
// document.addEventListener("scroll", function () {
//   // Get the navbar element
//   console.log("Scroll event triggered");
//   var navbar = document.querySelector("body > nav");

//   // Check if user has scrolled down
//   if (window.scrollY > 50) {
//     // Adjust the scroll distance to your liking
//     navbar.classList.add("scrolled"); // Add the 'scrolled' class
//   } else {
//     navbar.classList.remove("scrolled"); // Remove the 'scrolled' class
//   }
// });
