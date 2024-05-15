/*crear un pequeño formulario HTML 
con los siguientes elementos:
❖ Un título.
❖ Un campo para introducir un número.
❖ Un botón de enviar.
❖ Al pulsar el botón, se mostrará una alerta con el 
valor del número introducido, incrementado en 
una unidad.*/
const button = document.getElementById('button')

function showAlert(event) {
    event.preventDefault();
    const input = document.getElementById('form_number');
    let inputValue = parseInt(input.value.trim());
    if(isNaN(inputValue)) {
        alert ("Put a valid number");
    } else {
        inputValue++;
        alert(inputValue);
    }
}

button.addEventListener("click",showAlert);