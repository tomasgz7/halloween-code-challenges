// Reto #4 - (halloween.dev)
// Tenemos una lista ORDENADA de números de teléfono
// y necesitamos encontrar uno lo más rápido posible.
// Usamos BÚSQUEDA BINARIA para evitar recorrer el array entero.

function searchPhone(phones, target) {
  // Si el array está vacío, no hay nada que buscar
  if (phones.length === 0) return -1;

  let left = 0;
  let right = phones.length - 1;

  // Mientras el rango siga siendo válido
  while (left <= right) {
    // Calculamos el punto medio (más rápido que Math.floor)
    const mid = (left + right) >> 1;
    const current = phones[mid];

    // Si encontramos el número, devolvemos el índice
    if (current === target) return mid;

    // Si el número en el medio es menor al que buscamos → movemos el rango a la derecha
    current < target
      ? (left = mid + 1)
      // Si es mayor → movemos el rango a la izquierda
      : (right = mid - 1); 
  }

 
  return -1;
}

// 🧪 Pruebas rápidas

const phones = [1001, 1002, 1005, 1008, 1010, 1015, 1020];

console.log(searchPhone(phones, 1008)); // → 3
console.log(searchPhone(phones, 1001)); // → 0
console.log(searchPhone(phones, 1020)); // → 6
console.log(searchPhone(phones, 9999)); // → -1 (no existe)
