// Las funciones que retornan un valor dentro de otra funcion son denominadas como funciones de ayuda
// Las funciones de ayuda evitan la duplicidad de codigo, ya que es posible utilizar el codigo definido dentro de una funcion para realizar una tarea especifica dentro de otra

function sum(a,b) {
    return a + b
}

function result(a,b) {
    return sum(a,b)
}

console.log(result(10,20)) // 30