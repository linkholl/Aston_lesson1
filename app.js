// First task

 function deepCopy(obj) {
    
    if (typeof obj !== 'object' || obj === null) {
        return obj; // Если это не объект, возвращаем его как есть
    }

    const copy = Array.isArray(obj) ? [] : {};

    // Рекурсивно копируем каждое свойство объекта
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]); // Рекурсивный вызов для вложенных объектов
        }
    }

    return copy;
}

const ob = { a: 3, b: { c: 7 } };
const obCopy = deepCopy(ob);

obCopy.a = 10;
obCopy.b.c = 11;

console.log('ob: ', ob.a); 
console.log('ob: ', ob.b.c); 
console.log('obCopy: ', obCopy.a); 
console.log('obCopy: ', obCopy.b.c); */

//The second task
function selectFromInterval(arr, a, b) {
    if (!Array.isArray(arr)) {
        throw new Error("first parameter must be an array!");
    }

    for (const num of arr) {
        if (typeof num !== "number" || isNaN(num)) {
            throw new Error("There are not only numbers in the array!");
        }
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("incorrect input parameters!");
    }

    // Определяем границы интервала
    const start = Math.min(a, b);
    const end = Math.max(a, b);

    
    const filtered = [];
    for (const num of arr) {
        if (num >= start && num <= end) {
            filtered.push(num);
        }
    }
    filtered.sort((x, y) => x - y);

    return filtered;
}

console.log(selectFromInterval([1, 3, 5], 2, 4))

// The 3rd task

const fn = (prop) => { // prop - название свойства, например 'name' или 'age'
    let values = []; 
    return (item, index, array) => { 
      values.push(item[prop]); 
      if (index === array.length - 1) { 
        console.log(values.join(', ')); 
      }
    };
  };
  // проверка 
  const arr = [
    { name: 'Bob', age: '25' },
    { name: 'Ann', age: '30' },
    { name: 'Tom', age: '35' },
  ];
  
  arr.forEach(fn('name')); 

  // The 4th task

  function reverseStr(str) {
    return str
      .split('')   // Разбиваем строку на массив символов
      .reverse()   // Разворачиваем массив
      .join('');   // Объединяем массив обратно в строку
  }
  console.log(reverseStr('Hello, Aston team!')); 
  