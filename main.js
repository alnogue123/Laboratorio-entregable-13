let Operacion = prompt("ingresa la operacion que quieres hacer" +
    "\n 1: Suma \n 2: Resta" +
    "\n 3: Multiplicar \n 4: dividir"
);

let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));

RealizarCalculos(numero1, numero2, Operacion);

function RealizarCalculos(numero1, numero2, Operacion) {
    switch (Operacion) {
        case "1":
            alert(`El resultado es de ${Suma(numero1,numero2)}`);
            break;
        case "2":
            alert(`El resultado es de ${Resta(numero1,numero2)}`);
            break;
        case "3":
            alert(`El resultado es de ${Multiplicar(numero1,numero2)}`);
            break;
        case "4":
            alert(`El resultado es de ${Dividir(numero1,numero2)}`);
            break;
        default:
            console.log("operacion incorrecta");
            break;
    }
}

function Suma(a, b) {
    return a + b
}

function Resta(a, b) {
    return a - b
}

function Multiplicar(a, b) {
    return a * b
}

function Dividir(a, b) {
    if (b != 0) {
        return a / b
    } else {
        console.log("No se puede dividir entre 0");
    }
}