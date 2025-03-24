// The first task
function memoize(callback) {
    const cache = {};

    return function(...args) { 
        // 1. Сортируем аргументы, чтобы порядок не влиял на ключ
        const sortedArgs = [...args].sort((a, b) => {
            const strA = JSON.stringify(a); // Преобразуем в строку для сравнения
            const strB = JSON.stringify(b);
            return strA.localeCompare(strB); // Сравниваем как строки
        });

        // 2. Создаем ключ из отсортированных аргументов
        const key = JSON.stringify(sortedArgs);

        // 3. Если результат есть в кэше — возвращаем его
        if (key in cache) {
            return cache[key];
        }

        // 4. Если нет — вычисляем результат и сохраняем в кэш
        const result = callback(...args);
        cache[key] = result;

        return result;
    };
}

const sum = (a, b, c) => a + b + c;
const memoizedSum = memoize(sum);

// Первый вызов — вычисляется и сохраняется в кэш
console.log(memoizedSum(2, -4, 5));

// Второй вызов с другим порядком — берется из кэша
console.log(memoizedSum(-4, 2, 5));

//The second one

function add(a) {
    let sum = a;

    function next(b) {
        sum += b; 
        return next; 
    }

    // Переопределяем метод valueOf для возврата суммы при числовом преобразовании
    next.valueOf = function() {
        return sum;
    };

    // Переопределяем метод toString для вывода в консоль
    next.toString = function() {
        return sum.toString();
    };

    return next; 
}


console.log(add(1)(2)(3));

console.log(add(10)(20)(30)(40));

// Использование в числовых операциях
const result = add(5)(5);
console.log(result + 10); // (valueOf вызывается автоматически)

// Проверка с нулем и отрицательными числами
console.log(add(-5)(10)(3)); 
