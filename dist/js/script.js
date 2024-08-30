window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");
  var content = document.getElementById("content");

  // Fade out preloader
  preloader.classList.add("fade-out");

  // Show content
  content.style.display = "block";

  // Remove preloader after fade-out
  setTimeout(function () {
    preloader.style.display = "none";
  }, 500); // Adjust fade-out duration
});


const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "13 december 2024";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);



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
