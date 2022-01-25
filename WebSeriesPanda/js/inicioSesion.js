
function login(){
    /*VARIABLES DEL LOGIN*/
    var emailLogin = document.getElementById("emailLogin").value;
    var passwordLogin = document.getElementById("passwordLogin").value;
    //Asigno el elemento "users" a una varible mi ArrayUsu y Transforma la variable con el contenido a un objeto JSON
    var miArrayUsu = JSON.parse(localStorage.getItem("users"));
    var loggeado = JSON.parse(localStorage.getItem("flag"));  //Variable que guarda los datos una vez iniciada sesion


    for(var i = 0; i< miArrayUsu.length; i++){
        //Comprueba que sean iguales
        if(emailLogin === miArrayUsu[i].email && passwordLogin ===  miArrayUsu[i].password){ 
            //añado miArrayUsu[i] al elemento flag(que seá el usuario que está registrado en esa sesion)
            loggeado = localStorage.setItem("flag", JSON.stringify(miArrayUsu[i])); 
            alert("Has iniciado sesión correctamente");
            window.open("../html/index.html");
        }
    }
    //Comprueba si hay usuario logged y entonces te redirige
    if (localStorage.getItem("flag") == "null") { 
        alert("EMAIL O CONTRASEÑA INCORRECTOS");
    }
    
}