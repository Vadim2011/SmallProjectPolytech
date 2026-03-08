
"use strict";

const btnGenerate = document.querySelector(".pass__btn");
btnGenerate.addEventListener("click", generatePass);

const btnSnils = document.querySelector(".snils__btn");
btnSnils.addEventListener("click", validSnils);

const btnInn = document.querySelector(".inn__btn");
btnInn.addEventListener("click", validInn);


const check_char = document.querySelectorAll('.char__items');


for (const i of check_char) {
  i.addEventListener('click', (el) => {
    if  ( el.target.classList.contains("char__item"))  el.target.classList.toggle('char-check');
  });
}


function getSetting() {
  const setting = {
    latin: {
      upper: null,
      lower: null,
      upperAlp: [],
      lowerAlp: [],
      lowerOne: null,
      upperOne: null,
    },
    cyrilic: {
      upper: null,
      lower: null,
      upperAlp: [],
      lowerAlp: [],
      lowerOne: null,
      upperOne: null,
    },
    symbol: {
      symbol: null,
      symbolAlp: [],
      symbolOne: null,
    },
    number: [],
  }

  const latin = document.querySelector("[name='latin']").checked;
  const latinUp = latin && document.querySelector("[name='latin_up']").checked;
  const latinLov = latin && document.querySelector("[name='latin_lv']").checked;
  const latinUpOne = latin && document.querySelector("[name='latin_up_one']").checked;
  const latinLovOne = latin && document.querySelector("[name='latin_lv_one']").checked;

  const cyrilic = document.querySelector("[name='cyrilic']").checked;
  const cyrilicUp = cyrilic && document.querySelector("[name='cirilic_up']").checked;
  const cyrilicLov = cyrilic && document.querySelector("[name='cirilic_lv']").checked;
  const cyrilicUpOne = latin && document.querySelector("[name='cirilic_up_one']").checked;
  const cyrilicLovOne = latin && document.querySelector("[name='cirilic_lv_one']").checked;

  const spec_symbol = document.querySelector("[name='spec_symbol']").checked;
  const spec_symbolOne = latin && document.querySelector("[name='symbol_one']").checked;

  const number = document.querySelector("[name='number']").checked;

  setting.latin.upper = latinUp;
  setting.latin.lower = latinLov;
  setting.latin.upperOne = latinUpOne;
  setting.latin.lowerOne = latinLovOne;

  setting.cyrilic.upper = cyrilicUp;
  setting.cyrilic.lower = cyrilicLov;
  setting.cyrilic.upperOne = cyrilicUpOne;
  setting.cyrilic.lowerOne = cyrilicLovOne;

  setting.symbol.symbol = spec_symbol;
  setting.symbol.symbolOne = spec_symbolOne;

  if (setting.latin.upper || setting.latin.lower) {
    const alphabet_latin_choise = document.querySelectorAll('.char__litin.char-check');

    if (setting.latin.upper) {
      for (const char of alphabet_latin_choise) {
        setting.latin.upperAlp.push(char.textContent);
      }
    }

    if (setting.latin.lower) {
      for (const char of alphabet_latin_choise) {
        setting.latin.lowerAlp.push(char.textContent.toLowerCase());
      }
    }
  }

  if (setting.cyrilic.upper || setting.cyrilic.lower) {
    const alphabet_cyrilic_choise = document.querySelectorAll('.char__cyrilic.char-check');

    if (setting.cyrilic.upper) {
      for (const char of alphabet_cyrilic_choise) {
        setting.cyrilic.upperAlp.push(char.textContent);
      }
    }

    if (setting.cyrilic.lower) {
      for (const char of alphabet_cyrilic_choise) {
        setting.cyrilic.lowerAlp.push(char.textContent.toLowerCase());
      }
    }
  }

  if (setting.symbol.symbol) {
    const alphabet_symbol_choise = document.querySelectorAll('.char__symb.char-check');
    for (const char of alphabet_symbol_choise) {
        setting.symbol.symbolAlp.push(char.textContent);
      }
  }

  if (number) {
    const alphabet_number_choise = document.querySelectorAll('.char__numb.char-check');
    for (const char of alphabet_number_choise) {
        setting.number.push(char.textContent);
      }
  }

  return setting;
}

