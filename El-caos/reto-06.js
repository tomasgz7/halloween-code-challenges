function surviveRoulette(n, k) {
  let survivor = 0;

  for (let i = 1; i <= n; i++) {
    survivor = (survivor + k) % i;
  }
  return survivor;
}

//  Pruebas rápidas
console.log(surviveRoulette(4, 2));  // 0
console.log(surviveRoulette(5, 3));  // 3
console.log(surviveRoulette(5, 10)); // 3
console.log(surviveRoulette(7, 5));  // 6
console.log(surviveRoulette(10, 2)); // 4
