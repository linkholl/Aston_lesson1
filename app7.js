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