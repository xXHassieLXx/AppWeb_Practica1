


let a = 10;
let b = 20;
 var suma = a + b; 4
 console.log(suma);


let restar = a - b; 
console.log(restar);

let multiplicar = a * b; 
console.log(multiplicar);

let dividir = a / b;
console.log(dividir); 

let modulo = a % b;
console.log("El residuo de a % b es: ",modulo); 

let mayor = a > b; 
console.log("a es mayor que b: ",mayor); 

let menor = a < b; 
console .log("a es menor que b: ",menor);

let mayorigual = a >= b; 
console.log("a es mayor igual que b: ",mayorigual);

let menorigual = a <= b;
console.log("a es menor igual que b: ",menorigual)

let igual = a  == b; 
console.log("a es igual que b: ",igual)

a = -50; 
b = 10*(-1); 

if (a != b){
    console.log("a es diferente de b")
}else{
    console.log("a es igual de b")
}



//Operador ternario 
let comparacion  = a > b ? "a es mayor que b" : "a es menor o igual que b"; 
console.log(comparacion);

function multiplicarNumeros(x, y) {
    return x * y;

}

let x = 100; 
let y = 200; 
let resultado = multiplicarNumeros(x, y); 
console.log("El resultado de la multiplicaciob es: ", resultado)

function calcularAreaCirculo (radio) {
    pi = 3.1416
    let area = pi * radio * radio 
    //Otra forma - let area = pi * (radio ** 2)
    //Otra forma - let area = Math.Pi * Math.pow(radio,2) 
    return area
    
}

console.log("Area del circulo: ",calcularAreaCirculo(10))

function toCelsius (farenheith){
    return (5/9) * (farenheith - 32)

}

let temp = toCelsius(77)
console.log("Temperatura: ", temp)


function edadx2(edad){
    return edad * 2
}

console.log("La edad multiplicadad por 2 es: ", edadx2(20))


let hello = function(){
    return "Hello word"

}

console.log(hello)