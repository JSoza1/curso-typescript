//Otra forma aun mas eficiente de utilizar las clases, crear objetos y almacenarlos, es guardarlos en un array, de esta forma se evita crear una nueva variable para cada objeto. y si queremos acceder a estos objetos podemos recorrer el array y ver su contenido de diversas maneras.

// Definimos la clase Usuario
class Usuario {
  // Declaramos las propiedades
  nombre: string;
  edad: number;

  // Constructor: se ejecuta cada vez que se crea un nuevo objeto
  constructor(nombre: string, edad: number) {
    // Asignamos los valores recibidos a las propiedades del objeto
    this.nombre = nombre;
    this.edad = edad;
  }

  // Método opcional para mostrar un saludo
  saludar(): void {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Creamos un array vacío donde se almacenarán los objetos de tipo Usuario
const usuarios: Usuario[] = [];

// Simulamos agregar usuarios (como si vinieran de un formulario)
usuarios.push(new Usuario("Lucas", 25));
usuarios.push(new Usuario("Ana", 30));
usuarios.push(new Usuario("Marta", 22));
usuarios.push(new Usuario("Juan", 40));

// Recorremos el array y mostramos cada usuario
usuarios.forEach((usuario, i) => {
  console.log(`#${i}: ${usuario.nombre} - ${usuario.edad} años`);
});
