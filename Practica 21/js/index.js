let formulario = document.getElementById("formularioAgregar"); 
let nombre = document.getElementById("nombre"); 
let fecha = document.getElementById("fecha"); 
let descripcion = document.getElementById("descripcion"); 
let video = document.getElementById("video");
let imagen = document.getElementById("imagen");
let listaTareas = document.getElementById("listaTareas"); 
let btnGuardar = document.getElementById("btnGuardar");
let toggleDarkMode = document.getElementById('toggleDarkMode');
let body = document.body;


toggleDarkMode.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleDarkMode.innerHTML = '<i class="bi bi-brightness-high"></i>&nbsp;&nbsp;Modo Claro';
    } else {
        toggleDarkMode.innerHTML = '<i class="bi bi-moon"></i>&nbsp;&nbsp;Modo Oscuro';
    }
});

let tareas = [
    {
        imagen : "5.jpg",
        nombre : "Paola",
        fecha : "2024-06-09", 
        descripcion : "Bodorrio",
        video : "https://www.youtube.com/watch?v=BBGEG21CGo0",
    },
    {
        imagen : "2.jpg",
        nombre : "David",
        fecha : "2024-08-02", 
        descripcion : "Junta de empresarios",
        video : "https://www.youtube.com/watch?v=BBGEG21CGo0",

    },
    {
        imagen : "4.jpg",
        nombre : "Damian",
        fecha : "2024-04-22", 
        descripcion : "Viaje a Londres",
        video : "https://www.youtube.com/watch?v=BBGEG21CGo0",
    }

];

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); //Previene que se recargue la pagina 
    agregarDatos();
    cerrarModal();
    mostrarTareas();
    formulario.reset();

});


let cerrarModal = () => {
    btnGuardar.setAttribute("data-bs-dismiss" ,"modal");
    btnGuardar.click();
}

let agregarDatos = () => {
    console.log("Entró a la función agregar datos");
    let imagenFile = imagen.files[0];
    let tarea = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value,
        video: video.value
    };

    if (imagenFile) {
        let reader = new FileReader();
        reader.onload = (e) => {
            tarea.imagen = e.target.result;
            tareas.push(tarea);
            console.log(tareas);
            mostrarTareas(); // Mostrar las tareas después de cargar la imagen
        };
        reader.readAsDataURL(imagenFile);
    } else {
        tareas.push(tarea);
        console.log(tareas);
        mostrarTareas(); // Mostrar las tareas en caso de no haber imagen
    }
};



let mostrarTareas = () => {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, indice) => {
        listaTareas.innerHTML += `
        <div class="row">

        <div class="col-12 col-md-2 border p-3 text-center">
            <img src="${tarea.imagen}" alt="Imagen de ${tarea.nombre}" class="imagen-tarea">
        </div>

            <div class="col-12 col-md-2 border p-5 text-center d-flex align-items-center justify-content-center">
                <strong>${tarea.nombre}</strong>
            </div>

            <div class="col-12 col-md-2 border p-5 text-center d-flex align-items-center justify-content-center">
                <strong>${tarea.fecha}</strong>
            </div>

            <div class="col-12 col-md-2 border p- text-center d-flex align-items-center justify-content-center overflow-auto">
                <strong>${tarea.descripcion}</strong>
            </div>

            <div class="col-12 col-md-2 border p-4 text-center d-flex align-items-center justify-content-center">
                ${tarea.video ? `<a href="${tarea.video}" target="_blank" class="btn btn-primary">Video</a>` : 'No video'}
            </div>

            <div class="col-12 col-md-2 border p-4 text-center">
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editarModal"><i class="bi bi-pencil-square"></i> &nbsp; Editar</button>
                <button class="btn btn-danger" onClick="borrarTarea(this, ${indice})"><i class="bi bi-trash"></i> &nbsp; Borrar</button>
            </div>
        </div>
        `;
    });
};




let borrarTarea = (boton,indice) => {
    console.log(boton);
    if( confirm("Estas seguro de borar?")){
        boton.parentElement.parentElement.remove();
        tareas.splice(indice,1);
    }

}

let editarModal = (boton,indice) => {

}



mostrarTareas();