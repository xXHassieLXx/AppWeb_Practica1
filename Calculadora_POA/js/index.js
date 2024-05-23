// Obtiene el elemento del input de resultado del DOM
let resultado = document.getElementById("resultado");

// Función que añade el valor al campo de resultado
let asignar = (valor) => resultado.value += valor;

// Función que limpia el campo de resultado
let limpiar = () => resultado.value = '';

// Variable predefinida n
let variables = {
    n: 10
};

// Función principal para calcular el resultado de la expresión
function calcular() {
    try {
        // Obtiene la expresión del campo de resultado
        let expression = resultado.value;

        // Reemplazar las variables por sus valores
        for (const [key, value] of Object.entries(variables)) {
            // Reemplaza todas las ocurrencias de la variable por su valor
            expression = expression.replace(new RegExp(`\\b${key}\\b`, 'g'), value);
        }

        // Añadir operadores de multiplicación implícitos
        expression = expression.replace(/\^/g, '**'); // Reemplazar ^ con ** para la operación de potencia
        expression = expression.replace(/(\d)(\()/g, '$1*('); // Entre número y paréntesis de apertura
        expression = expression.replace(/(\))(\d)/g, ')*$2'); // Entre paréntesis de cierre y número
        expression = expression.replace(/(\))(\()/g, ')*(');  // Entre paréntesis de cierre y paréntesis de apertura

        // Evaluar la expresión y mostrar el resultado
        resultado.value = eval(expression);
    } catch (error) {
        // Muestra una alerta si la expresión es inválida
        alert('Expresión inválida');
    }
}
