class Usuario {
    constructor(id, nombre, apellido, edad) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

    }

}
let usuarios = [];
acciones();

function acciones() {
    let accion = 0;
    while (accion !== 2) {


        accion = Number(prompt(
            `Seleccione una accion:
        1. Agregar Usuario
        2. Salir`
        ));
        switch (accion) {
            case 1:
                ingresoUsuarios();
                break;
        }
    }
}

function ingresoUsuarios() {
    let id = usuarios.length + 1;
    let nombre = prompt("ingrese su nombre");
    let apellido = prompt("ingrese su apellido");
    let edad = Number(prompt("ingrese su edad"));
    let usuario = new Usuario(id, nombre, apellido, edad);
    usuarios.push(usuario);

    alert(`Bienvenido ${nombre + " " + apellido}  a divertirse!! `);


    return (edad);





}
let cantidadUsuarios = usuarios.length
alert(`${cantidadUsuarios} usuarios Jugando`)

const cuestionario = [{
        pregunta: "¿cual es el color verde?",
        opciones: ["Este no es ", "  ES ESTE!!! ", "  Te pasaste es el anterior "],
        respuestaOk: "  ES ESTE!!! ",
    },
    {
        pregunta: "¿cual es el color rojo?",
        opciones: ["  Yo no soy ", "  Segui, este tampoco es ", " SOY YO "],
        respuestaOk: " SOY YO ",
    },
    {
        pregunta: "¿cual es el color azul?",
        opciones: ["  Si soy el correcto ", "Casi, pero no", "  Yo no soy "],
        respuestaOk: "  Si soy el correcto",
    },
];
alert(cuestionario[0].pregunta)
alert(cuestionario[0].opciones)


respuestaCorrecta = false
let index = 0;
while (respuestaCorrecta !== true) {
    alert(cuestionario[index].pregunta);
    alert(cuestionario[index].opciones);

    let respuestaIngresada = prompt("ingrese su respuesta")
    let respuesta = opcionCorrecta(respuestaIngresada, index)

    if (respuesta) {
        alert("excelente, sigamos con la proxima pregunta")
        if ((cuestionario.length - 1) == index) {
            respuestaCorrecta = true;
        }
        index++;

    } else {
        alert("estuviste cerca, vuelve a intentarlo")
    }
}

function opcionCorrecta(respuestaIngresada, index) {



    if (respuestaIngresada == (cuestionario[index].respuestaOk)) {
        return true;
    } else {
        return false;
    }
}