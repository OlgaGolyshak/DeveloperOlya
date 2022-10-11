Задание 1
function calcNOK(a, b) {
    let array = [];
    let NOD;
    for (let c = 1; a / c >= 1 & b / c >= 1; c++) {
        if (a % c == 0 & b % c == 0) {
            array.push(c);
        }
    }
    NOD = array[array.length - 1];
    let NOK = a * b / NOD;
    return (NOK);
}


Задание 2
function checkPalindrom(a) {
    let b = a;
    let arr = [];
    while (b >= 1) {
        if (b % 10 == 0) {
            b = b / 10;
            arr.push(0);
        } else if (b < 10) {
            arr.push(b);
            break;
        } else {
            arr.push(b % 10);
            b = (b - (b % 10)) / 10;
        }
    }
    const arr1 = [...arr];
    arr.reverse();
    let isPalindrom = false;
    arr.every(function checkItems(value, index, array) {
        if (value !== arr1[index]) {
            isPalindrom = false;
            return false;
        } else if (value === arr1[index]) {
            isPalindrom = true;
            return true;
        } if (index === arr1.length - 1) {
            isPalindrom = true;
            return true;
        }
    }) 
    if (isPalindrom = false) {
        return 'Не является';
    } else {
        return 'Палиндром';
    }
}
checkPalindrom(1234567);

function checkPalindrom(a) {
    let b = a;
    let arr = [];
    while (b >= 1) {
        if (b % 10 == 0) {
            b = b / 10;
            arr.push(0);
        } else if (b < 10) {
            arr.push(b);
            break;
        } else {
            arr.push(b % 10);
            b = (b - (b % 10)) / 10;
        }
    }
    const arr1 = [...arr];
    arr.reverse();
    const callBack = (value, index) => {
        if (value !== arr1[index]) {
            isPalindrom = false;
            return false;
        }
        if (index === arr1.length - 1) {
            isPalindrom = true;
        }
        return true;
    };
    let isPalindrom = false;
    arr.every(callBack)
    if (isPalindrom === false) {
        return 'Не является';
    } else {
        return 'Палиндром';
    }
}




Задание 3
function sum(a) {
    let arr = [];
    while (a >= 1) {
        if (a % 10 == 0) {
            a = a / 10;
            arr.push(0);
        } else if (a < 10) {
            arr.push(a);
            break;
        } else {
            arr.push(a % 10);
            a = (a - (a % 10)) / 10;
        }
    }
    let arr1 = Array.from(new Set(arr));
    return (arr1.length);
}
sum(123782193);




Задание 4
let A = prompt('Введите число', 2);
let n = prompt('Введите степень (натуральное число)', 3);
Math.pow(A, n);
if (n >= 1) {
    alert(Math.pow(A, n));
} else {
    alert('Введите натуральное число n!');
}



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

