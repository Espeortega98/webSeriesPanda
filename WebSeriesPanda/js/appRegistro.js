/*CLASE USUARIO*/
class Usuario{
    constructor(name, apellidos, email, password, phone, date){
        this.id=parseInt(Math.random()*100001);
        this.name=name;
        this.apellidos=apellidos;
        this.email=email;
        this.password=password;
        this.phone=phone;
        this.date=date;
        this.favs = []; //Array para guardar las series Favoritas de cada usuario
    }

    getData(){
        return this.name + " " + this.apellidos + " " +  this.email + " " + this.password + " " + this.phone + " " + this.date
    }
}

//FUNCION DE REGISTRO
function registro(){
    /*VARIABLES DEL REGISTRO*/
    var name = document.getElementById("name").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;

    var flagRepe=false;
    
    // //Guarda en miArrayUsu un objeto JSON de users(usuarios registrados)
    var miArrayUsu = JSON.parse(localStorage.getItem("users")); 

    //Si el array de usuariosRegistrados está vacio, guardar 1ºvez
    if(miArrayUsu == ""){
        miArrayUsu.push(new Usuario(name, apellidos, email, password, phone, date));
        localStorage.setItem("users", JSON.stringify(miArrayUsu)); //Almacena users como un array en el localStorage
        alert("Usuario añadido correctamente");
        window.open("../html/paginaUsuario.html", "_self");
    }

    //SI NO ESTÁ VACIO
    else{
        alert("El array no está vacio");
        for(var i=0; i<miArrayUsu.length; i++){
            
            if(miArrayUsu[i].email == email || email == "" || name == "" || apellidos == "" || password=="" ||
                phone== "" || date==""){
                flagRepe=true;
        }
        
    }
    //SI FLAGREPE TRUE
    if(flagRepe){
        alert("EL USUARIO NO SE HA REGISTRADO CORRECTAMENTE");
    }
    else{
                miArrayUsu.push(new Usuario(name, apellidos, email, password, phone, date));
                localStorage.setItem("users", JSON.stringify(miArrayUsu)); //Almacena users como un array en el localStorage
                alert("USUARIO AÑADIDO");
                window.open("../html/paginaUsuario.html", "_self");
         }
    }
}