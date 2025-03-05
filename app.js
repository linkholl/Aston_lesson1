/* function sayHello() {
    console.log("Привет, мир!");
}

function sayGoodbye() {
    console.log("Пока, мир!");
}

function sayName(name) {
    console.log(`Меня зовут ${name}`);
}

sayHello();
sayGoodbye();
sayName("Habi"); */

function myPrompt() {
   
    let number = prompt("Введите число:");
    if (number === null || isNaN(number) || !Number.isInteger(Number(number))) {
        alert("Некорректный ввод!");
        return;
    }

    let base = prompt("Введите систему счисления для числа (от 2 до 36):");
    
    if (base === null || isNaN(base) || !Number.isInteger(Number(base)) || base < 2 || base > 36) {
        alert("Некорректный ввод!");
        return;
    }
    let result = Number(number).toString(Number(base));
    alert(`Ответ: число ${number} в ${base}-ой системе счисления = ${result}`);
}

myPrompt();