/*Modificar la última tarea para realizarla 
mediante una función llamada mostrarMensajes
contenida en un fichero js externo.*/

function mostrarMensajes() {
    console.log("Hola Nathaly");
    console.info("Este es un mensaje de informacion");
    throw new Error("Este es un mensaje de error");
}

document.addEventListener("DOMContentLoaded",()=>{
    const buttonClickMe = document.querySelector('#click_me');
    buttonClickMe.addEventListener("click", mostrarMensajes);
})