"use strict";

let contactButtonTextWrapper = document.querySelector(
  "#contactButton > *:first-child"
);
let contactButtonIcons = document.querySelectorAll(
  ".contact-button > *:nth-child(2) > *"
);

let typedWords = 0;
function contactButtonTypeEffect() {
  let contactButtonText = "Contact me";

  contactButtonTextWrapper.textContent += contactButtonText[typedWords];
  typedWords = contactButtonTextWrapper.textContent.length;

  if (typedWords < contactButtonText.length) {
    setTimeout(contactButtonTypeEffect, 200);
  } else {
    setTimeout(() => {
      contactButtonTextRemover();
    }, 6000);
  }
}

function contactButtonTextRemover() {
  contactButtonTextWrapper.textContent =
    contactButtonTextWrapper.textContent.slice(0, -1);
  typedWords = contactButtonTextWrapper.textContent.length;
  if (contactButtonTextWrapper.textContent.length != 0) {
    setTimeout(contactButtonTextRemover, 50);
  } else {
    contactButtonIconsEffect();
  }
}

function contactButtonIconsEffect() {
  setTimeout(() => {
    contactButtonIcons[0].style.opacity = "1";
  }, 100);
  setTimeout(() => {
    contactButtonIcons[1].style.opacity = "1";
  }, 700);
  setTimeout(() => {
    contactButtonIcons[2].style.opacity = "1";
  }, 1300);

  setTimeout(() => {
    contactButtonIcons[0].style.opacity = "0";
    setTimeout(() => {
      contactButtonIcons[1].style.opacity = "0";
    }, 200);
    setTimeout(() => {
      contactButtonIcons[2].style.opacity = "0";
    }, 400);

  }, 8000);
  setTimeout(() => {
    contactButtonTypeEffect();
  }, 9000);
}

document.addEventListener("DOMContentLoaded", contactButtonTypeEffect);
document.addEventListener('DOMContentLoaded', e => {
  document.querySelector('.introduce-text').style.opacity = '1';
})
