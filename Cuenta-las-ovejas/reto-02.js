// 🐑 Reto #2 - Cuenta las ovejas (halloween.dev)
// Tenemos un montón de letras mezcladas y la idea es ver cuántas veces
// podemos formar la palabra "sheep" (oveja en inglés) con lo que haya.

function countSheep(letters) {

  // Si viene vacío o solo espacios, ya fue: no hay ovejas para contar.
  if (!letters.trim()) return 0;

  // Acá guardo cuántas veces aparece cada letra que necesito.
  // Solo me interesan estas, el resto no me suma nada.
  const counts = { s: 0, h: 0, e: 0, p: 0 };

  // Recorro el string letra por letra.
  // Si es una letra que necesito, la sumo al contador.
  for (const letra of letters) {
    if (counts.hasOwnProperty(letra)) {
      counts[letra]++;
    }
  }

  // La palabra "sheep" usa dos "e", así que las divido por 2.
  // El total de ovejas posibles va a ser el mínimo entre todas las letras.
  const totalSheep = Math.min(
    counts.s,
    counts.h,
    Math.floor(counts.e / 2),
    counts.p
  );
  // devuelvo cuántas ovejas completas se pueden armar
  return totalSheep; 
}


//  Ejemplos para testear rápido en Node:
console.log(countSheep('sheepxsheepy'));     // 2
console.log(countSheep('sshhheeeepppp'));    // 2
console.log(countSheep('hola'));             // 0
console.log(countSheep('peesh'));            // 1
