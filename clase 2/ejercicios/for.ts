// Imprimiendo numeros impares
for (let i = 0; i <= 100; i++) {
  // % si el resto de la division es distinto a 0, es un numero impar
  if (i % 2 !== 0) {
    console.log(i)
  }
}


let jugadores = ['Pedro', 'Juan', 'Martín', 'Pedro', 'Ignacio', 'Matías', 'Roberto',
 'Julián', 'Esteban', 'Pedro', 'Alejandro', 'Franco', 'Francisco', 'Daniel', 'Pedro',
 'Manuel', 'Pedro', 'Marco', 'Javier', 'Miguel'];

// recorriendo array con for...of
 for (let jugador of jugadores) {
    console.log(jugador)
 }

// recorriendo indices en donde esta padro
 for (let i = 0; i < jugadores.length; i++) {
    // el [i] representa el indice
    // lo que dice esta linea es "si el indice es igual a pedro, hacer..."
  if (jugadores[i] === "Pedro") {
    // imprimir indice
    console.log(i);
  }
}