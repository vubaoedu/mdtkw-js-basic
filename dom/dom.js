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

function getFood() {
  let ul = document.getElementById("food");
  let lis = ul.children;

  let li1 = lis[1];
  console.log(li1.nextElementSibling);
  console.log(li1.previousElementSibling);
}

function getBody() {
  let body = document.body; // collection
  console.log(body.children[2]);
}

let btn2 = document.getElementsByTagName("button")[1];
btn2.onclick = function () {
  alert("Hello");
};

let btn3 = document.getElementsByTagName("button")[2];
btn3.addEventListener("click", function () {
  alert("Bye");
});

//getBody();

//getLi();

// getItems();
// change();
