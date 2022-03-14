const rubro = 
  [{tipo: "pastelería"},
  {tipo: "bar"},
  {tipo: "foodtruck"},
  {tipo: "restaurante"}];

$(".colorH1").text(`${"restaurante"}`);  

function intervalSet(){
window.setTimeout(miFuncion, 1500, 'pasteleria');
window.setTimeout(miFuncionb, 3000, 'Restaurant');
window.setTimeout(miFuncionc, 4500, 'Bar');
window.setTimeout(miFunciond, 6000, 'Food truck');
}
let intervalFinal = setInterval(intervalSet,6000)

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
