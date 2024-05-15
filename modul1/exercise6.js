/*Añadir un nuevo botón al ejercicio 
anterior, que al pulsarlo cambie la imagen. */

const buttonClickMe = document.querySelector('#click_me');
const divElement = document.querySelector('#div')
const buttonChangeImage = document.querySelector('#click_change_image');
const newImage = document.createElement('img');
newImage.src = 'ganador.JPG';

function addImage () {
    divElement.appendChild(newImage);
}
buttonClickMe.addEventListener("click", addImage)

function changeImage() {
    const changedImage = document.createElement('img');
    changedImage.src = 'gato.jpeg'
    changedImage.width = 300;
    newImage.remove();
    divElement.appendChild(changedImage)
}

buttonChangeImage.addEventListener("click", changeImage)