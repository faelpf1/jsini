/*COLOCAR NO INDEX.JS

var modulo = require('./modules/Aula7/Condicional.js'); 

modulo.modulo();
*/

//if(<condição>){ ... }

function modulo(){
  var x, y; x= true; y=false;
  if(x){
    console.log("X É verdadeiro");
  }
  if(y){
    console.log("Y1 É verdadeiro");
  }
  if(!y){
    console.log("Y2 É verdadeiro");
  }
}

module.exports = {modulo}