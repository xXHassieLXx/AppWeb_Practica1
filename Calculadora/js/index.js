let resultado = document.getElementById("resultado");

let asignar = (valor) => resultado.value += valor;    

// function asignar(valor){
//     resultado.value += valor;
    
// }

function calcular(valor){
    if (resultado.valor != '')
        resultado.value = eval(resultado.value);
    else
        alert('Ingrese valor');
}

// function limpiar(){
//     resultado.value = '';
// }

let limpiar = () => resultado.value = ''; 