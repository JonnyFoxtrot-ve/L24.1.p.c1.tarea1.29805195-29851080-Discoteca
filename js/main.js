import Cl_discoteca from "./Cl_Discoteca.js";
import Cl_rumbero from "./Cl_rumbero.js";

let rumbero1 = new Cl_rumbero("134", "Luis", 23, "M");
let rumbero2 = new Cl_rumbero("154", "Ana", 22, "F");
let rumbero3 = new Cl_rumbero("324", "Jose", 18, "M");
let rumbero4 = new Cl_rumbero("286", "Carmen", 19, "F");

let discoteca = new Cl_discoteca();

discoteca.procesarR(rumbero1);
discoteca.procesarR(rumbero2);
discoteca.procesarR(rumbero3);
discoteca.procesarR(rumbero4);

let salida = document.getElementById("d");

salida.innerHTML += `<br>Pago que realiza ${
  rumbero1.nombre
} ${rumbero1.totalPagar()}$`;
salida.innerHTML += `<br>Pago que realiza ${
  rumbero2.nombre
} ${rumbero2.totalPagar()}$`;
salida.innerHTML += `<br>Pago que realiza ${
  rumbero3.nombre
} ${rumbero3.totalPagar()}$`;
salida.innerHTML += `<br>Pago que realiza ${
  rumbero4.nombre
} ${rumbero4.totalPagar()}$`;
salida.innerHTML += `<br>Total ganado: ${discoteca.totalGanado()}`;
salida.innerHTML += `<br>Porcentaje de chicas mayores a 21: ${discoteca.porcMayorF21()}%`;
salida.innerHTML += `<br>Total ganado: ${discoteca.gMayorAsistido()}`;
