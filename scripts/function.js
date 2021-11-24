function gioiThieu(x, y) {
  console.log("Xin chào.");
  console.log("Tôi tên là " + x);
  console.log("Bạn tôi là " + y);
  let z = x + y;
  return z;
}

gioiThieu(14, 69); // Lời gọi hàm
let u = gioiThieu("Phạm", "Nhân"); // Lời gọi hàm
gioiThieu("Vũ", "Đạt");

console.log(u);
