/*Al pulsar el botón del ejercicio anterior, 
inyectar en un contenedor div (localizado justo 
antes del botón), una imagen pequeña*/

const buttonClickMe = document.querySelector('#click_me');
const divElement = document.querySelector('#div')

function addImage () {
    const newImage = document.createElement('img');
    newImage.src = 'ganador.JPG';
    divElement.appendChild(newImage);
}
buttonClickMe.addEventListener("click", addImage)