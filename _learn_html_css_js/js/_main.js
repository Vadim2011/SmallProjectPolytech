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
  console.log(ibg);
  for (var i = 0; i < ibg.length; i++){
    if(ibg[i].querySelector('img')){
      ibg[i].style.backgroundImage='url(' + 
      ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
console.log('==========================');
ibg();

console.log('==========================');
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
function fff() { console.log('fff ------ ')};

// function expresion 
// ! только после создания
let fexp = function () {
  console.log('f expretion');
};

let f_ex = function () {
  console.log('f expretion');
}();

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
  if (num < 2) {
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

function UserInfo (name) {
  this.name = name;
  this.age = 30;
}

class UserInfo1 {
  constructor(name) {
    this.name = name;
    this.age = 30;
  }
}

console.log(new UserInfo('qqqq'));
let mmm = new UserInfo('zzzz');
console.log(mmm);

console.log(new UserInfo1('qqqq'));
let nnn = new UserInfo1('zzzz');
console.log(nnn);
console.log(typeof(nnn));

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


//  array ----------

let array = [
  "adf",
  123,
  12.22,
  true
];

array[2];

let matrix = [
  [1, 2, 3],
  [4, 5, 6], 
  [7, 8, 9]
];

matrix.length;
matrix[0] = [0, 0, 0];
matrix[3] = [0, 0, 0];

// Очередь, упорядоченный порядок
// Стек

arr = [1, 2, 3];
arr.push(8);
console.log(arr);
arr.shift();
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(0, 9);
console.log(arr);
delete arr[2];
console.log(arr);
arr[2] = 9
console.log(arr);
arr.push(8);
console.log(arr);
arr.push(8);
console.log(arr);

arr.splice(1, 2);
console.log(arr); 

arr.splice(1, 1, 'fff');
console.log(arr); 

arr.splice(1, 0, 'asdf', 'asdf');
console.log(arr); 

// copy array
let new_array = arr.slice(1,3);
console.log(new_array); 

new_array = arr.slice();
console.log(new_array); 

let n_arr = arr.concat('qwer');
console.log(arr); 
console.log(n_arr); 

console.log(arr.indexOf(33)); // -1
console.log(arr.lastIndexOf(8));
console.log(arr.includes('asdf'));

// find(item, inde, array)

let _arr = [
  {n: 'asdf', a: 23}, 
  {n: 'ddd', a: 3}, 
  {n: 'fff', a: 2},
];

console.log(_arr.find(function (item, index, _arr) {
  return item.a === 3;
}));

let res_find = _arr.find(item => item.a === 23);
console.log(res_find);

let res_indfind = _arr.findIndex(item => item.a === 23);
console.log(res_indfind, '=========');

// filter

console.log(_arr.filter(item => item.a > 1));

// sort
console.log(arr.sort());

function compareNum(a, b) {
  // if (a > b) return 1;
  // if (a == b) return 0;
  // if (a < b) return -1;

  return a - b
}

console.log([1, 4, 2, 6, 9, 2, 0, 4, 6].sort(compareNum));

console.log([1, 4, 2, 6, 9, 2, 0, 4, 6].sort((a, b) => a - b));

// reverse 
console.log([1, 4, 2, 6, 9, 2, 0, 4, 6].reverse());

// map 
let map_arr = [1, 2, 3, 4, 5].map(item => item**2);
console.log(map_arr);

// str.split
str = 'asdf,qwer,zxcv';
console.log(str);

let str_arr = str.split(',')
console.log(str_arr);

console.log(str_arr.join('-'));
console.log(String(str_arr));


console.log(typeof(arr));
console.log(typeof(obj));

console.log(Array.isArray(arr));
console.log(Array.isArray(obj));

arr = [1, 3, 3, 5, 9, 9]

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (const i of arr) {
//   console.log(i);
// }

// for (let i of arr) {
//   console.log(i);
// }

// arr.forEach(function (item, index, array) {
//   console.log(item, index, array); 
// });

// arr.forEach(item => console.log(item));

let my_foo = i => console.log(i**2);
arr.forEach(my_foo);

arr.map(my_foo);

// redice
// let v = arr.reduce(function(previosValue, item, index, array){

//}, [init])

let res;
res = arr.reduce((prev, item) => prev * item, 1);
console.log(res);

res = arr.reduce((prev, item) => String(prev) + String(item));
console.log(res);

res = arr.reduceRight((prev, item) => String(prev) + String(item));
console.log(res);

// copy 
console.log(arr.slice());
console.log(Object.assign({}, obj));

// DOM - document object model
// BOM - brauser object model
// enviroment JS + dop

//           window
// DOM         BOM        JS
// document  navigator    object
//           location     array
//           history      function
//

// window.innerWidth;
// window.innerHeight;

// location.href;

// переход на другую страницу
// location.href = "https://google.com"
// http://127.0.0.1:5500/_learn_html_css_js/_index.html


// alert('asdf');
// let boool = confirm('asdaaaa aaa');
// let promtRes = prompt('aaaaaa');

// CSSOM


console.log(document);

let hhh = document.documentElement;
console.log(hhh);

let bd = document.body;
console.log(bd);
console.log(bd.div);
let hd = document.head;
console.log(hd);

let chNode = bd.childNodes;
// tag   node
// text  node
// comment node

// navigation

// el.hasChildNodes()

// Collection ==================
for (let node of chNode) {
  console.log(node);
}

// Нет методов массива
// Живые (актуальное состойние)
// только для чтения
// требуются другие методы

// previousSiblingNode
// nextSiblingNode
// parentNode
console.log(chNode);
let chn = bd.children;
console.log(chn);

// previousElementSibling
// nextElementSibling
// parentElement
// firstElementChild
// children 

const elem_ = document.querySelectorAll('.ibg');
// document.querySelectorAll('.ibg')
// document.querySelectorAll('li')
// document.querySelectorAll('#ibg')
// document.querySelectorAll('.ibg>img')
// document.querySelectorAll('[data-item]')
// document.querySelectorAll('[href="/goods"]')

//  Collections Static

console.log(elem_[1]);
console.log('====================');

for (let i of elem_) {
  console.log(i);
}
console.log('====================');

elem_.forEach(i => console.log(i))

console.log('====================');
let sub_el = elem_[0].querySelectorAll('img');

for (let i of sub_el) {
  console.log(i);
}

// получить первый подходящий
// document.querySelector('.page-img__three');

// document.getElementById('my_id');

// возвращает Живую коллекцию
// document.getElementsByClassName('name_class');

// возвращает Живую коллекцию
// document.getElementsByTagName('div');

// document.getElementsByName('input_name_text');

// Живая коллекция   Статическая коллекия
// Изменеия видны      только то что изначально получили

// ===============================
// ===============================
// ===============================

// closest  поиск вверх
res = elem_[0].closest('.parents_el');

// проверка
bbb = elem_[0].matches('[class$="lesson_item"');

//  ПОЛУЧИТЬ ЭЛ/содерж 
//     ПРОВЕРИТЬ 
//         ИЗМЕНИТЬ 
//               СОЗДАТЬ
// querySelector
// querySelectorAll
// getElementById
// getElementsByTagName
// getElementsByName
// closest               matches     innerHTML


// ПОЛУЧИТЬ ИЗМЕНИТЬ
// elem_[0].innerHTML('aaaaaaaaa');
let h_1 = bd.querySelector('h1');
console.log(h_1);

let txt_h1 = h_1.innerHTML;
console.log(txt_h1);

function innerTxt(el, txt) {
  el.innerHTML = txt_h1 + txt + '<span>JJJJ</span>';
}

setTimeout(innerTxt, 3000, h_1, 'aaaaa JS');

// tag + content
// let tag_txt = h_1.outerHTML;
// h_1.outerHTML = '<h1> outer Html </h1>';

let txt = h_1.textContent;
h_1.textContent = '<p> asdf </p>';
console.log(txt);

// СОЗДАТЬ ЭЛЕМЕНТ но не вставили
const new_el = document.createElement('div');
console.log(new_el);

new_el.innerHTML = '<p> NEW DIV </p>';
console.log(new_el);

// document.createAttribute
// document.createAttributeNS
// document.createCDATASection
// document.createComment
// document.createDocumentFragment
// document.createElement
// document.createElementNS
// document.createEvent
// document.createExpression
// document.createNSResolver


// ВСТАВИТЬ ЭЛ (создаем эл, получаем куда, вставл)
let test_d = document.querySelector('.test-div');


// БЕЗОПАСНАЯ ВСТАВКА (не работают тэги)
// удаляют на старом месте переносят на новое
//  перед эл
// test_d.before(new_el);

//  после эл
// test_d.after(new_el);

//  перед содерж эл
// test_d.prepend(new_el);

//  после сод эл
// test_d.append(new_el);

// ===================
// ВСТАВКА ТЭГОВ не как текст
let test_d1 = document.querySelector('.test1-div');
let test_d2 = document.querySelector('.test2-div');
let test_d3 = document.querySelector('.test3-div');
let test_d4 = document.querySelector('.test4-div');
let test_d5 = document.querySelector('.test5-div');
let button = document.querySelector('button');

// test_d1.insertAdjacentHTML
// test_d1.insertAdjacentElement
// test_d1.insertAdjacentText

test_d1.insertAdjacentHTML('beforebegin',
'<div> beforebegin ---- </div>');

test_d2.insertAdjacentHTML('afterbegin',
'<div> afterbegin ---- </div>');

test_d3.insertAdjacentHTML('beforeend',
'<div> beforeend ---- </div>');

test_d4.insertAdjacentHTML('afterend',
'<div> afterend ---- </div>');

// Копирование NODE (глубокое клонирование)

let copy_el = button.cloneNode();
let copy_el2 = button.cloneNode(true);

let copy_el3 = button.cloneNode();
let copy_el4 = button.cloneNode(true);

test_d5.before(copy_el);
test_d5.after(copy_el2);
test_d5.prepend(copy_el3);
test_d5.append(copy_el4);

// УДАЛЕНИЕ
setTimeout(() => button.remove() , 3000);


//  ПОЛУЧИТЬ ЭЛ/содерж 
//     ПРОВЕРИТЬ 
//         ИЗМЕНИТЬ 
//               СОЗДАТЬ
//                  КЛОНИРОВАТЬ
//                     УДАЛИТЬ
//                        ВТАВИТЬ ЭЛ
//                            ВСТАВИТЬ HTML


// CLASS  ================
// ПОЛУЧЕНИЕ 
//     УДАЛЕНИЕ  
//       ДОБАВЛЕНИЕ 
//         СПИСОК_КЛАССОВ
//            ПЕРЕКЛЮЧЕНИЕ
let cl_el = document.querySelector('[data-el]');
console.log(cl_el);

let cl = cl_el.className;
console.log(cl);

let cl_list = cl_el.classList;
console.log(cl_list);
console.log(cl_list.length);


setTimeout(() => cl_list.add('new-class'), 1000);
setTimeout(() => cl_list.remove('new-class'), 2000);
setTimeout(() => cl_list.toggle('new-class'), 3000);
setTimeout(() => console.log(cl_list.contains('new-class')), 4000);



// CSS ================
let st_el = document.querySelector('.test6-div');
st_el.style.color = 'red';
st_el.style.position = 'relative';
st_el.style.zIndex = '3';
st_el.style.marginTop = '30px';

console.log(st_el.style);

console.log(st_el.style.position);

// Перезапишет все свойства
st_el.style.cssText = `
  padding-bottom: 20px;
  font-weight: 800;
`;

// Возвращает все вычесленные стили
// Только чтение
let g_st = getComputedStyle(st_el);
console.log(g_st.fontSize);

let g_st_before = getComputedStyle(st_el, '::before');
console.log(g_st_before.paddingTop);

// Получаем все вычесленные стили
//  Забираем значение нужного
//   Убираем px

const _g_st = getComputedStyle(st_el);
const bord_st = _g_st.paddingLeft;
const res_st = parseInt(bord_st);

st_el.style.paddingLeft = String(res_st + 130) + 'px';

// Получение Свойств
let g_a = document.querySelector('.aaa');
console.log(g_a.href);
console.log(g_a.classList);
console.log(g_a.style);
console.dir(g_a);

// Работа с
//   Классами
//     Стилями
//       Атрибутами

// Проверить  Получить  Задать  Удалить
console.log(g_a.hasAttribute('name'));
console.log(g_a.getAttribute('name'));
g_a.setAttribute('name', 'value');
console.log(g_a.getAttribute('name'));
g_a.removeAttribute('name');

// Атрибут data зарезервировано программистами
console.log(g_a.dataset.size);
console.log(g_a.dataset.w);

g_a.dataset.size = '33333';
g_a.dataset.w = 'vvvvvv';

console.log(g_a.dataset.size);
console.log(g_a.dataset.w);
console.log(g_a.dataset.bigSmall);

// elem_.tagName;
// elem_.hidden;

// Ширина Высота окна

const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHight = mainElement.clientHeight;

console.log(mainElementWidth, 'размер относительно окна браузера ширина');
console.log(mainElementHight, 'размер относительно окна браузера высота');

// + scroll (15px  17px)
const windowWidth = window.innerWidth;
const windowHight = window.innerHeight;

console.log(windowWidth, 'размер относительно окна браузера ширина + скрол');
console.log(windowHight, 'размер относительно окна браузера высота + скрол');

console.log(document.body.scrollWidth,
  document.body.offsetWidth,
  document.body.clientWidth);


console.log(document.documentElement.scrollWidth,
  document.documentElement.offsetWidth,
  document.documentElement.clientWidth,);

console.log(document.body.scrollHeight,
  document.body.offsetHeight,
  document.body.clientHeight,);
  
  
console.log(document.documentElement.scrollHeight,
  document.documentElement.offsetHeight,
  document.documentElement.clientHeight,);

// Чаще
// mainElement.clientWidth;
// mainElement.clientHeight;

// WIDTH HIGHT _____________
// высота и ширина + прокручеваемая часть
let scrollWidth = Math.max(
  document.body.scrollWidth,
  document.body.offsetWidth,
  document.body.clientWidth,

  document.documentElement.scrollWidth,
  document.documentElement.offsetWidth,
  document.documentElement.clientWidth,
)

let scrollHight = Math.max(
  document.body.scrollHeight,
  document.body.offsetHeight,
  document.body.clientHeight,

  document.documentElement.scrollHeight,
  document.documentElement.offsetHeight,
  document.documentElement.clientHeight,
)

console.log(scrollWidth);
console.log(scrollHight);

// SCROLL _____________
// кол-во прокученных пикселей (только чтение)
// alias
// const windowScrollTop = window.pageYOffset; 
// const windowScrollLeft = window.pageXOffset;

const windowScrollTop = window.scrollY;
const windowScrollLeft = window.scrollX;

console.log(windowScrollTop);
console.log(windowScrollLeft);

// setInterval(() => console.log(window.scrollY), 500);

// Управление прокруткой страницы
// scrollBy(x, y) step   scrollTo(x, y) absolute

function setScrollBy() {
  window.scrollBy(0, 600);
  const windowScrollTop = window.scrollY;
  console.log(windowScrollTop);
}

// setTimeout(setScrollBy, 1000);
// setInterval(() => window.scrollBy(0, 50), 500);
// setInterval(() => window.scrollTo(0, 600), 500);

// html {
//   scroll-behavior: smooth;
// }

// window.scrollTo({
//   top: 100,
//   left: 0,
//   behavior: 'smooth'
// })

// Прокрутка к элементу
const toElementScroll = document.querySelector('.two-block');
toElementScroll.scrollIntoView({
  block:'center',
  inline:'nearest',
  behavior:'smooth'
});

// body.scroll-lock {
//   overflow: hidden;
// }

setTimeout(() => document.body.classList.toggle('scroll-lock'), 5000);
setTimeout(() => document.body.classList.toggle('scroll-lock'), 8000);
// document.body.classList.toggle('scroll-lock');

// Scroll element
// offsetParent - сдвиг относительно родителя (родитель)
const block_scroll = document.querySelector('.block-scroll');
block_scroll.scrollIntoView({
  block:'center',
  inline:'nearest',
  behavior:'smooth'
});



console.log(block_scroll.offsetParent, '\nродительский эл. сдвиг относ которого');
console.log(block_scroll.offsetTop, '\nсдвиг сверху');
console.log(block_scroll.offsetLeft, '\nсдвиг лево');

console.log(block_scroll.offsetWidth, '\nРазмер блока ширина');
console.log(block_scroll.offsetHeight, '\nРазмер блока высота');

console.log(block_scroll.clientTop, '\nОтступ блока сверху');
console.log(block_scroll.clientLeft, '\nОтступ блока слева');

console.log(block_scroll.clientWidth, '\nШирина без рамки и скрола');
console.log(block_scroll.clientHeight, '\nВысота без рамки и скрола');
// 500 - 2bord - 2bord - 15 = 481

console.log(block_scroll.scrollWidth, '\nШирина  + cont скрол');
console.log(block_scroll.scrollHeight, '\nВысота + cont скрол');

block_scroll.scrollTop = 60;
block_scroll.scrollBy(0, 40);

// clientY - window       pageY - document

console.log(block_scroll.getBoundingClientRect(), '\nclientY - window');
console.log(block_scroll.getBoundingClientRect().top + window.scrollY, '\npageY - document');
console.log(window.scrollY, '\scrollY - window');
console.log(window.pageYOffset, '\pageYOffset - window');




// EVENTS   CLICK
// Добавление/Удаление слушателя события

// 1
// Html <div onclick = 'foo'>

function foo_() {
  console.log('foo click');
}

// 2
const btn = document.querySelector('.btn-click');
// btn.onclick = () => console.log('btn click');

// 3
function btn_click() {
  console.log('btn click');
}
// btn.onclick = btn_click;

// 4 AddEventList  RemoveEventList
// el.addEventListener(event, handler, options)
function click() { 
  console.log('__click');
  btn.removeEventListener('click',click);
}
function clack() { console.log('clack__')}

btn.addEventListener("click", click);
btn.addEventListener("click", clack);

const options = {
  "capture":false, // фаза на которой должен сработать обработчик
  "once":true, // если Т обработчик удален после выполнения
  "passive": false // если Т обработчик не вызовет preventDefault()
}

function cluck() {
  console.log('__cluck__');
}

btn.addEventListener('click', cluck, options);


function clock(e) {
  console.log('--clock--');

  // тип события
  console.log(e.type); 

  // Объект на который сработал обработчик
  console.log(e.target);

  // Объект к которому назначен обработчик
  console.log(e.currentTarget);

  // Положение курсора по оси X
  console.log(e.clientX);

  // Положение курсора по оси Y
  console.log(e.clientY);

  // Все детали события
  console.log(e);
}

btn.addEventListener('click', clock);
btn.addEventListener('mouseenter', clock, options);

// // Всплытие / Погружение
const block_1 = document.querySelector('.block__1');
const block_2 = document.querySelector('.block__2');
const block_3 = document.querySelector('.block__3');

block_1.addEventListener('click', (e)=>{
  console.log('block 1');
  console.log(e.target);
});
block_2.addEventListener('click', (e)=>{console.log('block 2');
console.log(e.target);
}, {"capture":true}); // Поружение  Редко (осн всплытие)
block_3.addEventListener('click', (e)=>{console.log('block 3');
console.log(e.target);
// Остановка всплытия
e.stopPropagation();
},options);

{/* <div 1 > v   // погружение "capture":true
    <div 2 > v
        <div 3 > v
        </div> ^ // всплытие "capture":false
    </div> ^
</div> ^
 */}

//  Делигирование события
function foo() {
  console.log('foo -------');
}
// const btn_n = document.querySelectorAll('.btn__1');
// btn_n.forEach((item) => item.addEventListener('click', foo))

const button_n = document.querySelector('.button-n');
button_n.addEventListener('click',
  function (event) {
    if (event.target.closest('.btn__1')) {
      foo();
    }
  }
);



const mm = document.querySelector('.menu1');
document.addEventListener('click', mmenu);

function mmenu(e) {
  if (e.target.closest('.menu1__button')) {
    mm.classList.toggle('_active');
  }
  if (!e.target.closest('.menu1')) {
    mm.classList.remove('_active');
  }
}

document.addEventListener('keyup', function (e) {
  if (e.code === 'Escape') {
    mm.classList.remove('_active');
    console.log('-------- escape')
  }
})

// Отменить действие по умолчанию
// preventDefault

const ll = document.querySelectorAll('.menu1__link');

ll.forEach((item) => {
  item.addEventListener('click', e => {
    console.log('aaa --');
    e.preventDefault();
    // onclick   return false
  });
})

// Событи Мыши
// mousedown / mouseup 
// mouseover / mouseout
// mousemove
// constextmenu 

// click - mousedown + mouseup
// dblclick - 2 click 

const bbtn = document.querySelector('.bbtn');

bbtn.addEventListener('mousedown', (e) => console.log('btn down',e.which));
bbtn.addEventListener('click', () => console.log('btn click'));
bbtn.addEventListener('contextmenu', () => console.log('btn context menu'));

// block_1.addEventListener("mousemove", (e) => {
//   console.log(e.clientX);
//   // console.log(e.clientY);
// });

// всплывают действия
block_1.addEventListener("mouseover", (e) => {
  console.log('mouse over');
  console.log(e.target);
  console.log(e.relatedTarget);
});

block_1.addEventListener("mouseout", (e) => {
  console.log('mouse out');
});

// Не всплывают
block_1.addEventListener("mouseenter", (e) => {
  console.log('mouse enter');
  console.log(e.target);
  console.log(e.relatedTarget);
});


block_1.addEventListener("mouseleave", (e) => {
  console.log('mouse leave');
});

// КЛАВИШИ
document.addEventListener("keydown", (e) => {
  console.log(`${e.code} === ${e.key}`);
  console.log(e.repeat);
});

document.addEventListener("keyup", (e) => {
  console.log(`${e.code} === ${e.key}`);
});

const txtItem = document.querySelector('.textarea__item');
const textItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.textarea__span span');

txtCounter.innerHTML = textItemLimit;

txtItem.addEventListener('keyup', txtSetCounter);
txtItem.addEventListener('keydown', (e) => {
  if (e.repeat) txtSetCounter();
});

function txtSetCounter() {
  const txtCounterResult = textItemLimit - txtItem.value.length;
  txtCounter.innerHTML = txtCounterResult;
}

// SCROLL
window.addEventListener('scroll', (e) => {

  console.log(scrollY);
})

// ЗАГРУЗКА СТРАНИЦЫ
// DOMContentLoaded - загрузиз документ
// load  - загрузил докум и внешн. рес
// BeforeUnloadEvent 
// beforeunload - пользователь покид стр
// unload - пользователь покид стр



// document.readyState(
//   ['loading' (загружается) |
//   'interactive' (полностью загруж) |
//   'complete' (полностью прочитан)
// ]);

document.addEventListener('DOMContentLoaded',
readyDom);

window.addEventListener('load', readyLoad);

function readyDom() {
  console.log(document.readyState);
}

function readyLoad() {
  console.log(document.readyState);
}

// window.addEventListener('beforeunload', (e) => {
//   e.preventDefault();
//   e.returnValue = '';
// })

// FORM
const mainform = document.forms[0];
console.log(mainform);

const mainform1 = document.forms.ffform;
console.log(mainform1);
  
console.log(document.forms);
// collection
for (let i of document.forms) {
  console.log(i);
}

console.log(mainform1.elements);

// const mainFormInput = mainform1.elements.text;
const mainFormInput = mainform1.text;
console.log(mainFormInput);

// collections
console.log(mainform1.radio1);

console.log(mainform1.radio1[0].value);
console.log(mainform1.radio1[0].checked);
console.log(mainFormInput.value);

// mainFormInput.value = 'aaaaffff';

mainform1.radio1[1].value = 'llll';
const rad2 = mainform1.radio1[1];
rad2.checked = true;

console.log(mainform1.radio1[1].value);
console.log(mainform1.radio1[1].checked);

console.log(mainform.select);

console.log(mainform?.select?.options);
console.log(mainform?.select?.selectedIndex);
console.log(mainform?.select?.value);
console.log(mainform?.select?.options[2].text);

// option.selected
// option.index
// option.text

const mainFormSelect = mainform.select;
mainFormSelect.options[2].selected = true;
// mainFormSelect.selectedIndex = 1;
// mainFormSelect.value = 2;

// option = new Option(text, 
//                   value,
//                   defaultSelected,
//                   selected);

// text - текст внутри 
// value - значение
// defaultSelected - если true HTML selected
// selected - если true 

let newOption = new Option('ttext', '4', false, false)
mainFormSelect.append(newOption);

let formSelected = Array.from(
    mainFormSelect.options)
    .filter(option => option.selected)
    .map(option => option.value);


let placeHold = mainFormInput.placeholder;

// mainFormInput.addEventListener('focus', function(e) {
//   mainFormInput.placeholder = '';
// })


// mainFormInput.addEventListener('blur', function(e) {
//   mainFormInput.placeholder = placeHold;
// })

// tabindex = 0 // default
// -1  // not focus tab yes focus js

// События
// focus  focusin 
// change
// input !!!

// copy   /  paste  /  cut

// СОБЫТИЕ input при вводе отправка, счет, проверка
// СОБЫТИЕ submit проверка при отправке






console.log(document.elementFromPoint(100, 300), 'elementFromPoint(100, 300)');
















console.log('hello world end');
