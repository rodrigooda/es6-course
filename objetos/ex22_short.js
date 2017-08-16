var nome = 'Bia', dataNascimento = 1981;
function idade(){
  return new Date().getFullYear() - this.dataNascimento;
}
var pessoa = {
  nome: nome,
  dataNascimento: dataNascimento,
  idade: idade,
  toString: function(){return `${nome} = ${idade()}`;}
};

console.log(pessoa.toString());

var pessoaShort = {
  nome,
  dataNascimento,
  idade,
  toString(){return `${this.nome} = ${this.idade()}`;}
};
pessoaShort.nome= 'Lisa';
pessoaShort.dataNascimento = 1980;
console.log(pessoaShort.toString());
