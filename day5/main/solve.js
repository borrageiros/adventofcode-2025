function solve(inputStr) {
    // Guardamos cada linea del input en una variable
    const lines = inputStr.trim().split("\n");
    // Dividimos el input entre rangos y IDs, separados por una linea en blanco
    const ranges = lines.slice(0, lines.indexOf("\r")).map(range => range.replace("\r", ""));
    const ids = lines.slice(lines.indexOf("\r") + 1).map(id => id.replace("\r", ""));

    // Comprobar cuantos IDs están en algun rango
    let count = 0;
    for (const id of ids) {
        for (const range of ranges) {
            const [start, end] = range.split("-");
            if (id >= Number(start) && id <= Number(end)) {
                count++;
                break;
            }
        }
    }
    return count;
}
