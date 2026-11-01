class CalculadoraDescontoTradicional{
  #tipoCliente;
  constructor(tipoCliente) {
    this.#tipoCliente = tipoCliente;
  }
  realizarCompra(valor) {
    var valorTotal = 0;
    if (valor >= 1000) {
      valorTotal = valor - valor * 0.20;
    }
    else if (valor >= 500) {
      valorTotal = valor - valor * 0.10; 
    }

    if (this.#tipoCliente == "VIP") {
      valorTotal = valorTotal - valorTotal * 0.10;
    }
    // console.log("teste" + valorTotal);
    // console.log("teste" + this.#tipoCliente);
    if (valor < 100 || valorTotal < 100 ) {
      valorTotal += valor + 15;
    }
    if (valorTotal <= 0) {
      throw new Error("Valor inferior ou igual a zero");
    }
    return valorTotal;
  }
}
function simularCompra() {
  tipoCliente = document.getElementById("tipoCliente").value;
  calculadora = new CalculadoraDescontoTradicional(tipoCliente); 
  valorSimulacao = document.getElementById('compra').value;
  valorRetorno = calculadora.realizarCompra(valorSimulacao);
  resultado = document.getElementById("resultado");
  resultado.innerText = "Valor Simulado:" + valorRetorno;
  }

if (typeof module !== 'undefined') {
  module.exports = { CalculadoraDescontoTradicional };
}

