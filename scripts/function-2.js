// function sayHello() {
//   console.log("Hello");
// }

let sayHello = function () {
  console.log("Hello");
  return 1;
};

sayHello();
console.log(typeof sayHello);

let a = sayHello;
a(); // Giống với sayHello();
console.log(typeof a);
