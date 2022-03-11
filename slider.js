const imgUrl = [
  "image/pic-1.avif",
  "image/pic-2.avif",
  "image/pic-3.avif",
  "image/pic-4.avif",
];

const setImg = document.getElementById("slider-img");
let imgIndex = 0;
setInterval(() => {
  if (imgIndex >= imgUrl.length) {
    imgIndex = 0;
  }
  const imgSetUrl = imgUrl[imgIndex];
  setImg.setAttribute("src", imgSetUrl);
  imgIndex++;
}, 2000);
