enum diasDeSemana {
    Lunes = "Lunes",
    Martes = "Martes",
    Miercoles = "Miercoles",
    Jueves = "Jueves",
    Viernes = "Viernes",
}

console.log (diasDeSemana["Jueves"])

//=================

enum estaciones {
    Otoño = 1,
    Invierno = 2,
    Primavera = 3,
    Verano = 4,
}

//se accede en este caso a la propiedad en vez de al valor, poniendo el valor entre los []
console.log (estaciones[4])

//================

enum prueba {
    Duolingo = "Jueves",
}

//si quisieramos hacer lo anterior con un string, acceder a la propiedad desde el valor, no es posible.
console.log (prueba["Jueves"]) //undefined
