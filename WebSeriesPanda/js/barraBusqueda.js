/*CLASE Series*/
class Series{
    constructor(titulo, imagen, descripcion, id){
        this.titulo=titulo;
        this.imagen =imagen;
        this.descripcion=descripcion;
        this.id=id;
    }

    getData(){
        return this.titulo + " " + this.imagen + " " +  this.descripcion + " "
    }
}

//ARRAY DE LAS SERIES
var arraySeries = new Array();
const JDT = new Series("Juego de tronos", "../css/juegoDeTronos.jpg", "Nueve familias luchan por el control de las tierras de Poniente, mientras que un antiguo enemigo regresa después de estar inactivo durante milenios", "serie0");
const BB = new Series("Breaking bad", "../css/breakingBad.jpg", "Un profesor de química de la escuela secundaria diagnosticado con cáncer de pulmón inoperable se dedica a fabricar y vender metanfetamina para asegurar el futuro de su familia.", "serie1");
const SP = new Series("Snowpiercer", "../css/Snowpiercer.jpg", "Siete años después de que el mundo se haya convertido en un páramo helado, los restos de la humanidad habitan en un tren en constante movimiento", "serie2");
const TWD = new Series("The walking dead", "../css/the-walking-dead-city-i15032.jpg", "Rick Grimes se despierta de un coma para descubrir que el mundo está en ruinas y que está repleto de zombies. Debe liderar a un grupo para mantenerse con vida.", "serie3");
const SxEd= new Series("Sex Education", "../css/sexEducation.jpg", "Un adolescente con una madre terapeuta sexual se une a una compañera del instituto para establecer una clínica clandestina de terapia sexual.", "serie4");
const Vik  = new Series("Vikings", "../css/Vikingos.jpg","El brutal y misterioso mundo de Ragnar Lothbrok, un guerrero vikingo y granjero que anhela explorar las costas lejanas del océano.", "serie5" );
const You = new Series("You", "../css/you.jpg", "Una historia de amor del siglo XXI sobre un obsesivo, pero brillante encargardo de una libreria, que hace todo lo posible por enamorar a la chica de sus sueños", "serie6" );
const The100= new Series("The 100", "../css/the100.jpg","Un apocalipsis nuclear destruye la vida humana en la Tierra. Los únicos supervivientes son los habitantes de las estaciones espaciales internacionales. La escasez de recursos los obliga a tomar medidas desesperadas.", "serie7");
const RYM = new Series("Rick and Morty", "../css/rickYMorty.jpg", "Rick, un científico alcohólico, secuestra a su influenciable nieto, Morty, para vivir peligrosas aventuras a través de nuestro cosmos y universos paralelos.", "serie8");

arraySeries.push(JDT, BB, SP, TWD, SxEd, Vik, You, The100, RYM);

//Funcion para el boton de la barra de busqueda
function buscar() {
    //Obtener la info del input
    input = document.getElementById("buscar").value;
    input = input.toLowerCase();

    //querySelector() Devuelve el primer elemento del documento
    const gridOriginal = document.querySelector("#catalogo");
    const gridBusqueda = document.querySelector("#catalogobusqueda");

    //Doy estilo a cada uno de los grid de la pagina principal para superponer el grid de busqueda
    gridOriginal.style.display = "none";
    gridBusqueda.style.display = "grid";
    gridBusqueda.innerHTML = "";

    //Rellenar cada espacio (div) del grid
    for (var i = 0; i < arraySeries.length; i++) {
        let serieTitulo = arraySeries[i].titulo;
        //Filtramos por titulo
        if (serieTitulo.toLowerCase().includes(input)) {
            //Creo los elementos del HTML
            const grid = document.querySelector("#catalogobusqueda");
            const div = document.createElement("div");
            const divimg = document.createElement("div");
            const divpar = document.createElement("div");
            const par = document.createElement("p");
            const img = document.createElement("img");
            const btn = document.createElement("button");

            //Añadir los elementos del HTML con la estructura correspondiente, por orden
            //ApendChild() inserta un nuevo nodo dentro del html
            divimg.appendChild(img);
            divpar.appendChild(par);
            div.appendChild(divimg);
            div.appendChild(divpar);
            div.appendChild(btn);
            grid.appendChild(div);

            //Modificar los atributos de las etiquetas creadas
            if(input !=""){
                div.className = "tarjetas";
                divimg.className = "contenedorImg";
                divpar.className = "descripcion";
                btn.className = "btnFavs";
                btn.id = arraySeries[i].id; //Al id del boton le doy el mismo id que tiene cada serie
                btn.innerHTML = "Fav";
                 //lo mismo que arriba con id pero creando variables
                var rutaImagen = arraySeries[i].imagen;
                var descrip = arraySeries[i].descripcion;
                img.src = rutaImagen;
                par.innerHTML = descrip;
            }

        }
    }
}


