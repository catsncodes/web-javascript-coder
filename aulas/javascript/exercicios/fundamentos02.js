function tiposDeTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
      console.log('Triângulo equilátero')
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
      console.log('Triângulo isósceles')
    } else {
      console.log('Triângulo escaleno')
    }
}

tiposDeTriangulo(2, 2, 2);
tiposDeTriangulo(2, 2, 1);
tiposDeTriangulo(1, 2, 3);