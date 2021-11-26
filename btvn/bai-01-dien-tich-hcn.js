function bai01() {
  let chieuDai = Number(prompt("Nhập chiều dài:"));
  let chieuRong = Number(prompt("Nhập chiều rộng:"));

  //let dienTich = chieuDai * chieuRong;
  let dienTich = tinhDienTichHCN(chieuDai, chieuRong);

  console.log("Diện tích:", dienTich);
  //   alert("Diện tích: " + dienTich);
}

function tinhDienTichHCN(w, h) {
  return w * h;
}

bai01();
