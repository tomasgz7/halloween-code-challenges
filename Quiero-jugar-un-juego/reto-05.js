function changeLock(current, target) {
  let moves = 0; // Acá vamos acumulando los movimientos totales

  // Recorremos los 4 dígitos del candado
  for (let i = 0; i < 4; i++) {
    // Extraemos los caracteres de cada posición, pero
    // usando charCodeAt para convertirlos en números (de forma ninja)
    const a = current.charCodeAt(i) - 48; // '0' -> 48
    const b = target.charCodeAt(i) - 48;

    // Calculamos la diferencia "a lo bruto"
    const diff = Math.abs(a - b);

    // Pero como el dial es circular, también evaluamos el camino inverso
    // Ej: distancia real 8 → te conviene usar 2 (10 - 8)
    moves += Math.min(diff, 10 - diff);
  }

  return moves;
}

// Pruebas rápidas

console.log(changeLock('0022', '0044')); // -> 4
console.log(changeLock('0000', '9999')); // -> 4 (sí, ¡solo 4!)
console.log(changeLock('1234', '5678')); // -> 16
console.log(changeLock('0000', '0000')); // -> 0
console.log(changeLock('1357', '2468')); // -> 4

// Run esto con Node.js y vas a ver los resultados en tu terminal de confianza