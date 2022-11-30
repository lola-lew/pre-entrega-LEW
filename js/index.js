
const comision = 0.3;
// Pido la cantidad deseada de bitcoins a convertir y convierto a número
function pregunta() {
  let ingresoBit = parseInt(prompt("Ingrese la cantidad de bitcoins que desea convertir: "));


  // reviso que el número sea mayor a 0.
  if (ingresoBit <= 0) {
    // Si el número es igual o menor a 0 vuelvo a solicitar cantidad
    pregunta();
  } else {
    // conversion a eth
    return eth = alert( (ingresoBit * 0.000253) + " ETH");
  }
};

// si el usuario quiere comprar eth
function comprar(eth, comision) {
  let calculo = parseInt((eth-(eth* comision)));
  return alert("Total ETH adquiridos: " + calculo);
};



pregunta();
