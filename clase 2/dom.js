
                        //FORMAS DE PEGARLE A UN NODO 

    
    
        /* getElementById */


/* let div     = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML);
console.log(parrafo.innerHTML);
 */



            //getElementsByClassName

/* let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);
 trae todas las clases que tenga ese nombre y te arma un array*/


            //getElementsByTagName

/* let contenedores = document.getElementsByTagName("div");
console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);
console.log(contenedores[2].innerHTML);
 */




                            //EJEMPLO INNERTEXT

/* const parrafo = document.getElementById("miParrafo");
const texto = parrafo.innerText; // obtiene el texto dentro del párrafo
console.log(texto); // imprime "Este es un párrafo de ejemplo."



parrafo.innerText = "Este es un párrafo modificado con JavaScript.";  */



                        //APPENDCHILD()        =>FILMINA 36

/* // se Crea un nodo de tipo Elemento, en este caso la etiqueta p
let parrafo = document.createElement("p");
// se Inserta HTML interno
parrafo.innerHTML = "<h2>¡Hola Coder!</h2>"; 
// Añadir el nodo Element como hijo de body
document.body.appendchild(parrafo);
 */



                        //REMOVE
/* 
document.getElementById("p");
//Elminando el propio elemento
parrafo.remove(); */


            //Tambien podemos borrar valores especificos


/* document.getElementsByClassName("paises");
//Eliminando el primer elemento de clase paises
paises[0].remove() */


                        //Plantillas Literales


/* let producto = { id: 1,  nombre: "Arroz", precio: 125 };

let plantilla   = `ID: ${producto.id} - Producto ${producto.nombre} $ ${producto.precio}`;
//se puede concatenar pero la construcción de la plantilla es màs sencilla
console.log(plantilla); */



/* let productos   = { id: 1,  nombre: "Arroz", precio: 125};
let contenedor = document.createElement("div");
//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                        <p>  Producto: ${producto.nombre}</p>
                        <b> $ ${producto.precio}</b>`;
//Agregamos el contenedor creado al body
document.body.appendChild(contenedor); */



//lo mismo pero con mas productos y un for of


/* const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100},];

for (const producto of productos) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
}
 */





                        //QUERY SELECTOR
//es como el getElement por clase o por id, pero aca usamos la nomenclatura del css
                        
/*  let parrafo = document.querySelector("#contenedor p")
// seleccionar sólo el contenedor por id con #
let contenedor = document.querySelector("#contenedor")

// o por clase:
parrafo = document.querySelector(".texto")                        */

/* let div     = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML);
console.log(parrafo.innerHTML); */