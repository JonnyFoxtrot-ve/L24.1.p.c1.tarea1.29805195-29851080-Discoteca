export default class Cl_discoteca {
  constructor() {
    this.acumR = 0;
    this.contFM = 0;
    this.contF = 0;
    this.contM = 0;
  }
  procesarR(r) {
    // Le asignamos a la propiedad que acumule el total a pagar de cada rumbero
    this.acumR += r.totalPagar();

    if (r.sexo === "M") {
      this.contM++;
    } else {
      this.contF++;
    }
    if (r.sexo === "F" && r.edad > 21) {
      this.contFM++;
    }
  }

  //Metodo 2*
  totalGanado() {
    // Nos retorna el acumulado recaudado
    return this.acumR;
  }
  //Metodo 3*
  porcMayorF21() {
    //Condicional que nos indica si hay 0 mujeres
    if (this.contF === 0) {
      return `No hay mujeres`;
      //Retornamos el porcentaje de rumberas mayores a 21
    } else return (this.contFM / this.contF) * 100;
  }

  //Metodo 4* Metodo para saber cual genero fue más a la discoteca
  gMayorAsistido() {
    //Condicional que retorna al genero masculino como más asistido
    if (this.contM > this.contF) {
      return "El genero mayor asisito fue el Masculino";
      //Condicional que retorna al genero femenino como más asistido
    } else if (this.contM < this.contF) {
      return "El genero mayor asistido fue el Femenino";
    } else {
      //Retornamos ambos generos debiddo al condicional impuesto anteriormente si no se cumple ninguna de las 2.
      return "Ambos generos asisiteron por igual";
    }
  }
}
