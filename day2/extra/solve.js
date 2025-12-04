// Crea un array de partes de un string del tamaño especificado
function splitInParts(str, size) {
    let parts = [];
    for (let i = 0; i < str.length; i += size) {
        parts.push(str.slice(i, i + size));
    }
    return parts;
}

// Calcular los divisores de un numero
function dividers(number) {
    let result = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) result.push(i);
    }
    return result;
}

function isInvalid(number) {
    const numberStr = number.toString();
    const dividersList = dividers(numberStr.length);

    for (const divider of dividersList) {
        const parts = splitInParts(numberStr, divider);
        // Si la longitud de las partes es 1, no es necesario verificar
        if (parts.length === 1) continue;

        if (parts.every(part => part === parts[0])) return true;
    }
}

function solve(inputStr) {
    const ranges = inputStr.trim().split(",");
    let total = 0;

    for (const range of ranges) {
        const [start, end] = range.split("-");
        // Recorrer todos los numeros del rango
        for (let i = Number(start); i <= Number(end); i++) {
            if (isInvalid(i)) total += i;
        }
    }

    return total;
}

