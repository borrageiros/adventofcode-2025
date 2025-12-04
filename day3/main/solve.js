function solve(inputStr) {
    const lines = inputStr.trim().split(/\r?\n/);
    let total = 0;
    
    for (const line of lines) {
        let maxLeft = 0;
        let pos = 0;
        const digits = line.split("");
        
        // Comprobamos el maximo numero del digito sin contar el último caracter
        for (let i = 0; i < digits.length - 1; i++) {
            if (digits[i] > maxLeft) {
                maxLeft = digits[i];
                pos = i;
            }
        }

        // Comprobamos el maximo digito a la derecha del maximo digito de la izquierda
        let maxRight = 0;
        for (let i = pos + 1; i < digits.length; i++) {
            if (digits[i] > maxRight) {
                maxRight = digits[i];
            }
        }

        // Sumamos los dos maximos y lo agregamos al total
        let result = Number(maxLeft + maxRight);
        total += result;
    }

    return total;
}

