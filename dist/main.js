"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* import Clientes from "./Clientes";
import Impuesto from "./Impuestos"; */
var Clientes = /*#__PURE__*/function () {
  //impuesto = {};
  function Clientes(nombres) {
    _classCallCheck(this, Clientes);

    this.nombres = nombres;
  }

  _createClass(Clientes, [{
    key: "getNombres",
    get: function get() {
      return this.nombres;
    }
  }, {
    key: "setNombres",
    set: function set(val) {
      this.nombres = val;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto(montobruto, deducciones) {
      var impuesto = (montobruto - deducciones) * 0.21;
      if (!impuesto) return 0;
      this.impuesto = {
        impuesto: impuesto
      };
      return impuesto;
    }
  }]);

  return Clientes;
}();

var Impuestos = /*#__PURE__*/function () {
  function Impuestos(montobruto, deducciones) {
    _classCallCheck(this, Impuestos);

    this.montobrutoanual = montobruto;
    this.deducciones = deducciones;
  }

  _createClass(Impuestos, [{
    key: "getMontoBruto",
    get: function get() {
      return this.montobrutoanual;
    }
  }, {
    key: "setMontoBruto",
    set: function set(val) {
      this.montobrutoanual = val;
    }
  }, {
    key: "getDeducciones",
    get: function get() {
      return this.deducciones;
    }
  }, {
    key: "setDeducciones",
    set: function set(val) {
      this.Deducciones = val;
    }
  }]);

  return Impuestos;
}();

var inpNombres = document.getElementById("inpNombres");
var inpMontoBrutoAnual = document.getElementById("inpMontoBrutoAnual");
var inpDeducciones = document.getElementById("inpDeducciones");
var btnCalcular = document.getElementById("btnCalcular");
var divCalculo = document.getElementById("divCalculo");
btnCalcular.addEventListener("click", function () {
  var nombreValor = inpNombres.value;
  var inpNombresNomalizado = nombreValor;
  var inpMontoBrutoAnualNomalizado = Number(inpMontoBrutoAnual.value);
  var inpDeduccionesNomalizado = Number(inpDeducciones.value);
  var Cliente1 = new Clientes(inpNombresNomalizado);
  var Impuesto1 = new Impuestos(inpMontoBrutoAnualNomalizado, inpDeduccionesNomalizado);
  var Impuestototal = Cliente1.calcularImpuesto(Impuesto1.getMontoBruto, Impuesto1.getDeducciones);
  /* console.log(Impuestototal); */

  divCalculo.innerHTML = "<h1> El calculo del impuesot para ".concat(Cliente1.getNombres, " es: ").concat(Impuestototal);
});