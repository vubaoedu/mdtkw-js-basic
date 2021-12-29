const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
];

let dem = 0;
let card1 = null, card2 = null;
let accepted = true;

// Hàm kiểm tra chính xác hay không, khi đã lật 2 card
function check() {
  if (card1.src == card2.src) {
    // Ẩn card đi
    // card1.style.opacity = 0;
    card1.style.visibility = "hidden";
    card2.style.visibility = "hidden";
  }
  else {
    // Úp card lại
    card1.src = "./images/blank.png";
    card2.src = "./images/blank.png";
  }
  accepted = true;
}

// Hàm xử lý khi user click vào card
function clickCard() {
  if (accepted == true) {
    this.src = cardArray[i].img;
    dem++;
    // Thay đổi src của img cho giống với data
    if (dem % 2 == 0) {
      card2 = this;
      accepted = false;
      // Đảm bảo card1 và card2 đã có
      if (card1 != null && card2 != null) {
        if (card1 != card2) {
          setTimeout(check, 2000);
        }
        else {
          dem--;
        }
      }
    }
    else {
      card1 = this;
      console.log(card1);
    }
  }
}

// Hàm tạo ra board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    // Tạo ra một thẻ img có src
    let img = document.createElement("img");
    img.src = "./images/blank.png";

    // Thêm sự kiện click cho image
    img.addEventListener("click", clickCard);

    // Lấy #board
    let board = document.getElementById("board");

    // Đưa thẻ img vào trong #board
    board.appendChild(img);
  }
}

createBoard();
