//Una clase es una plantilla para crear objetos
//En otras palabras una especie de receta o molde para crear objetos, para no tener que estar definiendo la misma estructura una y otra vez en cada objeto distinto, si son del mismo tipo, como por ejemplo "Usuarios" "Autos", etc.

class Usuario {
  // Propiedades que van a tener los objetos
  nombre: string;
  edad: number;

  // El constructor se ejecuta cuando se crea un nuevo objeto
  constructor(nombre: string, edad: number) {
    this.nombre = nombre; // "this" hace referencia al objeto que se está creando
    this.edad = edad;
  }

  // Método: función dentro de la clase
  saludar(): void {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

//Uso de la clase

const usuario1 = new Usuario("Lucas", 25);
usuario1.saludar(); // Hola, soy Lucas y tengo 25 años.

const usuario2 = new Usuario("Ana", 30);
usuario2.saludar(); // Hola, soy Ana y tengo 30 años.

// con lo anterior se evita hacer esto

const nombre1 = "Lucas"; //ESTO NO ES EFICIENTE
const edad1 = 25;        //ESTO NO ES EFICIENTE

const nombre2 = "Ana";   //ESTO NO ES EFICIENTE
const edad2 = 30;        //ESTO NO ES EFICIENTE

// ...y así sucesivamente
