const images = [
  { img: "./asset/img/01.webp", active: false },
  { img: "./asset/img/02.webp", active: true },
  { img: "./asset/img/03.webp", active: true },
  { img: "./asset/img/04.webp", active: true },
  { img: "./asset/img/05.webp", active: true },
];
const containerEl = document.getElementById("container_img");
const upEl = document.getElementById("up");
const downEl = document.getElementById("down");
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
let scroll = 0;

images.forEach(function (image) {
  containerEl.innerHTML += ` <img src="${image.img}" alt="" class="d_none"  /> `;
});
const imgEl = document.querySelectorAll(".d_none");
imgEl[0].classList.remove("d_none");
console.log(imgEl);

upEl.addEventListener("click", function () {
  upImg();
});

downEl.addEventListener("click", function () {
  downImg();
});
//creare lo scroll delle immagini
function upImg() {
  const changeImg = imgEl[scroll];
  changeImg.classList.toggle("d_none");
  if (scroll === images.length - 1) {
    scroll = 0;
  } else {
    scroll++;
  }

  const nextSlide = imgEl[scroll];
  console.log(nextSlide);
  nextSlide.classList.toggle("d_none");
}
function downImg() {
  const changeImg = imgEl[scroll];
  changeImg.classList.toggle("d_none");
  if (scroll === 0) {
    scroll = images.length - 1;
  } else {
    scroll--;
  }

  const nextSlide = imgEl[scroll];
  console.log(nextSlide);
  nextSlide.classList.toggle("d_none");
}
//bottoni intervallo
startEl.addEventListener("click", function () {
  startScroll();
});

stopEl.addEventListener("click", function () {
  stopScroll();
});

function startScroll() {
  setInterval(() => {
    upImg();
  }, 2000);
}
function stopScroll() {
  clearInterval(startScroll());
}
