// // ALL DATA TYPES
// //Primitive Data Types (Besit data tipleri)
// // String dt
// console.log("Hello"+"JS");

// // Number
// console.log(5+10);

// // Boolean

// console.log(true);
// console.log(false);

// // ======================================================
// // Composite Data Types (Birleshik data tipleri)

// // Array dt
// var a = ['table',20,true,"pen"];
// console.log(a);

// // Object dt

// var b = {
//     name: "Ayten",
//     age:21
// }
// console.log(b);

// // ======================================================
// // Special Data Types (Xususi data tipleri)
// // undefined
// var c = undefined;
// console.log(c);

// // null
// var e = null;
// console.log(e);

// OPERATORS

// Assignment operators (Daxil etme ve ya menimsetme operatorlari)
// =
// +=
// -=
// *=
// /=
// %=
// **=
// var a=5;
// a**=10;
// console.log(a);

// Aricmatic operators (Riyazi operators)
// +
// -
// *
// /
// %
// **
// ++
// --

// var a = 5;
// var b = 10;
// console.log(a%b);

// Compare operators
// ==
// ===
// >
// >=
// <
// <=
// !=
// !==

// var a = "5";//string
// var b = 5;//number

// if (a!==b) {
//   console.log(true);
// }else{
//     console.log(false);
// }

// Logical operators
// && - AND
// || - OR
// !  - NOT

// if (!false) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// var enterSign = "nicat@gmail.com";
// var enterPass = "abc123";

// var defaultSign = "nicat@gmail.com";
// var defaultPass = "abc123";

// if ((enterPass === defaultPass) && (enterSign === defaultSign) ) {
//   console.log('sign in success');
// }else{
//   console.log('login or password wrong');
// }

// String operators
// +
// +=

// var a = "JavaScript";
// var b = "Hello ";
// a+=b;
// console.log(a);

// Special Operators
// ,

// var a = 5,
//   b = 10;

// \
// var a = 'Nicat\'s book';
// var a = "Nicat\"s book";
// console.log(a);

// shert ?duz netice:sehv netice
// 5 > 10 ? console.log("duzdu") : console.log("sehvdir");

// typeof
// console.log(typeof(5));

// new
// this
class Car {
  constructor(model) {
    this.brand = model;
    return this.brand;
  }
}

var myCar = new Car("BMW");
console.log(myCar instanceof Car);

// delete
var car = {
  brand: "BMW",
  model: "X5",
};
// // in
// delete car.brand;
// console.log(car.brand);
console.log("brand" in car);

// if       - eger
// else     - deyilse
// else if  - dyilse eger

// var a = 1;

// if(a == 5){
//   console.log('this is 5');
// }else if(a == 6){
//   console.log('this is 6');
// }else if(a == 7){
//   console.log('this is 7');
// }else{
//   console.log('something wrong');
// }

var myTime = 7;

if (myTime >= 5 && myTime <= 10) {
  console.log("Good morning");
  if (myTime == 5) {
    console.log("get up");
  } else if (myTime == 7) {
    console.log("have breakfast");
  } else if (myTime == 10) {
    
    console.log("go to work");
  }
} else if (myTime > 10 && myTime <= 17) {
  console.log("Good afternoon");
} else if (myTime > 17 && myTime <= 21) {
  console.log("Good evening");
} else if (myTime >= 22 && myTime < 23) {
  console.log("Good night");
} else if (myTime == 23) {
  console.log("hey man, go to rest");
} else {
  console.log("no time");
}