function checkSetting(setting) {
  const len_latin_Upp = setting.latin.upperAlp.length * (!setting.latin.upperOne);
  const len_latin_Low = setting.latin.lowerAlp.length * (!setting.latin.lowerOne);

  const len_cyrilic_Upp = setting.cyrilic.upperAlp.length * (!setting.cyrilic.upperOne);
  const len_cyrilic_Low = setting.cyrilic.lowerAlp.length * (!setting.cyrilic.lowerOne);;

  const len_symbol = setting.symbol.symbolAlp.length * (!setting.symbol.symbolOne);
  const len_number = setting.number.length;

  if (len_latin_Upp + len_latin_Low + 
      len_cyrilic_Upp + len_cyrilic_Low + 
      len_symbol + len_number == 0) {
      return false;
    }
  return true;
}

const generateKey = (alphabet) => {
  const max = alphabet.length;
  return (length) => {
    let key = '';
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * max);
      key = key + alphabet[index];
    }
    return key;
  }
}


function generatePass () {
  const countPass = +document.querySelector("[name='select-amount-pass']").value;
  const countChar = +document.querySelector("[name='select-amount-char']").value;
  const showPass = document.querySelector(".pass__show");
  showPass.innerHTML = '';

  const setting = getSetting();

  if (!checkSetting(setting) || countChar < 6 || countPass < 1) {
    showPass.insertAdjacentHTML('beforeend', `<div class="pass__res">Проверьте настройки</div>`)
    return false;
  }

  const alphabet_res_chose = [];
  
  (!setting.latin.upperOne) ? alphabet_res_chose.push(...setting.latin.upperAlp) : null;
  (!setting.latin.lowerOne) ? alphabet_res_chose.push(...setting.latin.lowerAlp) : null;
  (!setting.cyrilic.upperOne) ? alphabet_res_chose.push(...setting.cyrilic.upperAlp) : null;
  (!setting.cyrilic.lowerOne) ? alphabet_res_chose.push(...setting.cyrilic.lowerAlp) : null;
  (!setting.symbol.symbolOne) ? alphabet_res_chose.push(...setting.symbol.symbolAlp) : null;
  alphabet_res_chose.push(...setting.number);

  const keys_latin_upp = generateKey(setting.latin.upperAlp);
  const keys_latin_low = generateKey(setting.latin.lowerAlp);
  const keys_cyrilic_upp = generateKey(setting.cyrilic.upperAlp);
  const keys_cyrilic_low = generateKey(setting.cyrilic.lowerAlp);
  const keys_symbol = generateKey(setting.symbol.symbolAlp);
  const keys_number = generateKey(setting.number);
  const keys_all_alp = generateKey(alphabet_res_chose);

  let password;
  let count_char;
  for (let i = 0; countPass > i; i++) {
    password = '';
    count_char = countChar;

    if (setting.latin.upper) {
      password = password + keys_latin_upp(1)
      count_char -= 1;
    }
  
    if (setting.latin.lower) {
      password = password + keys_latin_low(1)
      count_char -= 1;
    }
  
    if (setting.cyrilic.upper) {
      password = password + keys_cyrilic_upp(1)
      count_char -= 1;
    }
  
    if (setting.cyrilic.lower) {
      password = password + keys_cyrilic_low(1)
      count_char -= 1;
    }

    if (setting.symbol.symbol) {
      password = password + keys_symbol(1)
      count_char -= 1;
    }

    if (setting.number) {
      password = password + keys_number(1)
      count_char -= 1;
    }

    if (count_char > 0) {
      password = password + keys_all_alp(count_char);
    }

    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    showPass.insertAdjacentHTML('beforeend', `<div class="pass__res">${password}</div>`);
  }
}

