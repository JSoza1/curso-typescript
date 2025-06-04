//======================== ((( Los enums son un tipo de dato personalizado ))) =====================
//el cual pueden tener solo tipo de datos number (por defecto) o strings
//Sirven para limitar variables a ciertos tipo de valores que tenga nuestro tipo de dato personalizado (Enum)
//Se suele usar para roles de usuario o dias de semana entre otros (Admin, Usuario, Lunes, Martes, etc.)

//Ejemplo, valores number por defecto
enum Dia {
  Lunes,      // 0
  Martes,     // 1
  Miercoles,  // 2
  Jueves      // 3
}

//se acceden a las propiedades con notacion de punto

console.log(Dia.Lunes);     // 0
console.log(Dia.Martes);    // 1

//====================

//Ejemplo, valores strings asignados
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul"
}

console.log(Color.Rojo);    // "Rojo"
console.log(Color.Azul);    // "Azul"

//===================

//Ejemplo, valores number asignados

enum Estado {
  Activo = 10,
  Inactivo = 20,
  Pendiente = 30
}

console.log(Estado.Activo);      // 10
console.log(Estado.Pendiente);   // 30

