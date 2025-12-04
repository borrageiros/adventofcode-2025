function solve(inputStr) {
    const instructions = inputStr.trim().split("\n");
    let dial = 50;
    let count = 0;

    for (const instruction of instructions) {
        const direction = instruction.charAt(0);
        const steps = parseInt(instruction.slice(1));

        if (direction === "R") {
            // Si la direción es R, sumamos los pasos al dial
            let result = dial + steps;
            // Si la suma resulta mayor al número maximo del dial (99), restamos 100 y sumamos 1 al contador (el dial dio una vuelta completa)
            while (result > 99) {
                result -= 100;
                // Si la dirección es R, actualizamos el dial antes de sumar el contador
                dial = result;
                if (dial !== 0) count++;
            }
            // Si la suma no resulta mayor al número maximo del dial (99), actualizamos el dial
            if (result <= 99) {
                dial = result;
            }
        } else if (direction === "L") {
            // Si la direción es L, restamos los pasos al dial
            let result = dial - steps;
            // Si la resta resulta menor al número minimo del dial (0), sumamos 100 y restamos 1 al contador (el dial dio una vuelta completa)
            while (result < 0) {
                result += 100;
                // Si la dirección es L, actualizamos el dial después de sumar el contador
                if (dial !== 0) count++;
                dial = result;
            }
            // Si la resta no resulta menor al número minimo del dial (0), actualizamos el dial
            if (result >= 0) {
                dial = result;
            }
        }
        // Si el dial apunta al 0, sumamos 1 al contador
        if (dial === 0) count++;
    }
    
    return count;
}
