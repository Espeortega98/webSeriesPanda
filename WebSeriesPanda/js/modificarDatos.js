//Cuando carga la pagina llama a la funcion modificarDatos para que se carguen automaticamente
window.onload = modificarDatos;


//Funcion que carga los datos del usuario nada mas cargar la pagina
function modificarDatos(){
    var loggeado = JSON.parse(localStorage.getItem("flag"));  //Variable que guarda los datos una vez iniciada sesion

    //Rellena el modificarDatos con los datos del usuario loggueado
    document.getElementById("nameMd").value = loggeado.name;
    document.getElementById("apellidosMd").value = loggeado.apellidos;
    document.getElementById("emailMd").value = loggeado.email;
    document.getElementById("passwordMd").value = loggeado.password;
    document.getElementById("phoneMd").value = loggeado.phone;
    document.getElementById("dateMd").value = loggeado.date;
}


//Funcion de cerrar sesión
  function cerrarSesion(){
    localStorage.removeItem("flag"); //  para borrar FLAG y los datos guardados y asi cerrar sesion
    localStorage.removeItem("favs"); 
    window.open("../html/paginaUsuario.html", "_self"); 


}


//Funcion que se acciona cuando le das al boton Modificar datos
function modificarDatosBoton(){
    var loggeado = JSON.parse(localStorage.getItem("flag"));
    var miArrayUsu = JSON.parse(localStorage.getItem("users"));
     
    for(var i=0; i<miArrayUsu.length; i++){
        //Si el id del usuario logueado es igual al de un usuario registrado, se cambian los datos de ese usuario
        if(loggeado.id == miArrayUsu[i].id) {
            //Enviar los nuevos datos
            loggeado.name = document.getElementById("nameMd").value ;
            loggeado.apellidos = document.getElementById("apellidosMd").value;
            loggeado.email = document.getElementById("emailMd").value;
            loggeado.password = document.getElementById("passwordMd").value;
            loggeado.phone = document.getElementById("phoneMd").value;
            loggeado.date = document.getElementById("dateMd").value;
            
            miArrayUsu[i]=loggeado; //mi posicion del array va a ser igual al nuevo loggeado
            localStorage.setItem("flag", JSON.stringify(loggeado)); //Almacena en flag lo que hemos actualizado en loggeado
            localStorage.setItem("users", JSON.stringify(miArrayUsu)); //Almacena en users lo que hemos actualizado en miArrayUsu
        }
    }

}