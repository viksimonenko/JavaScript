// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

let age_2 = 18;
let age_3 = 60;
const checkAge = function(age) {
    if (age < age_2){
        console.log("You don't have access cause your age is " + age + " It's less than " + age_2);
     }	else if ((age >= age_2)&&(age < age_3)) {
        console.log("Welcome !");
     }	else if (age > age_3) {
        console.log("Keep calm and look Culture channel");
     }	else {
        console.log("Technical work");
     }
    }
checkAge(17)
checkAge(18)
checkAge(61)

// OR another variant

// let age_2 = 18;
// let age_3 = 60;
const checkAge2 = (age) => {
   if (age < age_2){
      console.log("You don't have access cause your age is " + age + " It's less than " + age_2);
    }	else if ((age >= age_2)&&(age < age_3)) {
      console.log("Welcome !");
    }	else if (age > age_3) {
      console.log("Keep calm and look Culture channel");
    }	else {
      console.log("Technical work");
    }
   }
checkAge2(17)
checkAge2(18)
checkAge2(61)
    
// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. 
// И если он не Number - кидалась ошибка.

// let age_2 = 18;
// let age_3 = 60;
const checkAge3 = function(age) {
      if (typeof(age) == 'number'){
            if(age < age_2){
            console.log("You don't have access cause your age is " + age + " It's less than " + age_2);
            }	else if (age >= age_2 && age < age_3) {
                console.log("Welcome !");
            }	else if (age > age_3) {
                console.log("Keep calm and look Culture channel");
            }	else {
                console.log("Technical work");
            }
      } else {      
      console.log(age + " Is not a Number!");
      }
}    
checkAge3(18)
checkAge3(61)
checkAge3('61')
checkAge3('Viktoriya')


// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, 
// преобразовываясь в number

// let age_2 = 18;
// let age_3 = 60;

const checkAge4 = function(age) {
if(age && !isNaN(age)) {
    if (age < age_2){
      console.log("You don't have access cause your age is " + age + " It's less than " + age_2);
    }	else if (age >= age_2 && age < age_3) {
      console.log("Welcome !");
    }	else if (age > age_3) {
      console.log("Keep calm and look Culture channel");
    }	else {
      console.log("Technical work");
    }
} else console.log('Not an integer value')
}
  checkAge4('2')
  
// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводился, используя функцию prompt в привязанной верстке

// let age_2 = 18;
// let age_3 = 60;
let age_1 = prompt('Enter your age, please');
const checkAge5 = function(age_1) {
    if(age_1 && !isNaN(age_1)) {
        if (age_1 < age_2){
	    alert("You don't have access cause your age is " + age_1 + " It's less than " + age_2);
    }	else if (age_1 >= age_2 && age_1 < age_3) {
	    alert("Welcome !");
    }	else if (age_1 > age_3) {
	    alert("Keep calm and look Culture channel");
    }	else {
	    alert("Technical work");
        } 
}   else 
    alert('Not an integer value');
}
 checkAge5(age_1)

// Расширенный п. 4 ***. Вывести ответы на web-страницу.
// let age_2 = 18;
// let age_3 = 60;
const div = document.getElementById('1')
const checkAge6 = function(...age_1) {
    age_1.forEach(el => {
        if (el && !isNaN(el)) {
            if (el < age_2){
                    div.innerHTML += el + ": You don't have access cause your age is " + el + " It's less than " + age_2 + '<br />';
                }	else if ((el >= age_2)&&(el < age_3)) {
                    div.innerHTML += el + ": Welcome !" + '<br />';
                }   else if (el > age_3) {
                    div.innerHTML += el + ": Keep calm and look Culture channel" + '<br />';
                }   else {
                    div.innerHTML += el + ": Technical work" + '<br />';
                } 
        } else div.innerHTML += el + ": Not an integer value" + '<br />';
    })
}
 
 checkAge6(17, 18, 60, 61,'','20','fff','0')