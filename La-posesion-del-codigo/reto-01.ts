// 🧠 Reto #1 de halloween.dev – "La posesión del código"
// Objetivo: invertir cada palabra, pero sin romper los espacios ni reordenar nada.

function translatePossessed(message: string): string {
  if (!message.trim()) return "";

  return message.replace(/\S+/g, (word: string) => {
    return word.split("").reverse().join("");
  });
}

// Pruebitas rápidas (podés mostrarlas en consola o en tu video)
console.log(translatePossessed("i yoJne gnihctaw uoy")); // "i enjoy watching you"
console.log(translatePossessed("hola   mundo")); // "aloh   odnum"  (los espacios se respetan)
console.log(translatePossessed("   ")); // "" (string vacío)
console.log(translatePossessed("dooG secitcarP")); // "Good Practices"
console.log(translatePossessed("sihT si gniwr")); // "This is wrong"
