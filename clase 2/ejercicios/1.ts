// let pelota: number;
// console.log(pelota);

// esto da undefined

// const numero: unknown = 5;
// const otroNumero: number = 3;
// const suma = numero + otroNumero;

// Esto da error de compilacion

//Tipo de dato con Enums (el enum es un tipo de dato personalizado, limitado a propiedades y valores definidos)
enum Rol {
  Admin, //sino se asigna valor es 0
  Usuario //sino se asigna valor es 1
}

let rol: Rol = Rol.Usuario;


//Tipo de dato con Interfaces
interface Persona {
  nombre: string;
  edad: number;
}

let persona: Persona = {
  nombre: "Ana",
  edad: 28
};
