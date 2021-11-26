let a = 2;
if (a < 0) {
  console.log("So am");
} else {
  console.log("So khong am");
}

switch (a) {
  case 1:
    console.log("Mot");
    break;
  case 2:
    console.log("Hai");
    break;
  default:
    console.log("zzz");
}

console.log("=====");

while (a <= 5) {
  console.log(a);
  a++;
}

console.log("=====");

for (let i = 1; i <= 5; i = i + 2) {
  console.log(i);
}

console.log("=====");

let x = [3, 5, 8];
for (let i in x) {
  console.log(i);
}

console.log("=====");
for (let i of x) {
  console.log(i);
}

let sv = {
  id: 8,
  ten: "Teo",
  diem: 5.0,
};

console.log("=====");

for (let i in sv) {
  console.log(i, sv[i]);
}

// sv.ten giống với sv["ten"]
