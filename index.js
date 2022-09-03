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