if(localStorage.getItem("favs") == null){
localStorage.setItem("favs", JSON.stringify([]));
}

//FUNCION FAVS EN CATALOGO BUSQUEDA
var flag = JSON.parse(localStorage.getItem("flag"));
var miArrayUsu = JSON.parse(localStorage.getItem("users"));
var catalogo = document.querySelector("#catalogobusqueda");
var arrayFavs = localStorage.getItem("favs"); //creamos un nuevo localStorage para guardar las series fav
var flagRepe = false;

catalogo.addEventListener("click", evento => { //COMO SOLO HAY UN PARÁMETRO, SE PUEDEN QUITAR LOS PARENTESIS QUE RODEARÍAN A "evento"
    // console.log(evento.target.id); //CON ESTO, TODOS LOS BUTTONS DENTRO DE SECTION TIENEN EVENT LISTENER
    if (evento.target.tagName == "BUTTON") { 
        for(var i=0; i<arraySeries.length; i++){
            //Guardamos en una variable el id asociado a cualquiera que sea el boton(evento.target) que hayamos pulsado
            let idbtn = evento.target.id; 

            if ((arraySeries[i].id) == idbtn) {
                
                for (var x = 0; x < (flag.favs).length; x++) {
                    if(flag.favs[x].titulo == arraySeries[i].titulo) {
                        flagRepe = true;
                    } 
                }

                if (!flagRepe) { // Si flag está FALSE
                        var arrayFavsLogged = flag.favs;
                        arrayFavsLogged.push(arraySeries[i]);

                        for (var j = 0; j<miArrayUsu.length; j++){

                            if(miArrayUsu[j].name == flag.name) {

                                (miArrayUsu[j].favs).push(arraySeries[i]);
                            }
                        }
                }else {
                    alert("Ya has guardado esta serie como favorita");
                }

                
                localStorage.setItem("favs", JSON.stringify(arrayFavsLogged)); //te añade al localStorage el arrayFavs
                localStorage.setItem("flag", JSON.stringify(flag));
            }
        }
        localStorage.setItem("users", JSON.stringify(miArrayUsu));

    }
});




//GUARDAR EN FAVORITOS
var arrayFavs = JSON.parse(localStorage.getItem("favs")); 
var tutu = document.getElementById("favoritos");

tutu.addEventListener("click", () =>{
    var divFav = document.getElementById("catalogoFavs");

    var catalogo = document.querySelector("#catalogo");
    catalogo.style.display="none";
    arrayFavs.forEach(e => {

        var div=`
        <div class="tarjetas">
        <div class="contenedorImg">
            <img src="${e.imagen}" id="${e.id}" alt="${e.titulo}" height="547">
          </a>
        </div>
        <div class="${e.descripcion}">
          <p id="${e.id}">"${e.descripcion}"</p>
        </div>
      </div>`;

        divFav.innerHTML+=div;
        
    });
})


    