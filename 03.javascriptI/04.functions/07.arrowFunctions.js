// A partir de ES6 se ha introducido una nueva forma de definir funciones denominada funciones de flecha
// En las funciones de flecha se omite el uso de la palabra clave function al definir una funcion

const greeting = () => {
    console.log("Hello World")
}

greeting() // Hello World

// Si la funcion solo recibe un parametro se puede omitir el uso de parentesis
const sum = a => {
    return a + a
}

// Si el cuerpo de la funcion se compone de una unica linea, se puede omitir el uso de llaves
// Asi mismo se puede realizar un retorno implicito de los datos omitiendo ademas el uso de la palabra clave retur
const product = a => a + a