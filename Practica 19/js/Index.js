let lista = document.getElementById("lista");
let texto = "Hola mi nombre es carlos, y voy a cumplir 18 años"
console.log(texto);

lista.innerHTML = texto; 

texto = 'Esta es otra cadena'

lista.innerHTML = texto; 

texto = `Esta es otra forma`

let text = `Cdena multilinea
La Salle
Alumnos 301
ESTA SEMANA COMIENZAN los examenes de 2do parcial
Suerte!!!
`
console.log(text);

let a = 5; 
let b = 10; 
let resultado = `El resultado de la suma es ${a} + ${b} = ${a + b}

<ul>
    <li>Divide ${a/b}</li>
    <li>Multiplica ${a*b}</li>
    <li>Resta ${a-b}</li>
</ul>

Multiplica ${a} * ${b}
Multiplicacion = ${a*b}`; 
console.log(resultado);
lista.innerHTML = resultado;

let persona = "Pablo"
let edad = 16

function miFuncion(cadena,personaX,edad){
    let resultado = ``;
    // cadena =+ personaX + 'Tiene una edad de: ' + edad + 'años';

    resultado = `${cadena} ${personaX} Tiene una edad de ${edad} años`;

    console.log(resultado);
    return resultado;
}

miFuncion("Nombre:", persona,edad);

// let resultado2 = miFuncion`Hello ${cadena} ${persona} your age is ${edad} years`
// console.log(resultado2)

function mostrarNombre(name){
    console.log(name);
    return name;
    
}

let resultado2 = mostrarNombre`Raul`

let titulo = "Ganadores de los Oscares 2024"
let cantantes = ["Billi Elish","Lady Gaga","Adele"]
let cadenaHTML = `<h1>${titulo}</h1>`

cadenaHTML += `<ul>`;
for (let cantante of cantantes){
    cadenaHTML += `<li> ${cantante}</li>`;
}

cadenaHTML += `</ul>`;

lista.innerHTML = cadenaHTML;