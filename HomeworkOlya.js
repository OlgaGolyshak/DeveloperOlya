//функция, разбивающая число на цифры 1234
function getBreakTheNumber(number) {
    for (let ten = 10; number / ten > 0.1; ten *= 10) {
        breakTheNumber.push(Math.floor((number % ten) / ten * 10));
    }
    return breakTheNumber;
}
let breakTheNumber = [];

//Задание1
function calcNOK(a, b) {
    let array = [];
    let NOD;
    for (let c = 1; a / c >= 1 && b / c >= 1; c++) {
        if (a % c == 0 & b % c == 0) {
            array.push(c);
        }
    }
    NOD = array[array.length - 1];
    let NOK = a * b / NOD;
    return (NOK);
}

//Задание2
function getIsPalindrom(number) {
    getBreakTheNumber(number);
    const breakTheNumberReverse = [...breakTheNumber];
    breakTheNumber.reverse();
    const callBack = (value, index) => {
        if (value !== breakTheNumberReverse[index]) {
            isPalindrom = false;
            return false;
        }
        if (index === breakTheNumberReverse.length - 1) {
            isPalindrom = true;
        }
        return true;
    };
    breakTheNumber.every(callBack);
    return (isPalindrom === false ? false : true);
}

//Задание3
function getDifferentNum(number) {
    getBreakTheNumber(number);
    let differentNum = Array.from(new Set(breakTheNumber));
    return (differentNum.length);
}

//Задание4
function getDegreeNum(number, degree) {
    Math.pow(number, degree);
    return Number.isInteger(degree) ? (Math.pow(number, degree)) : false;
}





//|||||||||||||||||||||||||||||||||||||||||||||||||||
Задание 5
let b = 0;
let n = 2;
function checkPow(a) {
    while (n < a) {
        n = n * 2;
        b = b + 1;
    }
    return (`Заданное число находится между ${b} и ${b + 1} степенями двойки`)
}
checkPow(3);



Задание 6



Задание 7
function calcNum(n) {
    let x, y;
    let a = 0;
    for (x = 1; x < n; ++x) {
        for (y = 1; y < n; ++y) {
            if (x * x + y * y < n) {
                a = a + 1;
            }
        }
    }
    return (a);
}
calcNum(32);



Задание 8



Задание 9

