const ingresoUsuarios = () => {
    const nombre = prompt("ingrese su nombre");
    const apellido = prompt("ingrese su apellido");
    const edad = Number(prompt("ingrese su edad"));

    alert(`Bienvenido ${ nombre + " " + apellido}  a divertirse!! `);

    return (edad)


}
ingresoUsuarios()


alert(`¿cual es el color verde ?

         opcion1
         opcion2
         opcion3`)



let respuestaCorrecta = false
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



    if (respuestaIngresada === "opcion3") {
        return true;
    } else {
        return false;
    }
}
opcionCorrecta()