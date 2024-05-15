/*Al pulsar el botón del ejercicio anterior, 
hacer que se muestre por consola un mensaje de 
log, otro de información y otro de error.*/

const buttonClickMe = document.querySelector('#click_me')

function multipleMessages() {
    console.log("Hola Nathaly");
    console.info("Este es un mensaje de informacion");
    throw new Error("Este es un mensaje de error");
}

buttonClickMe.addEventListener("click", multipleMessages);