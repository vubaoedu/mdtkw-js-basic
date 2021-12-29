

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
let diem = 0;

let fail = new Audio("audios/fail.mp3");
let success = new Audio("audios/success.mp3");
let win = new Audio("audios/hpny.mp3");
let accepted = true;
function createBoard() {


  cardArray.sort(function () {
    return 0.5 - Math.random();
  });
  console.log(cardArray);

  for (let i = 0; i < cardArray.length; i++) {
    // Tạo ra một thẻ img có src
    let img = document.createElement("img");
    img.src = "./images/blank.png";
    img.className = cardArray[i].name;

    // Thêm sự kiện click cho image
    img.addEventListener("click", function () {
      console.log(img.className);
      // Thay đổi src của img cho giống với data
      if (accepted) {
        this.src = cardArray[i].img;
        dem++;
        if (dem % 2 == 0) {
          accepted = false;
          card2 = this;
          if (card2 == card1) {
            dem--;
            accepted = true;
            return;
          }
          //alert("Đây là lần thứ 2 bạn click");
          if (card1.className === card2.className) {
            success.play();
            diem++;
            if (diem == cardArray.length / 2) {
              document.getElementById("wrapper").style.display = "block";
              setTimeout(function () {
                win.play();
              }, 3000);
              firework();
            }
            setTimeout(function () {
              card1.style.visibility = "hidden";
              card2.style.visibility = "hidden";
              accepted = true;
            }, 1000);
            document.getElementById("result").innerHTML = diem;
          }
          else {
            fail.play();
            setTimeout(function () {
              card1.src = "./images/blank.png";
              card2.src = "./images/blank.png";
              accepted = true;
            }, 1000);
          }
        }
        else {

          card1 = this;
        }
      }

    });

    // Lấy #board
    let board = document.getElementById("board");

    // Đưa thẻ img vào trong #board
    board.appendChild(img);
  }
}

function firework() {
  const container = document.querySelector('#wrapper');
  const fireworks = new Fireworks(container, { /* options */ });
  fireworks.setOptions({ delay: { min: 10, max: 15 }, sound: { enabled: true } });
  fireworks.start();
  //fireworks.pause();
  //fireworks.clear();

  // stop and clear fireworks
  //fireworks.stop();

  // after initialization you can change the fireworks parameters

}

createBoard();
