// Una funcion puede recibir argumentos durante su invocacion, los cuales seran utilizados como variables locales dentro de la misma
// Los argumentos son recibidos en la funcion como parametros

function sum(a) {
    console.log(100 + a)
}

sum(20) // 120

// Una funcion puede contener parametros por defecto
// Los parametros por defecto podran ser sobreescritos por los argumentos enviados durante la invocacion de la funcion

function product(a = 100) {
    console.log(100 * a)
}

product() // 10000
product(1) // 100