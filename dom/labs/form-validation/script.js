let inputs = document.getElementsByTagName("input");
let button = inputs[4];

button.addEventListener("click", function (e) {
  let username = inputs[0].value;
  let email = inputs[1].value;
  let password = inputs[2].value;
  let checked = inputs[3].checked;
  e.preventDefault();
  console.log(checked);
  if (username == "" || email == "" || password == "") {
    alert("Vui lòng không để trống");
  } else if (password.length < 6) {
    alert("Mật khẩu không hợp lệ");
  } else if (checked == false) {
    alert("Vui lòng đồng ý điều khoản");
  } else {
    alert("Thành công!");
  }
});
