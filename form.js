const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
form.addEventListener ("submit", (event) ) => {
    event.preventDefault();
    var usuario = document.getElementById('username').value;
    if(usuario.length == 0) {
        alert('No has escrito nada en el usuarrio');
        return
    }

}

var clave = document.getElementById('password').value;
if(clave.length < 3) {
    alert('clave no es valida');
    return;
}

if (username.value === "usuario1" && password.value === "12345") {
    document.write('<center> <h1> Inicio de sesion correctamente <br> <br> Bienvenido <');
    form.reset();
} else {
    document.write('<center><h2> Usuario o contraseña incorrectos </h2> <br> <br>');
    password.value = "";
    password.focus ();
    document.write('<h3> <a href="Form.html"> Refresar </a>')
}