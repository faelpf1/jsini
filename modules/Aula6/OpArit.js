/*COLOCAR NO INDEX
const OpArit = require('./modules/Aula6/OpArit.js');


var conta = new OpArit(10, 5);
console.log("Soma: ",conta.soma());
console.log("Subtração: ",conta.subtracao());
console.log("___________________________________________");
var conta1 = new OpArit();
conta1.var1=10;
conta1.var2=7;
console.log("Soma: ", conta1.soma());
console.log("Subtração:" ,conta1.subtracao());
console.log("Multiplicação: ", conta1.multiplicacao());
console.log("Divisão:" , conta1.divisao());
console.log("Resto: ", conta1.mod());
console.log("Potenciação", conta1.potencia());

*/


class OpArit{
  constructor(var1, var2){
    this.var1=var1;
    this.var2=var2;
  }
  soma(){
    return (this.var1 + this.var2);
  }
  subtracao(){
    return (this.var1 - this.var2);
  }
  multiplicacao(){
    return (this.var1 * this.var2);
  }
  divisao(){
    return (this.var1 / this.var2);
  }
  mod(){
    return (this.var1 % this.var2);
  }
  potencia(){
    return (this.var1 ** this.var2);
  }


}
module.exports = OpArit;