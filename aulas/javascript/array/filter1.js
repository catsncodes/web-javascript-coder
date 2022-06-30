const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 18.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 12.99, fragil: false },
]

console.log(produtos.filter(function(p) {
        return false; // todos os elementos são excluidos
}));

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));
