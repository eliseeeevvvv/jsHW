"use strict";
const userYear = prompt("Введіть рік народження");
let userAge = 2026 - userYear;
console.log(userAge);
//-----------------------
const userNumber = prompt("Введіть перше число");
const userNumber2 = prompt("Введіть друге число");
let totalPlus = +userNumber + +userNumber2;
console.log(`${userNumber}+${userNumber2} = ${totalPlus}`);
let totalMinus = +userNumber - +userNumber2;
console.log(`${userNumber}-${userNumber2} = ${totalMinus}`);
let totalMultiplication = +userNumber * +userNumber2;
console.log(`${userNumber}*${userNumber2} = ${totalMultiplication}`);
let totalDivision = +userNumber / +userNumber2;
console.log(`${userNumber}/${userNumber2} = ${totalDivision}`);
//----------------------------------
const userHour = prompt("Введіть години");
const userMinutes = prompt("Введіть хвилини");
const userSeconds = prompt("Введіть секунди");
if(+userHour <= 24&& (+userMinutes && +userSeconds <= 60)){
    console.log(true);
}
//--------------------------------
const userMonth = Number(prompt("Введіть номер місяця (від 1 до 12):"));

switch (userMonth) {
    case 1:
        console.log("Січень");
        break;
    case 2:
        console.log("Лютий");
        break;
    case 3:
        console.log("Березень");
        break;
    case 4:
        console.log("Квітень");
        break;
    case 5:
        console.log("Травень");
        break;
    case 6:
        console.log("Червень");
        break;
    case 7:
        console.log("Липень");
        break;
    case 8:
        console.log("Серпень");
        break;
    case 9:
        console.log("Вересень");
        break;
    case 10:
        console.log("Жовтень");
        break;
    case 11:
        console.log("Листопад");
        break;
    case 12:
        console.log("Грудень");
        break;
    default:
        console.log("Невірний номер місяця!");
}
//-------------------------------------------------
let firstNumber = Number(prompt("Число від"));
const secondNumber = Number(prompt("Число до"));
let total = 0;
for(firstNumber;firstNumber<= +secondNumber;firstNumber++){
    total += firstNumber;
    
    console.log(total);
}

