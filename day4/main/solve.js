function solve(inputStr) {
    const lines = inputStr.trim().split(/\r?\n/);
    // IMPORTANTE: Todas las lineas tienen el mismo numero de caracteres
    const numberOfLines = lines.length;
    const numberOfColumns = lines[0].length;

    let totalAccessibleRolls = 0;

    for (let f = 0; f < numberOfLines; f++) {
        for (let c = 0; c < numberOfColumns; c++) {
            // Comprobar si es un rollo de papel (@)
            if (lines[f][c] === "@") {
                // Ahora hay que sumar todos los rollos de papel que hay en:
                // Fila -1 Columnas -1, 0, +1
                // Fila 0 Columnas -1, +1
                // Fila +1 Columnas -1, 0, +1
                // En caso de que esta suma es menor o igual a 3, este rollo de papel es accesible y será sumado al total
                let tempSum = 0;

                const positions = [
                    [-1, -1], [-1, 0], [-1, 1],
                    [ 0, -1],          [ 0, 1],
                    [ 1, -1], [ 1, 0], [ 1, 1]
                ];

                for (const [firstPos, secondPos] of positions) {
                    const fileIndex = f + firstPos;
                    const columnIndex = c + secondPos;
                
                    // Comprobar si existen las filas y las columnas adyacentes
                    if ( fileIndex >= 0 &&
                        fileIndex < numberOfLines &&
                        columnIndex >= 0 &&
                        columnIndex < numberOfColumns
                    ) {
                        // Si es un rollo, sumarlo a la suma temporal
                        if (lines[fileIndex][columnIndex] === "@") tempSum++;
                    }
                }

                // Si la suma de los rollos adyacentes es menor o igual a 3, este rollo de papel es accesible y será sumado al total
                if (tempSum <= 3) {
                    totalAccessibleRolls++;
                }
            }
        }
    }
    return totalAccessibleRolls;
}

