let size = 50; // global
let img = document.getElementsByTagName("img")[0];
img.style.width = size + "%";

function toHon() {
  if (size < 100) {
    size = size + 10;
  }
  img.style.width = size + "%"; // 60 + "%" = "60%"
}

function nhoHon() {
  if (size > 10) {
    size = size - 10;
  }
  img.style.width = size + "%"; // 60 + "%" = "60%"
}
