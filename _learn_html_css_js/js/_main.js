// comment
"use strict";


// ES6 ecmascript
console.log('hello world start');
//

//
//
//






// ==================
function ibg() {
  let ibg=document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++){
    if(ibg[i].querySelector('img')){
      ibg[i].style.backgroundImage='url(' + 
      ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
// ibg();

25; // литералы целого числа
34.5; // литералы дробного числа
"js asdf" // литералы строки
[3]; // литералы массива
[1, 2, 5];
let m = {
  name: "asdf", sur:"aaasdf"
}; // литералы объекта

const a = 134; // const
var n = 123; // variable
let p = 333;

// + - = / * 
// выражение
// keys words

function name_foo() {
  console.log('function');
}

name_foo();

// document.getElementById
// document.getElementsByClassName
// document.getElementsByName
// document.getElementsByTagName
// document.getElementsByTagNameNS

// lowerCamelCase   varNamePers
const BLOCK_SIZE = 1024;

console.log(55 % 6);

console.log(typeof(1));
// undefined
let undef;
console.log(undef === undefined);
console.log(typeof(undef) === 'undefined');
// null NaN
let null_ = null;
console.log(typeof(null_));
// Boolean
let bbb = true;
// Number
let inta = 3;
let fla = 3.3;
let inf_ = Infinity;
console.log(inf_);
console.log(typeof(inf_));
console.log(inf_ > 10000000000);
// BigInt
let bInt = 11111111111111111122222222222n;
// String
// 'a' "a" `a ${str}`
// Symbol
// уникальный идентификатор объекта
// Object Function
let obj = {aaa:'asdf', bbb:1234};

// numb -> str
inta = String(inta);
// bool -> str
bbb = String(bbb);
// str -> numb
let str = Number('34');
// "44" / '2' -> Number


// ======= oper
// math
//   + - * / % ** Math.floor(10 / 4);
// + - math or concatination
// 20 + 30 + '34' = str
// +'20' = 20
// +'20' + +'30' = 50
// '23' * 1 = 23

// postfix   a = b++
// prefix    a = ++b


// oper condition
// > <  >= <=  ==  !=  ===  !== 
// '57' > 10
// '007' == 7  
// '007' === 7
// null == undefined
// null === undefined

// BAG  
console.log(typeof(null)); // object
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // true



// logic oper
//   ||  &&  !   ??
console.log(true || false);
let admins = 3;
let users = 5;
admins > users || users++;
console.log(users);
users++;
console.log(users);
// ?? - сравнение с null / undefined
console.log(null ?? 5);
console.log(undefined ?? 5);
console.log(null ?? null ?? 8);

// =====  if   ? (ternarn) низк приорит

let mess = 'asdf qerw';

if (2 > 1) {
  console.log('if operation ');
} else if (5 > 3) {
  console.log('else if');
} else {
  console.log('else --');
} 

let quest = 5 > 6 ? '1234' : '0987';
console.log(quest);















console.log('hello world end');
