//interactivel nav with toggle

const navClose = () => {
  const navLinks = document.querySelectorAll(".nav-links");

  navLinks.addEventListener("click", () => {
    nav.classList.toggle("nav-deactive");
  });
};

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

//toggle for nav button and nav links
$(document).ready(function () {
  $(".toggle-nav").click(function () {
    $(".toggle-nav").toggleClass("active-nav");
    $(".overlay-nav").toggleClass("active-nav");
    $(".menu-nav").toggleClass("active-nav");
  });
  $(".home").click(function () {
    $(".toggle-nav").toggleClass("active-nav");
    $(".overlay-nav").toggleClass("active-nav");
    $(".menu-nav").toggleClass("active-nav");
  });
  $(".about").click(function () {
    $(".toggle-nav").toggleClass("active-nav");
    $(".overlay-nav").toggleClass("active-nav");
    $(".menu-nav").toggleClass("active-nav");
  });
  $(".projects").click(function () {
    $(".toggle-nav").toggleClass("active-nav");
    $(".overlay-nav").toggleClass("active-nav");
    $(".menu-nav").toggleClass("active-nav");
  });
  $(".contacts").click(function () {
    $(".toggle-nav").toggleClass("active-nav");
    $(".overlay-nav").toggleClass("active-nav");
    $(".menu-nav").toggleClass("active-nav");
  });
});

var anchor = "";
document.documentElement.dataset.scroll = 0;
var about = document.getElementById("about");

navSlide();
navClose();
