const rubro = 
  [{tipo: "pasteleria"},
  {tipo: "restaurant"},
  {tipo: "foodtruck"},
  {tipo: "bar"}];

$(".colorH1").text(` ${"pasteleria"}`);  

const tipoNegocio = rubro.sort()
console.log(tipoNegocio)
let intervalID = window.setInterval(miFuncion, 1350, 'pasteleria');
let intervalID1 = window.setInterval(miFuncionb, 1700, 'Restaurant');
let intervalID2 = window.setInterval(miFuncionc, 2600, 'Bar');
let intervalID3 = window.setInterval(miFunciond, 3600, 'Food truck');

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
