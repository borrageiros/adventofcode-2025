function isInvalid(number) {
    // Si el numero tiene una longitud par, se divide en dos partes iguales y se compara si son iguales
    // EJ: 464646 -> 464 = 464 -> True, es invalido
    if (number.toString().length % 2 === 0) {
        let middleOfNumberLength = number.toString().length / 2;
        if (number.toString().slice(0, middleOfNumberLength) === number.toString().slice(middleOfNumberLength)) {
            return true;
        }
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

