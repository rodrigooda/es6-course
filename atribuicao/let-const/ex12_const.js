const produto = {
  nome: 'Caneta',
  preco: 2.59
};

console.log(produto.nome);
produto.nome = 'Notebook';
var a =produto;
console.log(a.nome);
a.nome= 'teste';
console.log(a.nome);
console.log(produto.nome);

produto = {};
