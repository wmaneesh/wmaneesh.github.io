const settingsElement = document.getElementById("settings");
const quizContainer = document.getElementById("quizContainer");

const lowerBoundUpButton = document.getElementById("lowerUp");
const lowerBoundDownButton = document.getElementById("lowerDown");
const upperBounderUpButton = document.getElementById("upperUp");
const upperBoundDownButton = document.getElementById("upperDown");

const MutationObserver =
  window.MutationObserver ||
  window.WebKitMutationObserver ||
  window.MozMutationObserver;

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
const openNav = () => {
  document.getElementById("mySidenav").style.width = "375px";
};

// document.getElementById("mySidenav").style.width = "375px";

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
};

var slideObserver = new MutationObserver(function (mutations) {
  // mutations.forEach(function (mutation) {
  //   if (mutation.type == "attributes") {
  //     // here you can play with it now :)
  //     // if (mutation.target.getAttribute("closing") == "true") {
  //     //   console.log("ok. closing is true");
  //     // } else {
  //     //   console.log(":s closing is false");
  //     // }
  //   }
  // });
});

slideObserver.observe(quizContainer, {
  attributes: true, //configure it to listen to attribute changes
  attributeFilter: ["closing"], // filter your attributes
});

const changeAriaHiddenRole = (element, boolean) => {
  element.setAttribute("closing", boolean);
}

const toggleAriaHiddenRole = () => {
  if (quizContainer.getAttribute("closing") === "true") {
    changeAriaHiddenRole(quizContainer, true);
  } else {
    changeAriaHiddenRole(quizContainer, false);
  }
}

let lower = 0;
let upper = 25;

lowerBoundUpButton.addEventListener("click", (event) => {
  lower = lowerBounderUp(event, upper, true);
});

lowerBoundDownButton.addEventListener("click", (event) => {
  lower = lowerBoundDown(event, true);
});

upperBounderUpButton.addEventListener("click", (event) => {
  upper = upperBoundUp(event, false);
});

upperBoundDownButton.addEventListener("click", (event) => {
  upper = upperBoundDown(event, lower, false);
});
