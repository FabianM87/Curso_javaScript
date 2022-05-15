const ingresoUsuarios = () => {
    const nombre = prompt("ingrese su nombre");
    const apellido = prompt("ingrese su apellido");
    const edad = Number(prompt("ingrese su edad"));

    alert(`Bienvenido ${ nombre + " " + apellido}  a divertirse!! `);

    return (edad)


}
ingresoUsuarios()

const cuestionario = [{
        pregunta: "¿cual es el color verde?",
        opciones: [" opcion Color1 ", " opcion Color2 ", " opcion Color3 "],
        respuestaOk: "opcion Color2",
    },
    {
        pregunta: "¿cual es el color rojo?",
        opciones: [" opcion Color1 ", " opcion Color2 ", " opcion Color3 "],
        respuestaOk: "opcion Color3",
    },
    {
        pregunta: "¿cual es el color azul?",
        opciones: [" opcion Color1 ", " opcion Color2 ", " opcion Color3 "],
        respuestaOk: "opcion Color1",
    },
];
alert(cuestionario[0].pregunta)
alert(cuestionario[0].opciones)


respuestaCorrecta = false
while (respuestaCorrecta !== true) {
    let respuestaIngresada = prompt("ingrese su respuesta")
    let respuesta = opcionCorrecta(respuestaIngresada)

    if (respuesta) {
        alert("excelente, sigamos con la proxima pregunta")

        respuestaCorrecta = true;

    } else {
        alert("estuviste cerca, vuelve a intentarlo")
    }
}

function opcionCorrecta(respuestaIngresada) {



    if (respuestaIngresada == (cuestionario[0].respuestaOk)) {
        return true;
    } else {
        return false;
    }
}