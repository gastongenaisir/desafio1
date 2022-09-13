const comensales = parseInt(prompt("Cuantos comensales son?"));
const comilones = prompt("Son de comer mucho? - responsder si o no.");

function calcular() {
  if (comilones === "si") {
    total = comensales * 4;
    alert("Debería calcular " + total + " de empanadas");
  } else if (comilones === "no") {
    total = comensales * 3;
    alert("Debería calcular " + total + " de empanadas");
  } else {
    alert(
      "Si no sabe si son de buen comer, calcule 4 empanas por persona y le queda para el desayuno p merienda :)"
    );
  }
}
calcular();

const productos = [
  { id: 1 , nombre:"carne", precio: 220},
  { id: 2 , nombre:"jyq", precio: 200},
  { id: 3 , nombre:"pollo", precio: 210},
];

let nombre = prompt("¿Quiere saber los precios de cada empanada? Opciones: carne, jyq o pollo");
let producto = productos.find(item => item.nombre === nombre);
let mensaje = `
Id: ${producto.id}
Nombre: ${producto.nombre}
Precio: $${producto.precio}
`;
alert(mensaje);

