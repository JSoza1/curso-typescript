//Practicando interfaces
//Las interfaces son modelos de propiedades y tipos de dato, que debe seguir un objeto
//Sirven en TS para que se respete una estructura, ya que si se omite alguna propiedad
//El editor de codigo lo va a advertir, para no tener errores futuros en compilacion

//palabra clave - nombre
interface Cosas {
    //propiedad y tipo de dato
    nombre: string;
    precio: number;
    enStock: boolean;
}

const producto1: Cosas = {
    nombre: "maus",
    precio: 22,
    enStock: true
}

console.log(producto1)

//===========

//una interface tambien puede contener metodos (funcion que esta dentro de un objeto, clase o interface)
//en el caso de una interface es como una promesa "esto va a existir y tendra esta forma"

interface Calculadora {
  sumar(a: number, b: number): number;
  restar(a: number, b: number): number;
}

const miCalculadora: Calculadora = {
  sumar(a, b) {
    return a + b;
  },
  restar(a, b) {
    return a - b;
  }
};

console.log(miCalculadora.sumar(5, 3));  // 8
console.log(miCalculadora.restar(5, 3)); // 2
