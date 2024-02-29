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
  distance: "50px",
  duration: 900,
  viewFactor: 1,
  interval: 300,
  reset: true,
  delay: 300,
  useDelay: "once",
});

//scroll for find out more
$("#section05").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#about").offset().top,
    },
    "slow"
  );
});

//scroll for find out more
$("#section05").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#about").offset().top,
    },
    "slow"
  );
});

$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        900,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });
});

// $(function () {
//   $("#section05").on("click", function (e) {
//     e.preventDefault();
//     $("body").animate(
//       { scrollTop: $($(this).attr("#about")).offset().top },
//       500,
//       "linear"
//     );
//   });
// });

// var id;

// var image_class = $(document).ready(function () {
//   $(".project-image").click(function () {
//     id = $("img", this).attr("class").split(" ").pop();
//     console.log(id);
//   });
// });

// console.log(image_class);

// $(image_class)
//   .click(function (e) {
//     if ($(e.target).hasClass("expanded")) {
//       $("." + id)
//         .removeClass("expanded")
//         .stop()
//         .animate(
//           {
//             width: 500,
//             height: 300,
//           },
//           200
//         );
//     } else {
//       $("#projects")
//         .find("." + id)
//         .fadeTo(0, 1);
//       $("." + id)
//         .addClass("expanded")
//         .stop()
//         .animate(
//           {
//             width: 800,
//             height: 533,
//           },
//           200
//         );
//     }
//   })
//   .mouseout(function () {
//     $("." + id)
//       .removeClass("expanded")
//       .stop()
//       .animate(
//         {
//           width: 500,
//           height: 300,
//         },
//         200
//       );
//   });
