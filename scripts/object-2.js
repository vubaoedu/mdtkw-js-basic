let x = {
  ten: "Nguyen Van Teo",
  namSinh: 2003,
  gioiTinh: true,
  diem: 4.9,

  in: function () {
    console.log(x.ten, "->", x.diem);
  },
  congDiem: function (d) {
    x.diem += d;
  },
};

x.congDiem(1);
x.in();
// console.log(x);
