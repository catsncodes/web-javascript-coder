function calcularJurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicação) {
  let resultado = capitalInicial + (capitalInicial * taxaDeJuros * tempoDeAplicação);
  console.log(resultado);
}

function calcularJurosComposto(capitalInicial, taxaDeJuros, tempoDeAplicação) {
  resultado = capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicação;
  console.log(resultado);
}

calcularJurosSimples(100, 10/100, 2);
calcularJurosComposto(100, 10/100, 2);