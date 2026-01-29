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

















console.log('hello world end');
