/*****************************************/
/*******Deseleccionar boton "Enviar"******/
/*****************************************/

/*carga la cantidad de items en los input*/
blockButton();

/*variables globales*/
let names = document.querySelector(".name");
let telephone = document.querySelector(".telephone");
let mail = document.querySelector(".mail");
let local = document.querySelector(".local");  

let correo = mail.value;

/*Los eventos chequean si los inputs estan completos*/
names.onchange = () => {
    blockButton();
    cargarName();
    validarEmail(mail);
}
telephone.onchange = () => {
    blockButton();
    validarEmail(mail);
}
mail.onchange = () => {
    blockButton();
    validarEmail(mail);
}
local.onchange = () => {
    blockButton();
    validarEmail(mail);
}

/*funcion para deseleccionar boton*/

function blockButton(){     
let names = document.querySelector(".name").value;
let telephone = document.querySelector(".telephone").value;
let mail = document.querySelector(".mail").value;
let local = document.querySelector(".local").value;  

if(((names.length) && (telephone.length) && (mail.length) && (local.length)) == 0){   
    document.getElementById('button').disabled = true;
    }
    else if (((names.length) && (telephone.length) && (mail.length) && (local.length)) >= 1){
    document.getElementById('button').disabled = false; 
    }
}

/*******funcion para validar email *******/
function validarEmail(mail) {
    if (/\S+@\S+/.test(mail.value)){
        console.log("mail correcto");
    } else {
     document.getElementById('button').disabled = true;
    }
  }

/*funcion para cargar datos en el modal*/
function cargarName(){
$(".modal-title").text(`Mensaje enviado!`)
$(".parrafoModal").text(`${names.value}, ten cerca las vias de contacto que nos proporcionastes, te llamaremos pronto!`)
}