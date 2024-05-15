/*modificar el ejercicio anterior para que 
al pulsar el botón, el nombre introducido se 
muestre como título h1 en un contenedor div que 
se hará visible, ocultando el div donde está el 
formulario. 
El contenedor donde se muestra el nombre, tendrá 
además un botón para regresar al formulario.*/

const divh1 = document.querySelector('#div_h1');
const divForm = document.querySelector('#div_form');
const input = document.querySelector('#input');
const formButton = document.querySelector('#form_button');
let returnToFormButton;

function createTitle(event) {
    event.preventDefault();
    const inputValue = input.value.trim();
    if (inputValue === "" || !isNaN(inputValue)) {
        alert("Put a valid name")
        return;
    }
    const newTitle = document.createElement('h1');
    returnToFormButton = document.createElement('button');
    returnToFormButton.innerHTML = "Return to form"
    returnToFormButton.value = "valueOfReturnBottom"
    newTitle.textContent = `Hola ${inputValue}`;
    divh1.appendChild(newTitle).appendChild(returnToFormButton);
    formButton.value = "valueOfForm"; 
    if( formButton.value === "valueOfForm") {
        divForm.classList.add('disapear');
    } input.value = ""
    returnToFormButton.addEventListener("click", returnToForm)
    }

    function returnToForm() {
        divh1.innerHTML="";
        divForm.classList.remove('disapear');
        divForm.classList.add('appear')
    }

formButton.addEventListener("click", createTitle);