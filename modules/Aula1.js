/*COLOCAR NO INDEX.JS

var modulo = require('./modules/Aula1.js'); 

modulo.modulo();
*/



function modulo(){
  var x = 2;
  x = 6;
  //console.log(x);
  const y = "a";
  //y="b"; Erro
  //console.log(y);
  //Variaveis Globais e Locais
  {
    let z = 4;
    console.log(x);
    console.log(y);
    console.log(z);
  }
  //console.log(z);  
}
module.exports = {modulo}