let a = [2, 5, 8, 4]; // a là mảng
console.log("Phần tử đầu", a[0]);
console.log("Kích thước: ", a.length);
console.log("Phần tử cuối: ", a[a.length - 1]);

let ds = [
  {
    ten: "Teo",
    diem: 4.9,
  },
  {
    ten: "Ti",
    diem: 5.1,
  },
  {
    ten: "Tun",
    diem: 8,
  },
];

// Điểm của sinh viên đầu tiên trong danh sách
console.log(ds[0].diem);
// Lấy ra tên của sinh viên cuối cùng trong danh sách
console.log(ds[ds.length - 1].ten);
// Kiểu dữ liệu của array là object
console.log(typeof ds);
