/*****************************************/
/***********Animacion portada*************/
/*****************************************/

const rubro = 
  [{tipo: "pastelería"},
  {tipo: "bar"},
  {tipo: "foodtruck"},
  {tipo: "restaurante"}];

$(".colorH1").text(`${"restaurante"}`);  

function intervalSet(){
window.setTimeout(miFuncion, 1500);
window.setTimeout(miFuncionb, 3000);
window.setTimeout(miFuncionc, 4500);
window.setTimeout(miFunciond, 6000);
}
let intervalFinal = setInterval(intervalSet,6000);

function miFuncion(a) { 
  $(".colorH1").text(`
   ${rubro[0].tipo}`);      
}
function miFuncionb(b) {  
  $(".colorH1").text(` ${rubro[1].tipo}`);
}
function miFuncionc(c) { 
  $(".colorH1").text(`${rubro[2].tipo}`);
}
function miFunciond(d) {  
  $(".colorH1").text(` ${rubro[3].tipo}`);
}
