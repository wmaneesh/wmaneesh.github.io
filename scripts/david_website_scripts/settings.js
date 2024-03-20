const settingsElement = document.getElementById("settings");
const quizContainer = document.getElementById("quizContainer");

const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
  document.getElementById("main").style.marginLeft = "350px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}


var slideObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type == "attributes") {
      
      // here you can play with it now :)
      if (mutation.target.getAttribute('closing') == "true") {
        console.log('ok. closing is true') 
      } else {
        console.log(':s closing is false') 
      }      
    }
  });
});

slideObserver.observe(quizContainer, {
  attributes: true, //configure it to listen to attribute changes
  attributeFilter: ['closing'] // filter your attributes
});

function changeAriaHiddenRole(element, boolean) {
  element.setAttribute('closing', boolean)
}

function toggleAriaHiddenRole(boolean) {
  if (quizContainer.getAttribute('closing') === "true") {
    changeAriaHiddenRole(quizContainer, true)
  } else {
    changeAriaHiddenRole(quizContainer, false)
  }
}