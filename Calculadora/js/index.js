let resultado = document.getElementById("resultado");

let asignar = (valor) => resultado.value += valor;    

// function asignar(valor){
//     resultado.value += valor;
    
// }



function calcular() {
    try {
        let expression = resultado.value

        // Añadir operadores de multiplicación implícitos
        expression = expression.replace(/\%/g, '**');
        expression = expression.replace(/\^/g, '**'); // Reemplazar ^ con ** para la operación de potencia
        expression = expression.replace(/(\d)(\()/g, '$1*('); // Entre número y paréntesis de apertura
        expression = expression.replace(/(\))(\d)/g, ')*$2'); // Entre paréntesis de cierre y número
        expression = expression.replace(/(\))(\()/g, ')*(');  // Entre paréntesis de cierre y paréntesis de apertura

        // Evaluar la expresión y mostrar el resultado
        resultado.value = eval(expression);
    } catch (error) {
        alert('Expresión inválida');
    }
}

// function calcular(valor){
//     if (resultado.valor != '')
//         resultado.value = eval(resultado.value);
//     else
//         alert('Ingrese valor');
// }



// function limpiar(){
//     resultado.value = '';
// }

let limpiar = () => resultado.value = ''; 