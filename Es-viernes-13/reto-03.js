// 🎃 Reto #3 - Es viernes 13 (halloween.dev)
// Michael Myers no falla: ataca cada vez que cae viernes 13
// y siempre vuelve en Halloween (31 de octubre).
// Te pasan un año y tenés que devolver todas esas fechas en formato 'YYYY-MM-DD'.

function myersCalendar(year) {
  // Validación básica: si el año no es válido, devolvemos array vacío y listo.
  if (!year || typeof year !== 'number' || year < 1) return [];

  const fechas = [];

  // Helper para formatear la fecha tipo 2025-10-31
  const format = (date) => date.toISOString().split('T')[0];

  // Recorremos los 12 meses y chequeamos si el día 13 cae viernes.
  for (let mes = 0; mes < 12; mes++) {
    const dia13 = new Date(year, mes, 13);

    // getDay() devuelve 5 cuando es viernes → lo guardamos
    if (dia13.getDay() === 5) {
      fechas.push(format(dia13));
    }
  }

  // Halloween siempre es 31 de octubre (mes 9 en JS).
  const halloween = new Date(year, 9, 31);
  fechas.push(format(halloween));

  // Lo ordenamos por si quedaron desacomodadas (por ej. si Halloween cae antes).
  return fechas.sort();
}


// 🧪 Pruebas rápidas

console.log(myersCalendar(2025));
console.log(myersCalendar(2026));
console.log(myersCalendar(2024));

