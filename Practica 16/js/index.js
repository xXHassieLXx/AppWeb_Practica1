let numero = 100 // Variable global, tipo entero 
console.log(numero);

let decimal = 100.5 //Variable global, tipo number decimal
console.log(decimal);

let texto = "Hola mundo" //Variable global, tipo string
let texto2 = "Hola mundo" //Variable global, tipo string

let booleano = true // Variable global, tipo booleano
let arreglo = [1, 2, 3, 4, 5] //Variable global, tipo arreglo
let arreglo2 = [a, b, c, d, e, f] //Variable global, tipo arreglo
console.log(arreglo2)
console.log(arreglo2[3])
console.log(arreglo2[-3])
console.log(arreglo2[30])

let arregloMixto = [1, 2, 3, 4, 5, a, b, c, d, e, f, true, false]
console.log(arregloMixto)

arregloMixto[0] = "Hola"
console.log(arregloMixto)

let objeto = {
    nombre : "Juan",
    edad : 30,
    telefono : 477765383649

}

console.log(objeto)
console.log(objeto)
console.log(objeto[edad])
console.log("Nombre" + objeto[edad])


let estudiante = {
    nembre : "Luis Felipe",
    matricule : "649397",
    carrera : "ISSC",
    materias : ["Matematicas", "Programacion", "Data Base"], 
    amigos : [{
        nombre : "Pedro",
        telefono : "4774678829"
    },{
        nombre : "Maria(Crush)",
        telefono : "4774893893"
    }]
}

console.log(estudiante.materia[1])
console.log(estudiante.amigos(1).nombre)

let variable = 10
console.log(typeof variable)

let variable2 = "2"
console.log(typeof variable2)

let variable3 = true
console.log(typeof variable3)

let variable4 = [1,2,3,4,5,]
console.log(typeof variable4)

let variable5 = {
    nombre : "Juan",
    edad : 30,
    telefono : 477765383649
}
console.log(typeof variable5)

let saludo, nombre = "Juan"
nombre = "Luis Felipe"
console.log(nombre)