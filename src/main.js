/* import Clientes from "./Clientes";
import Impuesto from "./Impuestos"; */

class Clientes {
  //impuesto = {};

  constructor(nombres) {
    this.nombres = nombres;
  }
  get getNombres() {
    return this.nombres;
  }

  set setNombres(val) {
    this.nombres = val;
  }

  calcularImpuesto(montobruto, deducciones) {
    const impuesto = (montobruto - deducciones) * 0.21;
    if (!impuesto) return 0;
    this.impuesto = {
      impuesto,
    };
    return impuesto;
  }
}

class Impuestos {
  constructor(montobruto, deducciones) {
    this.montobrutoanual = montobruto;
    this.deducciones = deducciones;
  }

  get getMontoBruto() {
    return this.montobrutoanual;
  }

  set setMontoBruto(val) {
    this.montobrutoanual = val;
  }

  get getDeducciones() {
    return this.deducciones;
  }

  set setDeducciones(val) {
    this.Deducciones = val;
  }
}

const inpNombres = document.getElementById("inpNombres");
const inpMontoBrutoAnual = document.getElementById("inpMontoBrutoAnual");
const inpDeducciones = document.getElementById("inpDeducciones");
const btnCalcular = document.getElementById("btnCalcular");
const divCalculo = document.getElementById("divCalculo");

btnCalcular.addEventListener("click", function () {
  var nombreValor = inpNombres.value;
  const inpNombresNomalizado = nombreValor;
  const inpMontoBrutoAnualNomalizado = Number(inpMontoBrutoAnual.value);
  const inpDeduccionesNomalizado = Number(inpDeducciones.value);

  const Cliente1 = new Clientes(inpNombresNomalizado);
  const Impuesto1 = new Impuestos(
    inpMontoBrutoAnualNomalizado,
    inpDeduccionesNomalizado
  );
  const Impuestototal = Cliente1.calcularImpuesto(
    Impuesto1.getMontoBruto,
    Impuesto1.getDeducciones
  );
  /* console.log(Impuestototal); */
  divCalculo.innerHTML = `<h1> El calculo del impuesot para ${Cliente1.getNombres} es: ${Impuestototal}`;
});