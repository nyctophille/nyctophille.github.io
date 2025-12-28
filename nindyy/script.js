const musikAudio = new Audio(musik);
musikAudio.autoplay = true;
musikAudio.loop = true;

const bgContainer = document.querySelector(".bg");
bgContainer.style = `background-image: url("${backgroundImage}")`;

const openingContainer = document.querySelector(".opening");
const openBtn = document.querySelector(".btn-open");
const preloadContainer = document.querySelector(".preload");

let mainContents = [];

function createMainContent() {
  for (let i = 0; i < konten.length; i++) {
    const mainContentElement = document.createElement("div");
    mainContentElement.classList.add("content", "main-content");

    if (!konten[i].foto) {
      mainContentElement.classList.add("text-only");
    }

    let html = "";

    if (konten[i].foto) {
      html += `
          <img src="${konten[i].foto}" class="foto" alt="" />
      `;
    }

    if (konten[i].ucapan) {
      html += `<p class="text">${konten[i].ucapan}</p>`;
    }

    if (i !== konten.length - 1) {
      html += `<button class="next-btn" onclick="nextContent(${i + 1})">Next</button>`;
    }

    mainContentElement.innerHTML = html;
    document.body.appendChild(mainContentElement);
  }

  mainContents = document.querySelectorAll(".main-content");
}

function nextContent(index) {
  if (index > 0) {
    mainContents[index - 1].classList.add("hide");
  }

  setTimeout(() => {
    mainContents[index].classList.add("show");
  }, 200);
}

function startContent() {
  musikAudio.play();
  openingContainer.classList.add("hide");
  nextContent(0);
}

openBtn.addEventListener("click", startContent);

window.onload = () => {
  preloadContainer.classList.add("hide");

  setTimeout(() => {
    openingContainer.classList.add("show");
  }, 200);
};

createMainContent();
