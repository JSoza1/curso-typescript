// El "for...in" se utiliza para recorrer los "indices" de un array y las "claves/propiedades" de un objeto
// lo que devuelve siempre es un string, sin importar si es array u objeto

// En un array, devuelve los índices como strings: "0", "1", etc.
// En un objeto, devuelve las claves: "nombre", "edad", etc.
// Aun si el índice es un número, como en un array, el "for...in" lo trata como string.

// Ejemplo en array

const frutas2 = ["manzana", "banana", "uva"];

for (let indice in frutas2) {
  console.log(indice);         // muestra: 0, 1, 2
  console.log(frutas2[indice]); // muestra: manzana, banana, uva
}

// Ejemplo en objetos

// aca le decimos que es del tipo any, para que no haya errores, no es tan recomendado
const persona: any = { nombre: "Ana", edad: 30, ciudad: "Rosario" };

//aclaracion de any

// any es un tipo especial que indica que una variable o expresión puede contener cualquier valor, sin que el compilador haga chequeos de tipo sobre ella.

// Cuando una variable es de tipo any, TypeScript deja de verificar el tipo y permite hacer cualquier operación con esa variable, igual que en JavaScript puro.

for (let clave in persona) {
  console.log(clave);            // muestra: nombre, edad, ciudad
  console.log(persona[clave]);   // muestra: Ana, 30, Rosario
}