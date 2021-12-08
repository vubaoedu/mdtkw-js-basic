var index = 0;
let anh = ["anh2.jpg", "anh1.jpg", "anh3.jpg", "anh4.jpg"];

nextSlide = function () {
  index++;
  if (index == 4) {
    index = 0;
  }
  let img = document.getElementById("img");
  //img.src = anh[index];

  // Cách 3
  // Remove img
  img.remove();

  // Tạo img
  let newImg = document.createElement("img");
  newImg.src = anh[index];
  newImg.id = "img";

  // Thêm vào lại
  let div = document.getElementsByClassName("sideshow")[0];
  div.appendChild(newImg);

  // Cách 2
  // img.style.display = "none";
  // setTimeout(function () {
  //   img.style.display = "block";
  // }, 10);

  // Cach 1
  // img.style.animation = "none";
  // setTimeout(function () {
  //   img.style.animation = "fade 2s";
  // }, 10);
};

prevSlide = function () {
  index--;
  if (index < 0) {
    index = 3;
  }
  document.getElementById("img").src = anh[index];
};

setInterval(nextSlide, 2000);
