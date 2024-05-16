let formulario = document.getElementById("formularioAgregar"); 
let nombre = document.getElementById("nombre"); 
let fecha = document.getElementById("fecha"); 
let descripcion = document.getElementById("descripcion"); 
let listaTareas = document.getElementById("listaTareas"); 


let tareas = [
    {
        nombre : "Hassiel",
        fecha : "09-06-02", 
        descripcion : "Cumpleaños"
    },
    {
        nombre : "David",
        fecha : "09-06-02", 
        descripcion : "Junta de empresarios"
    },
    {
        nombre : "Damian",
        fecha : "09-06-02", 
        descripcion : "Viaje a Londres"
    }

];

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); //Previene que se recargue la pagina 
    agregarDatos();
    // console.log(nombre.value);
    // console.log(fecha.value);
    // console.log(descripcion.value);
});

let agregarDatos = () => {
    console.log("Entro a la funcion agregar datos");
    let tarea = {
        nombre : nombre.value,
        fecha : fecha.value, 
        descripcion : descripcion.value
    };

    tareas.push(tarea); 
    console.log(tareas); 

};

let mostrarTareas = () => {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, indice) => {
        listaTareas.innerHTML += `
        <div class="row">
            <div class="col-12 col-md-3 border p-3">
                <strong>${tarea.nombre}</strong>
            </div>
            <div class="col-12 col-md-3 border p-3">
                <strong>${tarea.fecha}</strong>
            </div>
            <div class="col-12 col-md-3 border p-3">
                <strong>${tarea.descripcion}</strong>
            </div>

            <div class="col-12 col-md-3 border p-3 text-center">
                <button>Editar</button>

                <button>Borrar</button>
            </div>
        </div>

        
        `;
    });

}

mostrarTareas();