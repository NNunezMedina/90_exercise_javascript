/*Al pulsar el botón del ejercicio anterior, 
hacer que cambie el contenido HTML del 
documento y muestre, en negrita y cursiva, el texto 
botón pulsado*/

const buttonClickMe = document.querySelector('#click_me')

function changeText() {
    buttonClickMe.innerHTML = "Hola"
    buttonClickMe.style.fontFamily = "cursive"
    buttonClickMe.style.fontWeight = "bold"
}

buttonClickMe.addEventListener("click", changeText);