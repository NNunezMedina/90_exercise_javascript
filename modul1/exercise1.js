/*crear una pequeña página con un botón 
que, al pulsarlo, haga aparecer una alerta con un "Hello World"*/

const buttonClickMe = document.querySelector('#click_me');

function showAlert() {
   alert("Hello World");
}

buttonClickMe.addEventListener("click",showAlert);