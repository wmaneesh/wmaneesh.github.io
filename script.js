//burger nav bar animation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //toggle nav
    nav.classList.toggle("nav-active");

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`; //index/7 gives you a delay
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
};


navSlide();

// let number = document.getElementById("phone-text");

// // This handler will be executed only once when the cursor
// // moves over the text
// number.addEventListener("mouseover", function (event) {
//   // change the text when the mouse is over it
//   //   number.style.opacity = 0;
//   number.innerHTML = "416-841-8915";

//   // reset the text after a short delay
//   //   setTimeout(function () {
//   //     // number.style.opacity = 1;
//   //     number.innerHTML = "416-841-8915";
//   //   }, 1000);
// });

// number.addEventListener("onmouseout", function (event) {
//   //   number.style.opacity = 1;

//   setTimeout(function () {
//     number.innerHTML = "&nbsp &nbsp &nbsp &nbsp Phone &nbsp &nbsp &nbsp";
//     // number.style.opacity = 1;
//   }, 2500);
// });

//scroll reveal for the about text and contact links
const sr = ScrollReveal({ viewOffset: { top: 65 } });
sr.reveal(".about-box", {
  duration: 2000,
  viewFactor: 0.01,
});

sr.reveal(".contact-title", {
  duration: 2000,
  viewFactor: 0.01,
});

sr.reveal(".contact-links a", {
  origin: "bottom",
  distance: "25px",
  duration: 1000,
  viewFactor: 1,
  interval: 500,
  reset: true,
  delay: 500,
  useDelay: "once",
});

var anchor = "";
document.documentElement.dataset.scroll = 0;
var about = document.getElementById("about");

// $(function () {
//   $(".nav-links a").click(function () {
//     anchor = $(this).attr("href");
//   });
// });
