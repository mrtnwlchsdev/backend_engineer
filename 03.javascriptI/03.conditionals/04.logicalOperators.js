/*
    Los operadores logicos permiten crear expresiones condicionales completas

    && AND
    || OR
    ! NOT
*/

// El operador AND retorna true solo si ambos expresiones evaluadas retornan true
if (true && true) {
    console.log(true) // true
}

// El condicional OR retorna true si al menos una de las expresiones evaluadas retorna true
if (true || false) {
    console.log(true) // true
}

// El operador NOT invierte el valor booleano de una expresion
if (!false && true) {
    console.log(true) // true
}