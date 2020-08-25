/*COLOCAR NO INDEX
const Pessoa = require('./modules/Aula5/Pessoa.js');
const joao = new Pessoa(80, 1.75);
console.log(joao.imc());

const pedro = new Pessoa();
pedro.peso = 100;
pedro.altura = 1.6;
console.log(pedro.imc());*/


class Pessoa{
  constructor(peso, altura){
    this.peso = peso;
    this.altura = altura;
  }
  imc(){
    let imc = this.peso / (this.altura * this.altura);
    return imc;
  }
}

module.exports = Pessoa;