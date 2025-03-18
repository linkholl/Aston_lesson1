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
console.log('obCopy: ', obCopy.b.c);