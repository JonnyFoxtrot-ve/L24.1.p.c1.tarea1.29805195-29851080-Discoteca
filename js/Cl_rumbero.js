export default class Cl_rumbero {
  constructor(cedula, nombre, edad, sexo) {
    this.cedula = cedula;
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
  }
  // METODOS GET Y SET para edad
  set edad(edad) {
    this._edad = +edad;
  }
  get edad() {
    return this._edad;
  }

  //Metodo 1*
  totalPagar() {
    //Varible para el 25% del valor de la chica segun el valor del generero masculino
    let totalF = 25 * 0.25;
    if (this.sexo === "M") {
      return 25;
    } else {
      return totalF;
    }
  }
}
