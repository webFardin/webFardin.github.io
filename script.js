"use strict";

let contactButtonTextWrapper = document.querySelector(
  "#contactButton > *:first-child"
);
let contactButtonIcons = document.querySelectorAll(
  ".contact-button > *:nth-child(2) > *"
);

let contactButton = document.getElementById("contactButton");

let sectionMe = document.getElementById("meSection");

let worksSectionSubjects = document.getElementById("worksSectionSubjects");

let codeAnimationWrapper = document.getElementById("codeAnimationWrapper");

let navigation = document.getElementById("navigation");

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

let worksSectionSubjectsData = [
  {
    name: "Templates",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" style="width: 0.8rem" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z"></path>
</svg>`,
    boxes: [
      {
        gif: "https://i.postimg.cc/nh5y2c5J/20221116-174755.gif",
        github: "https://github.com/webFardin/Templates/tree/main/01-Loading",
        codepen: "https://codepen.io/webFardin/full/JjpXGME",
      },
      {
        gif: "https://i.postimg.cc/gJmbrgRY/20220629-180020.gif",
        github:
          "https://github.com/webFardin/Templates/tree/main/02-Paint%20Toolbox",
        codepen: "https://codepen.io/webFardin/full/poLoYVd",
      },
      {
        gif: "https://i.postimg.cc/m2bQqXyK/20220924-165439.gif",
        github:
          "https://github.com/webFardin/Templates/tree/main/03-Music%20Player",
        codepen: "https://codepen.io/webFardin/full/WNJZVmJ",
      },
    ],
  },
  {
    name: "Games",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" style="width: 0.8rem" fill="currentColor" viewBox="0 0 16 16">
    <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM4 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
  </svg>`,
    boxes: [
      {
        gif: "https://i.postimg.cc/httds8Vz/the-Last-Strawberry.gif",
        github:
          "https://github.com/webFardin/Games/tree/main/01-The%20Lost%20Strawberry",
        codepen: "https://codepen.io/webFardin/full/jOxormx",
      },
    ],
  },
];

worksSectionSubjectsData.forEach((item) => {
  worksSectionSubjects.innerHTML += `
  <div class="works-section-subject">
              <h4 class="works-section-titles">
                ${item.icon}
                ${item.name}
              </h4>
            <div class="works-section-boxes">
            
            </div>
          </div>
  `;
});

worksSectionSubjectsData.forEach((item, index) => {
  item.boxes.forEach((box) => {
    document.querySelectorAll(".works-section-boxes")[index].innerHTML += `
      <div
        class="sample-works-boxes"
        style="background-image: url(${box.gif})"
      >
        <div class="sample-works-boxes-hover">
          <a href="${box.github}" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style="width: 100%"
              fill="#00ffddb3"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>source code
          </a>
          <a href="${box.codepen}" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style="width: 100%"
              fill="#00ffddb3"
              viewBox="0 0 512 512"
            >
              <path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z" />
            </svg>live version
          </a>
        </div>
      </div>`;
  });
});

let codeAnimationTypedWords = 0;
let codeAnimationTypeState = 1;
let codeAnimationText;
let codeAnimationTypeStatesNumber = 5;

function codeAnimationTypeEffect() {
  switch (codeAnimationTypeState) {
    case 1:
      codeAnimationText = 'let me = "Fardin Ebrahimi";';
      break;

    case 2:
      codeAnimationText = 'let role = "Front-End Programmer";';
      break;

    case 3:
      codeAnimationText = 'let skills = "HTML, CSS, JavaScript, Git";';
      break;

    case 4:
      codeAnimationText = 'let state = "Junior";';
      break;

    case 5:
      codeAnimationText = 'console.log("You are great! i love you so much❤");';
      break;
  }

  codeAnimationWrapper.textContent +=
    codeAnimationText[codeAnimationTypedWords];
  codeAnimationTypedWords = codeAnimationWrapper.textContent.length;

  if (codeAnimationTypedWords < codeAnimationText.length) {
    setTimeout(codeAnimationTypeEffect, 150);
  } else {
    setTimeout(() => {
      codeAnimationTextRemover();
    }, 4000);
  }
}

function codeAnimationTextRemover() {
  codeAnimationWrapper.textContent = codeAnimationWrapper.textContent.slice(
    0,
    -1
  );
  codeAnimationTypedWords = codeAnimationWrapper.textContent.length;
  if (codeAnimationWrapper.textContent.length != 0) {
    setTimeout(codeAnimationTextRemover, 50);
  } else {
    codeAnimationTypeState++;
    if (codeAnimationTypeState > codeAnimationTypeStatesNumber) {
      codeAnimationTypeState = 1;
    }
    codeAnimationTypeEffect();
  }
}

document.addEventListener("DOMContentLoaded", codeAnimationTypeEffect);

navigation.addEventListener("click", (e) => {
  if (!e.target.classList.contains("navigation-item")) {
    return;
  }
  document
    .querySelector(".active-navigation-item")
    .classList.remove("active-navigation-item");
  e.target.classList.add("active-navigation-item");

  document.querySelector(".active-page").classList.add("deactive-page");
  document.querySelector(".active-page").classList.remove("active-page");
  let clickedPageName = e.target.dataset.section;
  document
    .querySelector(`.section-${clickedPageName}`)
    .classList.remove("deactive-page");
  document
    .querySelector(`.section-${clickedPageName}`)
    .classList.add("active-page");
});

contactButton.addEventListener("click", (e) => {
  // For mobile version
  sectionMe.scrollIntoView(true);

  // For desktop version
  document
    .querySelector(".active-navigation-item")
    .classList.remove("active-navigation-item");
  document
    .querySelector('.navigation-item[data-section="me"]')
    .classList.add("active-navigation-item");

  document.querySelector(".active-page").classList.add("deactive-page");
  document.querySelector(".active-page").classList.remove("active-page");
  document.querySelector(`.section-me`).classList.remove("deactive-page");
  document.querySelector(`.section-me`).classList.add("active-page");
});