function checInn(inn) {
  let checksum = 0;
  let checksum2 = 0;

  if (inn.length == 10) {
    const mask = [2, 4, 10, 3, 5, 9, 4, 6, 8]

    for ( let i = 0; i < 9; i++ ) {
      checksum += parseInt(inn[i]) * mask[i];
    }
    return checksum;
  }
  else if (inn.length == 12) {
    const mask1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8];
    const mask2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8];

    for ( let i = 0; i < 10; i++ ) {
      checksum += parseInt(inn[i]) * mask1[i];
    }

    for ( let i = 0; i < 11; i++ ) {
      checksum2 += parseInt(inn[i]) * mask2[i];
    }
    return [checksum, checksum2];
  }

}

// проверка ИНН   111111111145
function validInn(){
  const fieldInn = document.getElementById('inn');
  fieldInn.classList.remove('ok');
  fieldInn.classList.remove('error');

  const inn_check_sum = document.querySelector('.inn__check-sum');
  inn_check_sum.innerHTML = '';

  let inn = fieldInn.value;
  inn = String(inn).replace(/[^0-9]+/g, '');
  inn = inn.split('');

  if ( inn.length == 10 ) {
    let checksum = checInn(inn);
    checksum = (checksum % 11) % 10;
    checksum = String(checksum);

    inn_check_sum.innerHTML = checksum;

    if (checksum == inn[9]) {
      fieldInn.classList.add('ok');
      return true;
    } 

    fieldInn.classList.add('error');
    return false;
  }
  else if ( inn.length == 12 ) {
    const checksums = checInn(inn);
    let checksum1 = checksums[0];
    let checksum2 = checksums[1]

    checksum1 = (checksum1 % 11) % 10;
    checksum1 = String(checksum1);

    checksum2 = (checksum2 % 11) % 10;
    checksum2 = String(checksum2);

    inn_check_sum.innerHTML = checksum1;
    inn_check_sum.innerHTML = inn_check_sum.innerHTML + checksum2;

    if (checksum1 == inn[10] && checksum2 == inn[11]) {
      fieldInn.classList.add('ok');
      return true;
    } 

    fieldInn.classList.add('error');
    return false;

  }

  fieldInn.classList.add('error');
}
// 11532495234
// 115-324-952 34
// 222-222-222
function checSnils(snils) {
  let checksum = 0;

  for ( let i = 0; i < 9; i++ ) {
    checksum += parseInt(snils.charAt(i)) * (9 - i);
  }

  if ( checksum > 101 ) {
    return checksum % 101;
  }
  else if( checksum == 100 || checksum == 101 ) {
    return 0;
  }
  return checksum
}

// проверка СНИЛС
function validSnils(){
  const fieldSnils = document.getElementById('snils')
  fieldSnils.classList.remove('ok');
  fieldSnils.classList.remove('error');

  const snils_check_sum = document.querySelector('.snils__check-sum');
  snils_check_sum.innerHTML = '';


  let snils = fieldSnils.value;
  snils = String(snils).replace(/[^0-9]+/g, '');

  if (snils.length == 11 ) {
    
    let checksum = checSnils(snils);

    if (checksum < 10) {
      snils_check_sum.innerHTML = '0' + String(checksum);
    }
    else {
      snils_check_sum.innerHTML = String(checksum)
    }

    if (checksum == parseInt(snils.substr(9))) {
      fieldSnils.classList.add('ok');
      return true;
    }

    fieldSnils.classList.add('error');
    return false;
  }
  else if (snils.length == 9) {
    let checksum = checSnils(snils);

    if (checksum < 10) {
      snils_check_sum.innerHTML = '0' + String(checksum);
    }
    else {
      snils_check_sum.innerHTML = String(checksum)
    }
    return null;
  }

  fieldSnils.classList.add('error');
}










