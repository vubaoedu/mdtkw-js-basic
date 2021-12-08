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

let btn4 = document.getElementsByTagName("button")[3];
btn4.addEventListener("click", function () {
  // Tạo thẻ li
  let li = document.createElement("li");
  li.innerHTML = "Chuối";

  // Lấy thẻ ul
  let ul = document.getElementsByTagName("ul")[0];

  // Thêm li vào làm con của ul
  ul.appendChild(li);
  console.log(ul);
});

let btn5 = document.getElementsByTagName("button")[4];
btn5.addEventListener("click", function () {
  // Lấy thẻ ul
  let ul = document.getElementsByTagName("ul")[0];

  let li = ul.children[0];

  // Xóa thẻ li
  li.remove();
});

//getBody();

//getLi();

// getItems();
// change();
