// El "for...of" se utiliza para recorrer estructuras iterables (como arrays, strings, sets)
// simplificando el código al acceder directamente a los valores de cada elemento.
// Evita tener que declarar una variable de índice o preocuparse por el paso de iteración,
// ya que recorre automáticamente cada elemento en orden.

// Este tipo de bucle, con esta sintaxis esta solo disponible en JavaScript y TypeScript

// Recorriendo strings con "for...of"
const palabra = "Copilot";

for (const letra of palabra) {
  console.log(letra);
}
// se muestra en consola 
//C
//o
//p
//i
//l
//o
//t

// Recorriendo un array con "for...of"
const numeros = [10, 20, 30, 40];

for (const numero of numeros) {
  console.log(numero);
}
// se muestra en consola
//10
//20
//30
//40

// Para el siguiente ejemplo primero se debe entender que es un SET.
// Un Set es una estructura de datos que almacena una colección de elementos únicos, es decir, sin duplicados.
// Set es una clase constructura y necesita para ser creado la palabra clave "new" anteriormente
//¿Qué caracteriza a un Set?

//*Unicidad: No permite elementos repetidos.
//*Iterabilidad: Se puede recorrer como una colección.
//*Eficiencia: Las operaciones como búsqueda o inserción suelen ser rápidas.

const frutas = new Set(["🍎", "🍌", "🍎"]);
console.log(frutas); // Set { '🍎', '🍌' }

// Aunque se repite "🍎", el Set lo guarda solo una vez.

// Recorrienndo un set con "for...of"
const lenguajes = new Set(["JavaScript", "Python", "Java", "JavaScript"]);

for (const lenguaje of lenguajes) {
  console.log(lenguaje);
}





