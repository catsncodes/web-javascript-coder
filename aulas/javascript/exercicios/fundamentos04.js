function calculaDivisao(dividendo, divisor) {
  console.log('Operação: ' + dividendo + '/' + divisor + ' = ' + Math.floor(dividendo/divisor));
  console.log(`Resto: ${dividendo%divisor}`);
 
 
}

calculaDivisao(20, 2);