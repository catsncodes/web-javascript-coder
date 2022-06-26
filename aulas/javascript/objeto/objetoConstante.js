// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' };
pessoa.nome = 'Pedro';
console.log(pessoa);

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' };

Object.freeze(pessoa); // torna todo o objeto constante, inclusive os atributos. Nem excluir é possível.

pessoa.nome = 'Maria';
pessoa.end = 'Rua ABC';
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: 'João'})
pessoaConstante = 'Maria';
console.log(pessoaConstante);