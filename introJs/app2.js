//Variables en Js
let nombres = "Erickson";

// arreglos
let arreglo = [10, 4, 5, 1, 2, 3, 9, 6, 8, 7];
let marcaCarros = ["BMW", "Mercedes", "Audi", "Ford"];
let booleanos = [true, false, true, false];

console.log("Este es el tamaño del arreglo: ", marcaCarros.length);

console.log("El primer elemento es: ", marcaCarros[0]);
console.log("El ultimo elemento es: ", marcaCarros.length - 1);

// Objetos

let carro = {
  maca: "BMW",
  modelo: "x5",
  anio: 2024,
  color: "Blanco",
  precio: 210000000,
  usado: true,
};

let carro2 = {
  maca: "Mercedes",
  modelo: "CL200",
  anio: 2021,
  color: "Negro",
  precio: 170000000,
  usado: true,
};

//funciones
function sumar(num1, num2, num3) {
  let suma = num1 + num2 + num3;
  return suma;
}

console.log("El resultado de la suma es: ", sumar(10, 20, 30));

function sumarNumeros() {
  let resultado = 0;

  for (let i = 0; i <= 100; i++) {
    resultado = resultado + i;
  }
  return resultado;
}
console.log("El resultado de la suma es: ", sumarNumeros());

// mostrar los numeros pares e impares del 1 al 100
function mostrarNumerosParesImpares() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log("El numero ", i, " es par");
    } else {
      console.log("El numero ", i, " es impar");
    }
  }
  return "Fin del programa";
}
console.log(mostrarNumerosParesImpares());

//imprimir los numeros del 1000 a 0
function imprimirNumeros() {
  for (let i = 1000; i >= 0; i--) {
    console.log("Este es el número: ", i);
  }
  return "Fin del programa";
}
console.log(imprimirNumeros());

// funcion que imprima el siguiente arbol de *
//*
//**
//***
//****
//*****
//******
//*******
//********

function imprimirAsteriscos() {
  let asteriscos = "";
  for (let i = 0; i <= 6; i++) {
    asteriscos = asteriscos + "*";
    console.log(asteriscos);
  }
  return "Fin del programa";
}
console.log(imprimirAsteriscos());

// funcion que imprima el siguiente arbol de *
//       *
//      ***
//     *****
//    *******
//   *********
//  ***********

function imprimirArbol() {
  let arbol = "";
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10 - i; j++) {
      arbol += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      arbol += "*";
    }
    arbol += "\n";
  }
  console.log(arbol);
  return "";
}

console.log(imprimirArbol());
