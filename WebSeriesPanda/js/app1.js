//stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
//setItem() Almacena en el localStorage

//Si usuarios registrados esta a null, me lo creas
if(localStorage.getItem("users") == null){
    localStorage.setItem("users", JSON.stringify([])); //Almacena users como un array en el localStorage
}

if(localStorage.getItem("flag")==null){
   localStorage.setItem("flag", JSON.stringify(null)); //Almacena flag como null al empezar en el localStorage
}


// Función que está en el "Usuario" del nav, cuando se pulse "Usuario", si no estás logueado te lleva a IniciarSesion
// Si está registrado te lleva a modificar tus datos de usuario
function logged(){
    var loggeado = JSON.parse(localStorage.getItem("flag")); //lee flag como un array y luego lo convierte en un objeto JSON

    if(loggeado != null){ 
        // alert("HAS INICIADO SESIÓN CON ÉXITO");
        window.open("../html/modificarDatos.html", "_self");
    }

    else{
        window.open("../html/paginaUsuario.html", "_self");
    }

}
