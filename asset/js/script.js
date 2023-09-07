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
/* images.forEach(
  (image) =>
    (containerEl.innerHTML += ` <img src="${image.img === i}" alt=""   /> `)
); */
images.forEach(function (image) {
  containerEl.innerHTML += ` <img src="${image.img}" alt="" class="d_none"  /> `;
});
const imgEl = document.querySelectorAll(".d_none");
imgEl[0].classList.remove("d_none");
console.log(imgEl);

upEl.addEventListener("click", function () {
  const changeImg = imgEl[scroll];
  if (scroll === images.length - 1) {
    scroll = 0;
  } else {
    scroll++;
  }

  changeImg.classList.toggle("d_none");
  const nextSlide = imgEl[scroll];
  console.log(nextSlide);
  nextSlide.classList.toggle("d_none");
});
