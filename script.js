"use strict";

let contactButtonTextWrapper = document.querySelector(
  "#contactButton > *:first-child"
);
let contactButtonIcons = document.querySelectorAll(
  ".contact-button > *:nth-child(2) > *"
);

let worksSectionSubjects = document.getElementById("worksSectionSubjects");

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
    icon: `<svg xmlns="http://www.w3.org/2000/svg" style="width: 0.8rem" fill="currentColor" class="bi bi-grid-1x2-fill" viewBox="0 0 16 16">
  <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z"></path>
</svg>`,
    description: "Small components of websites",
    boxes: [
      {
        gif: "https://i.postimg.cc/bJbyJQnf/20220629-175612.gif",
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
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-controller" viewBox="0 0 16 16">
    <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"/>
    <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"/>
  </svg>`,
    description: "Funny mini games",
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
            <div class="works-section-titles">
              <h4>
                ${item.icon}
                ${item.name}
              </h4>
              <h5>${item.description}</h5>
            </div>
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
              style="width: 3rem"
              fill="#00ffddb3"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a href="${box.codepen}" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style="width: 3rem"
              fill="#00ffddb3"
              viewBox="0 0 512 512"
            >
              <path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z" />
            </svg>
          </a>
        </div>
      </div>`;
  });
});
