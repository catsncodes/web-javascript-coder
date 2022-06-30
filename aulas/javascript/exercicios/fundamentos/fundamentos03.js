function elevadoA(base, expoente) {
  // Método antigo
  let power = Math.pow(base, expoente);
  return console.log(power);

  // Método novo
  power = base ** expoente;
}

elevadoA(2, 2);
elevadoA(2, 3);
elevadoA(2, 4);
elevadoA(2, 5);