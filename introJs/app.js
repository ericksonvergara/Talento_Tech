let apellido = "Vergara";
let edad = 33;
let esSoltero = false;
let colorPiel = "moreno";

console.log("Este tipo de dato es:", typeof apellido);
console.log("Este tipo de dato es " + typeof apellido);

let arreglo = [10, 4, 5, 1, 2, 3, 9, 6, 8, 7];

let persona = {
  nombre: "Erickson vergara",
  edad: 31,
  soltero: false,
  colorPiel: "moreno",
};

// Operaciones entre variables

// Suma
num1 = 10;
num2 = 20;
suma = num1 + num2;

console.log("El resultado de la suma es: " + suma);

//Resta
resta = num2 - num1;
console.log("El resultado de la resta es: " + resta);

//Multiplicación
multiplicacion = num1 * num2;
console.log("El resutado de la resta es: " + multiplicacion);

//Division y modulo
division = num1 / num2;
console.log("El resultado de la division es: " + division);
console.log("El modulo de la division es: " + (num2 % num1));

// Operadores de comparación
let c = 11;
let d = 12;
let e = "11";

console.log("La comparacion es: ", c === e);
console.log("La comparacion es: ", c !== e);

if (5 > 10) {
  console.log("Mis matematícas estan remal");
} else {
  console.log("Mis matematícas estan bien");
}

// quiero saber si el diez es un numero par
if (10 % 2 === 0) {
  console.log("El número es par");
} else {
  console.log("El númeor es impar");
}
