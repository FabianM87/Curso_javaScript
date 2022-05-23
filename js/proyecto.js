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
        opciones: ["Color1 ", "  Color2 ", "  Color3 "],
        respuestaOk: "Color2",
    },
    {
        pregunta: "¿cual es el color rojo?",
        opciones: ["  Color1 ", "  Color2 ", "  Color3 "],
        respuestaOk: "Color3",
    },
    {
        pregunta: "¿cual es el color azul?",
        opciones: ["  Color1 ", "  Color2 ", "  Color3 "],
        respuestaOk: "Color1",
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