//Para hacer funcionar TS en consola directamente, se debe instalar
//tsx, mas moderno que ts-node que se usaba anteriormente
//npm -install -g tsx
//luego para abrir archivos seria de la siguiente manera:
//tsx 1.ts

console.log("hola desde TS")

//En TypeScript, los dos puntos : significan “de tipo”.

//Ejemplo de variable en TS

let nombre: string = "Juan";         // texto
let edad: number = 30;               // número
let activo: boolean = true;          // booleano
let colores: string[] = ["rojo", "azul"]; // array de strings

//Tipo de dato en parametro de funcion
function saludar(nombre: string) {
  console.log("Hola " + nombre);
}

//Tipo de dato que devuelve la funcion
function obtenerEdad(): number {
  return 25;
}
