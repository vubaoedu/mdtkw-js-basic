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

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    // Tạo ra một thẻ img có src
    let img = document.createElement("img");
    img.src = "./images/blank.png";

    // Thêm sự kiện click cho image
    img.addEventListener("click", function () {
      // Thay đổi src của img cho giống với data
      this.src = cardArray[i].img;
      dem++;
      if (dem % 2 == 0) {
        //alert("Đây là lần thứ 2 bạn click");
      }
    });

    // Lấy #board
    let board = document.getElementById("board");

    // Đưa thẻ img vào trong #board
    board.appendChild(img);
  }
}

createBoard();
