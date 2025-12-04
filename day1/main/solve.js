function solve(inputStr) {
    const instructions = inputStr.trim().split("\n");
    let position = 50;
    let count = 0;

    for (const instruction of instructions) {
        const direction = instruction.charAt(0);
        const steps = parseInt(instruction.slice(1));
        
        // El resto de la division entre 100 es la posicion final
        if (direction === "R") {
            position = (position + steps) % 100;
        } else if (direction === "L") {
            position = (position - steps) % 100;
        }

        // Si la posición final es 0, se suma 1 al contador
        if (position === 0) count++;
    }
    
    return count;
}

