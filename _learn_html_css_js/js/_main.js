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

// ========== cicle
let num = 3;
while (num < 6) {
  console.log(num);
  num++;
}

while (num < 7) console.log(num++);

do {
  console.log(++num);
} while (num < 10)

// встроенное объявление
for (let i = 0; i < 3; i++) {
  console.log(i);
}

for (; num < 13; num++) {
  console.log(num);
}

for (; num < 15;) {
  num++;
  console.log(num);
}

for (;;) {
  num++;
  console.log(num, 'asdf --');
  break
}

for (;num < 20;) {
  num++;
  if (num % 2 == 1) continue;
  console.log(num, 'zcv --');
}

// for (let i = 1; i < 5; i++) {
//   for (let j = 9; j < 14; j++) {
//     console.log(i, j);
//   }
// }

// for (let i = 1; i < 5; i++) {
//   for (let j = 9; j < 14; j++) {
//     if (i % 2 == 1) break;
//     console.log(i, j);
//   }
// }


// Метки для циклов
firstFor:
for (let i = 1; i < 5; i++) {
  for (let j = 9; j < 14; j++) {
    if (i % 2 == 0) break firstFor;
    console.log(i, j);
  }
}

firstFor:
for (let i = 1; i < 5; i++) {
  for (let j = 9; j < 14; j++) {
    if (i % 2 == 0) continue firstFor;
    console.log(i, j);
  }
}

function foo1(name) {
  console.log(name);
}

foo1('uname');

// global var
// local var

function foo2(name, surname='sname') {
  console.log(name, surname);
}

foo2('nnn');

// функции колбэки

function calcS(n1, n2, fmore, fless) {

  if (n1 > n2) {
    fmore();
    return 'more';
  } else {
    fless();
    return 'less';
  }
}

function more() {console.log('more');}
function less() {console.log('less');}

console.log(calcS(5, 4, more, less));

// recursion  10_000

// function expresion 
// ! только после создания
let fexp = function () {
  console.log('f expretion');
};

fexp();

// arrov function

let name_var = function(p1, p2) {
  return p1 + p2;
};

let name_v = (p1, p2) => p1 + p2;
console.log(name_v(99,22));

let name_v2 = () => {
  return 55 + 33;
};

// Вызов время задержка / интервал
// setInterval(fexp, 5000);
// setTimeout(foo2, 3000, 'nnnnn');

() => 333 + 333;


function showN(num) {
  console.log(num);
  if (num < 5) {
    setTimeout(showN, 1000, ++num);
  }

}

showN(0);
let nameTimeout = setTimeout(foo1, 500);
let nameInteval = setInterval(foo1, 600);
clearTimeout(nameTimeout);
clearInterval(nameInteval);


// Object

let usInf = new Object();  // 1
let usInf2 = {};           // 2 

let usInf3 = {
  key1: 'VVV',
  key2: 'NNN',
  key3: 'VVV'
};

console.log(usInf3);
console.log(usInf3.key1);
console.log(usInf3["key1"]);

let var_in_objj = 1234;

let obj_1 = {
  aa: 12345,
  'aaa bb':222,
  [var_in_objj]: 'asdf',
  0:0  // -> "0":0
}

let id = Symbol("id");

let obj_2 = {
  name: 'vvvv',
  age: 30,
  [id]: 'asdf'
}

// Скрыть свойства объектов
// не появляются в циклах
// Системные символы
// Symbol.iterator, Symbol.toPrimitive ...

console.log(obj_2);


let obj_3 = {
  name: 'vvvv',
  addr: {
    aaa: 1234,
    bbb: 34
  }
}
console.log(obj_3);
console.log(obj_3.addr);
console.log(obj_3.addr.aaa);
console.log(obj_3["addr"]["aaa"]);

function _foo3(name, age) {
  return {
    name,
    age,
    "js aa": true
  }
}

// add properti 
obj_3.age = 30;
obj_3['nnnnn aaaa'] = 'wqer aaa';
obj_3.obj = {123:123, 0:0};

console.log(obj_3);

delete obj_3.age;
delete obj_3['nnnnn aaaa'];

console.log(obj_3);
// mutable obj

let _obj_3 = obj_3;

obj_3.name = 'AAAAAAAAAAAAA'

console.log(obj_3);
console.log(_obj_3);

// Copy obj
// Object.assign(Obj, prop1, prop2)

let copy_obj_3 = Object.assign({}, obj_3);

obj_3.name = 'BBBBB'

console.log(obj_3);
console.log(_obj_3);
console.log(copy_obj_3);

// Добавить пачкой свойства
Object.assign(obj_3, {asdf: 1234, qwer:3333});

console.log(obj_3);
console.log(_obj_3);
console.log(copy_obj_3);

// Опциональная цепочка
console.log(obj_3?.addr?.aaa);
console.log(obj_3?.abbbb?.dddd);

// 'aaaa' in obj  - True  aaaa: undefined
// obj.aaaaa = false

// for (let key in obj) {}

for (let k in obj_3) {
  console.log(k);
  console.log(obj_3[k]);
}

// function in obj

let obj_4 = {
  aaa:111,
  bbb:333,
  foo() {console.log('function in obj' +
  obj_4.aaa + '  ' + obj_4.bbb)}
}

obj_4.foo();

// !!! This обращение к 1му родите Obj
// ! Стрелочная функция нет своего this


let obj_5 = {
  aaa:111,
  bbb:333,
  foo() {console.log('function in obj' +
  this.aaa + '  ' + this.bbb)}
}

obj_5.foo();

// Функция конструктор
// 1 CamelCase
// 2 call New

function UserInfo(name) {
  this.name = name;
  this.age = 30;
}

console.log(new UserInfo('qqqq'));
let mmm = new UserInfo('zzzz');
console.log(mmm);

// Math
Math.floor(0);
Math.ceil(0);
Math.round(0);
Math.round(0 * 100) / 100;
n = 1.2222;
console.log(n.toFixed(2));
n = n + Number.EPSILON;

// Infinity / NaN  
isNaN(23 + 'asdf');
isFinite('234')
isFinite(NaN);
isFinite(Infinity);

console.log(parseFloat('123.22px'));
console.log(parseInt('123.22px'));

// random (0, 1)
console.log(Math.random());

// Math.max()
// Math.min()
// Math.abs()
// Math.pow(3,2)

// String ________________
// 'aa'  "asdf"   `${var} zzz``

let arr = (a, b) => String(a * b);
console.log(arr(2,3));
console.log(typeof(arr(2,3)));

console.log(`asdf ${arr(8,9)} asdf`);
'asdf'.length
n = 'qwer';
n[n.length - 1]


for (let char in n) {
  console.log(char, '--------');
}

for (const c of n) {
  console.log(c, '===');
}

'adf'.toUpperCase();
'asdf'.toLocaleLowerCase();
'asdf'.indexOf('sd');
console.log('asdf'.charAt(2));
console.log('asdf'.includes('df'));
'adsf'.startsWith('as');
'asdf'.endsWith('df');

'asdf'.slice(2,4);
'asdf'.slice(-2, -1);



























console.log('hello world end');
