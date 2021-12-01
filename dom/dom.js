// DOM = Document Object Model
function change() {
  let h1 = document.getElementById("abc");
  h1.innerHTML = "Tạm biệt";
  h1.title = "Bye";
  h1.style.color = "green";
  h1.style.backgroundColor = "pink";
  h1.style.fontSize = "50px";
}

function getItems() {
  let items = document.getElementsByClassName("item");
  items[0].innerHTML = "Chuối";
}

function getLi() {
  let lis = document.getElementsByTagName("li");
  lis[lis.length - 1].innerHTML = "Tiêu";
}

getLi();

// getItems();
// change();
