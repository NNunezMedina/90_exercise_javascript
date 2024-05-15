/*crear un pequeño formulario HTML con 
los siguientes elementos:
❖ Un título.
❖ Un campo para introducir el nombre.
❖ Un contenedor div sin contenido.
❖ Un botón de enviar.
❖ Al pulsar el botón, aparecerá en el contenedor div
el valor “Hola, ” y el nombre introducido en el 
campo de texto. */

const buttonSent = document.querySelector('#button');
const divElement = document.querySelector('#div')
const input = document.querySelector('#input')

function printMessage(event) {
    event.preventDefault()
    const newName = document.createElement('p');
    newName.textContent = `${input.value} es perdedor 😂`;
    divElement.appendChild(newName);
    input.value= '';
}

buttonSent.addEventListener("click", printMessage);