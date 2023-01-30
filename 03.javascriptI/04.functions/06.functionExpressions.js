// Las expresiones de funcion a menudo son asignadas a una variables
// En las expresiones de funcion el nombre de la funcion usualmente es omitido, convirtiendola en una funcion anonima
// Una vez definida una expresion de funcion, esta podra ser invocada a traves de la variable a la cual se ha asignado

const calculateArea = function () {
    console.log(2 * 2)
}

calculateArea() // 4