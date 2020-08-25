/*COLOCAR NO INDEX.JS

var modulo = require('./modules/Aula3.js'); 

modulo.modulo();
*/


function modulo(){
  /* 
  function <nome da função> (parametros){

  }
  */ 
  /*
  function somar(){
    var x, y; x=10; y=10;
    var soma = x+y;
    console.log(soma);
  }
  somar(10, 10);
  */
  const somar = function (x, y){
    var soma = x+y;
    return soma;
  }
  var z = somar(4.6, 5.4);
  console.log(z);
  
}
module.exports = {modulo}

