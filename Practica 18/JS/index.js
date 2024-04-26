let j = 500;
let nombre = "Greys";
for(let i = 10; i <= 20; i++) {
    console.log(i);
    let nombre2 = "Denisse";
    console.log("Nombre dentro del ciclo:", nombre2);
}

console.log("El valor de j despues del ciclo es:", j);
console.log("Nombre fuera del ciclo:", nombre);

const PI = Math.PI;
console.log("El valor de PI es:", PI);

const persona = {
    nombre : "Diego",
    edad : 27,
    sexo : "M", 
    casado : true
};
console.log(persona);

const pablo = {
    nombre : "Pablo",
    edad : "21",
    sexo : "M",
    casado : false 
}

console.log(pablo.nombre);
console.log(pablo.edad);
console.log(pablo.sexo);
console.log(pablo.casado);

for(let propiedad in persona) {
    console.log(propiedad,":",persona[propiedad]);
}

let marcas = ["Toyota", "Nissan", "Honda", "Porsche"];

let lista = document.getElementById("lista");
lista.innerHTML = "";
for(let marca of marcas) {
    console.log(marca);
    lista.innerHTML +=  "<li>" + marca + "</li>";
}

let peliculas = [
    {
        nombre : "Spiderman into the spiderverse",
        imagen : "https://th.bing.com/th/id/OIP.maWVac0a9wNKq2eq36rlpgHaLH?rs=1&pid=ImgDetMain"
    },
    {
        nombre : "Avengers: End game",
        imagen : "https://th.bing.com/th/id/R.14b446150c874a3fe3feab942b0ff975?rik=h7OaljlsWMCrJQ&riu=http%3a%2f%2feclipsemagazine.com%2fwp-content%2fuploads%2f2019%2f07%2fAvengers-Endgame-768x1024.jpg&ehk=Gt9lhMzXwYmctkPhWXk5Z2YUvCuEdVXw5H8ltNx2IOo%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        nombre : "Megamente",
        imagen : "https://th.bing.com/th/id/R.dcf1c9f17ad44ef86c8410b8c18f6fd9?rik=xy%2biEOk6c4vuRA&riu=http%3a%2f%2fvignette1.wikia.nocookie.net%2fdoblaje%2fimages%2fc%2fcc%2fMegamente.jpg%2frevision%2flatest%3fcb%3d20101129214751%26path-prefix%3des&ehk=uhR1392K7l0HcBuB%2fDN4tFACDjtu%2bgKMuvr76JXsIcY%3d&risl=&pid=ImgRaw&r=0"
    }
];

let listaPeliculas = document.getElementById("lista2");
lista.innerHTML = "";
for(let pelicula of peliculas) {
    console.log(pelicula.nombre);
    listaPeliculas.innerHTML += "<p>" + pelicula.nombre + "</p>";
    listaPeliculas.innerHTML += "<img src='" + pelicula.imagen + "'width='150px'>" 
}