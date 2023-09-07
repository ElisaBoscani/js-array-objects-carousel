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
let scroll = 0;
images.forEach(
  (image) => (containerEl.innerHTML += ` <img src="${image.img}" alt=""   /> `)
);

upEl.addEventListener("click", function () {});
