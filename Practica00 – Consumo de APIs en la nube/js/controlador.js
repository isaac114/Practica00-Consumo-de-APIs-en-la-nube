

var nombreLibro;
var IDS = 0;


function libro(serie){
    console.log("DATOS-----LIBRO");
    let url =  'https://www.etnassoft.com/api/v1/get/?id='+serie;
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    api.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            let datos = JSON.parse(this.responseText);
            console.log();
            let resultado =  document.querySelector('#resultadoLibro');
            resultado.innerHTML = "";
            c = "";
            for (var item=0; item<datos.length;item++){
                cover = datos[item].cover;
                id = datos[item].ID;
                titulo = datos[item].title;
                autor = datos[item].author
                imagen = "<img src=\""+cover+"\" class=\"img-thumbnail\">";
                c = imagen;                
            }
            resultado.innerHTML = c;
             
        }       
        console.log(IDS);
    }
}



var limite = 10;
var contador = 0;
function obtenerDatos(nombreLibro){
    console.log("OBTENER------DATOS-------");
    let url =  "https://www.etnassoft.com/api/v1/get/?category="+nombreLibro+"&results_range="+limite+","+10;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function(){

        if(this.status == 200 && this.readyState == 4){
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let resultado =  document.querySelector('#resultado');
            resultado.innerHTML = "";
            //table table-striped table-dark table-hover
            cadena = "<table class=\"tabla table   \" style=\"color:#ffffff;\">"+ 
                    "<thead>"+
                    "<tr>"+
                    "<td class=\"font-weight-bold\" scope=\"col\">ID</td>"+
                    "<td class=\"font-weight-bold\" scope=\"col\">Nombre del Libro</td>"+
                    "<td class=\"font-weight-bold\" scope=\"col\">Autor del Libro</td>"+
                    "</tr>"+
                    "</thead>"
            c = "";
            for (var item=0; item<datos.length;item++){
                id = datos[item].ID;
                titulo = datos[item].title;
                autor = datos[item].author;
                imagen = datos[item].cover;
                lenguaje = datos[item].language;
                descarga = datos[item].url_download;
                paginas = datos[item].pages;
                editorial = datos[item].publisher;
                console.log("Hasta aqui");
                
                c = c
                 +"<tr>"
                 +"<th scope=\"row\">"+"<a onclick=\"nuevo(\'"+id+"\',\'"+autor+"\',\'"+imagen+"\',\'"+lenguaje+"\',\'"
                 +titulo+"\',\'"+descarga+"\',\'"+paginas+"\',\'"+editorial+"\')\">"+id+"</a>"+"</th>"
                 +"<td>"+titulo+"</td>"
                 +"<td>"+autor+"</td>"
                +"</tr>";                 
            }
            resultado.innerHTML = cadena+c+ "</table>";
            console.log(resultado.innerHTML);
        }       
    }
}


function PaginarMas(){

    nombreLibro=document.getElementById("nombre").value;
    
    if(nombreLibro != ""){
        obtenerDatos(nombreLibro);
        console.log(contador+"=="+limite);
        limite = limite + 10;
        
        
    }else{
        console.log("Por Favor Ingrese un nombre");
    }
    
}

function PaginarMenos(){
    nombreLibro=document.getElementById("nombre").value;
    limite = limite - 10;
    obtenerDatos(nombreLibro);
    console.log(contador+"=="+limite);
}


function llamar(){
    nombreLibro=document.getElementById("nombre").value;
    console.log("entraaaaaaaa");
    if(nombreLibro != ""){
        limite = 10;
        console.log("Entra"+limite);
        PaginarMas();
        
        
    }else{
        console.log("Por Favor Ingrese un nombre");
    }
    
}

function nuevo(id, autor, imagen, lenguaje, titulo, descarga, paginas, editorial){
    console.log(id+"-"+autor);
    cadena = "?ID="+id+"&AUTOR="+autor+"&IMAGEN="+imagen+"&TITULO="+titulo+"&DESCARGA="+descarga+
              "&PAGINAS="+paginas+"&EDITPRIAL="+editorial+"&LENGUAJE="+lenguaje;
    console.log(cadena);
    window.open("../php/datos.php"+cadena , "_blank" );

}

