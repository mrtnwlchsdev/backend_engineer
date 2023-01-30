// La estructura condicional switch permite simplificar la definicion de multiples condicionel else if

let number = 10

switch(number) {
    case 5:
        console.log(5)
        break
    case 10:
        console.log(10) // 10
        break
    default:
        console.log("Invalid value")
        break
}

// La palabra clave break es utilizada para finalizar la ejecucion de la estructura cuando se cumpla el caso definido