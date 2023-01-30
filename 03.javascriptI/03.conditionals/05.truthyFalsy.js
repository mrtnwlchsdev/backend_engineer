/*
    Los valores no booleanos (distintos a true y false) tambien pueden ser evaluados dentro de una condicion
    Todos los valores son evaluados como truthy a excepcion de:

        - 0
        - Cadenas de texto vacias
        - null
        - undefined
        - NaN
*/

let a = 10
let b = undefined

if (a) {
    console.log(true) // true
}

if (b) {
    console.log(true)
} else {
    console.log(false) // false
}