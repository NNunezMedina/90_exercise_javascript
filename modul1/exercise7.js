/*crear un documento HTML con dos 
contenedores div.
❖ Cada contenedor tendrá un título y un botón. 
❖ Por defecto, el primer div estará visible y el 
segundo oculto. 
❖ Al pulsar el botón del primer div, se ocultará este 
contenedor y mostrará el segundo. 
❖ Al pulsar el botón del segundo div, se realizará el 
proceso inverso. */

const firstButton = document.querySelector('#first_button');
const firstTitle = document.querySelector('#first_title');
const firstDiv = document.querySelector('#first_div');
const secondButton = document.querySelector('#second_button');
const secondTitle = document.querySelector('#second_title');
const secondDiv = document.querySelector('#second_div')
firstButton.innerHTML= "First Button"
firstTitle.innerHTML="First title"
const valueClickFirstButton = firstButton.value
const valueClickSecondButton = secondButton.value

firstButton.addEventListener("click", () => {
    if(valueClickFirstButton === 'option1') {
        //     firstDiv.classList.remove('appear');
        //     firstDiv.classList.add('disapear');
        //     secondButton.innerHTML = "Second Button"
        //     secondTitle.innerHTML="Second title"
        //     secondButton.classList.remove('disapear');
        //     secondButton.classList.add('appear');
    }
})

// firstButton.addEventListener("click", () => {
// });

// secondButton.addEventListener("click", () => {
//     secondDiv.classList.remove('appear')
//     secondDiv.classList.add('disapear')
//     firstDiv.classList.remove('disapear')
//     firstDiv.classList.add('appear')
// })