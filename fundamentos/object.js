const prod1 = {}; // {} representa um objeto,
                  // [] da msm forma que representa um array
prod1.nome = 'Celular Ultra Mega';
prod1.preço = 4998.90;
prod1['Desconto Legal'] = 0.40; // evitar atributos com espaço

console.log(prod1);

const prod2 = {
  nome:  'Camisa Polo',
  preco: 79.90,
  obj: {
    blabla: 1,
  }
}
/* json != objeto*/
//json é um formato textual para interoperabilidade entre  sistemas
prod2['Desconto legal'] = 0.40;

console.log(prod2);
