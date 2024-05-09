const fruits = ["Aple", "Orange", "Banana", "Kiwi"]; 

let size = fruits.length; 
console.log(size);

let contenido = "";
for (let i = 0; i < size; i++){
    console.log(fruits[i]);
    contenido += fruits[i] + " , ";

}

let Lista1 = document.getElementById("Lista1");
Lista1.innerHTML = contenido; 
console.log(Lista1);
console.warn("La ruta es: ", fruits);
console.error("La ruta es: ", fruits);
console.info("La ruta es: ", fruits);
console.table(fruits);
console.debug("La ruta es: ", fruits);

let Lista2 = document.getElementById("Lista2");

Lista2.innerHTML = fruits.join(" //// ");

let Lista3 = document.getElementById("Lista3");
fruits.pop()
console.log(fruits)
Lista3.innerHTML = "Lista3: " + fruits.join(" //// ");

let Lista4 = document.getElementById("Lista4");
fruits.push("Mango");
fruits.push("Fresa");
Lista4.innerHTML = "Lista4: " +fruits.join(" //// ");


let Lista5 = document.getElementById("Lista5");
fruits.shift();
console.log(fruits);
Lista5.innerHTML = "Lista5: " +fruits.join(" //// ");

let Lista6 = document.getElementById("Lista6");
fruits.unshift("Pera"); 
fruits.unshift("Uva");
console.log(fruits);
Lista6.innerHTML = "Lista6: " + fruits.join(" //// ");

const nombreMujeres = ["Greys", "Dennis", "Sharay"];
const nombreHombres = ["Hasssiel", "Damian", "David"];

let listaNombres = nombreMujeres.concat(nombreHombres);
console.log(listaNombres);
let Lista7 = document.getElementById("Lista7");
Lista7.innerHTML = "Lista 7: " + Lista7.join(" //// ");




