
//OBJETOS LITERALES


const empleado1={
    nombre: "javier",
    cargo: "profesor",
    ingreso : "2021-03-25",   // formato ISO, formato internacional.  (como en el imput date tipe de html)
    edad : 15,
}

const empleado2={
    nombre: "javier",
    cargo: "profesor",
    ingreso : "2021-03-25", 
    edad : 15,
}

                console.log(empleado1.nombre.length)
                console.log(empleado1.length)  //tira undefined, necesito especificar a que le estoy pegando


//problema de limitacion en los años 2000

                    const empleado3 = empleado1

//hago una copia de empleado 1, pero si le cambio algo al 3, cambia en el 1




//OBJETO CONSTRUCTOR o tambien conocido como FUNCIONES CONSTRUCTORAS

/*                 function Producto (id, nombre, importe, stock){  //primera inicial con mayuscula para diferenciar
                    this.id = id
                    this.nombre = nombre
                    this.importe = importe
                    this.stock = stock
                } */

/* La palabra "this" en JavaScript se utiliza para hacer referencia al objeto actual en el que se está trabajando. 
El valor de "this" cambia dependiendo de cómo se llama a la función o el contexto en el que se está utilizando.
 */


/*              const producto1 = new Producto (1, "teclado", 1500, 50)
                const producto2 = new Producto (1, "mouse", 800, 20)
                const producto3 = new Producto (1, "monitor", 40000, 10) */



function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
      
    }
  }
  
  const persona1 = new Persona("Juan", 30);
  const persona2 = new Persona("Maria", 25);
  

  persona1.saludar(); // Imprime "Hola, mi nombre es Juan y tengo 30 años."
  persona2.saludar(); // Imprime "Hola, mi nombre es Maria y tengo 25 años."




                                    //METODOS Y OPERACIONES CON OBJETOS

        IVA = 1.21

        /* function Producto (id, nombre, importe, stock){  //primera inicial con mayuscula para diferenciar
        this.id = id
        this.nombre = nombre
        this.importe = importe
        this.stock = stock
        //defino un metodo
        this.importeConIva= function(){  //creo una funcion anonima
            return this.importe * IVA   //retorno el valor del importe, multiplicado por el iva
        }

        this.ajustarStock = function(unidadesVendidas){   //funcion anonima con parametro unidadesVendidas
            //valido si es de tipo numero, si el stock es mayor a lo vendido, si lo vendido es mayor a 0
            if(typeof unidadesVendidas ==="number" && this.stock >= unidadesVendidas && this.stock > 0 ){

                return this.stock = this.stock - parseInt(unidadesVendidas)   //retorno el valor de la funcion unidadesVendidas
            }else{
                console.error("error al descontar unidades", unidadesVendidas) //si se descuenta mas del stock
            }
            

        }
    
    }
// console.log(producto1.importeConIva())  si lo pongo aca no funciona, porque todavia no se leyo el producto1

const producto1 = new Producto (1, "teclado", 1500, 50)
const producto2 = new Producto (1, "mouse", 800, 20)
const producto3 = new Producto (1, "monitor", 40000, 10)

console.log(producto1.importeConIva())
 */



                                //CLASES



/* 
una función constructora y una clase son dos formas diferentes de crear objetos y organizar el código. 
las dos hacen practicamente lo mismo, peeeeero existen algunas diferencias clave entre las dos.

En la función constructora basicamente es una función normal que se usa para crear nuevos objetos. 
Se usa con la palabra clave "new" como hicimos antes para instanciar objetos basados en un prototipo común.
cual es el prototipo? bueno lo que nosotros definamos en los parametros...


y Por otro lado, una clase es una forma más moderna e intuitiva de definir objetos. 
vamos a ver que la sintaxis es diferente, pero en realidad, las clases tambien se basan en prototipos.


Entonces, la principal diferencia entre una función constructora y una clase es la sintaxis 
que se usa para definir y crear los objetos. Las funciones constructoras son más viejas y 
tenemos que usar la palabra clave new, mientras que las clases son más modernas y fáciles de leer 
cual se usa? la que quieras, es por comodidad del programador, hay empresas con codigo viejo
y startup que usan todo lo nuevo. lo importante es conocer ambas...
*/






//ARRAY

/*
            
     Para declarar un array en JavaScript, se usan los corchetes. 
     Por ejemplo, para crear un array con tres elementos, se puede escribir asi: */

           /*  let miArray = [1, "dos", true]; */


           const frutas= ["manzana", "pera", "banana", "sandia"]
           //indice:      0         1        2         3

           


/* Para acceder a los elementos de un array, se usa el índice del elemento dentro de los corchetes.
Por ejemplo, para acceder al segundo elemento del array que creamos aca, se puede escribir: */

          /*  console.log(frutas[0])  //me tira la manzana
           console.log(frutas[2])  //me tira la banana*/

           //y para asignar ese valor a una variable, seria:

//let frutaPreferida = frutas[1]; // en este caso tira "pera" */



                                        //EJEMPLO FACIL DE SUMA CON ARRAY

        /*  const  numeros = [1,2,3,4,5];
            console.log( "indice numero 0: " + numeros[0] ) // 1; 
            console.log( "indice numero 3: " + numeros[3] ) // 4; 
            let resultado  = numeros[1] + numeros[2] 
            console.log( resultado  ) // 5; */

             //SE ACUERDAN DEL BUCLE FOR?        FILMINA 11



/* el bucle for se puede usar tranquilamente para poder RECORRER un array.
que signifa recorrer una array? que podemos acceder a cada uno de los elementos por separado.*/


                        /* const numeros = [1, 2, 3, 4, 5];
                        for (let i = 0; i < 5; i++) {   que me deberia mostar aca? hasta que numero?
                            console.log(numeros[i]);
                        }
                        */


                        
                    /* Los métodos de array, son funciones integradas (nativas)que se usan 
                    para trabajar de manera mas facil. los mas conocidos son:

                                            ---LENGTH---

                    length(): cuenta la cantidad de propiedades que hay en el array
                            
                                const miArray = ["marca", 3 ,"palabra"];
                                console.log( miArray.length ); //imprime 3
                    
                    este es muy importante porque nos sirve para que se recorra todo el array
                    sin tener que especificar hasta Donde, por ejemplo:
                    
                                const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

                                for (let i= 0; i < numeros.length; i++) {
                                    alert(numeros[i]);
                                } */

                    


                     /*                        ---PUSH---

                    push(): Agrega uno o más elementos al final del array.



                                const frutas = ["manzana", "banana", "naranja"];
                                frutas.push('otro elemento')
                                
                                console.log(frutas.length) // ⇒ 4
                                console.log(frutas) //["marca", 3, "palabra", “otro elemento”] */
                    







                                      /*           --POP--

                    pop(): Elimina el último elemento del array.




                                let frutas = ["manzana", "banana", "naranja"];
                                let ultimoElemento = frutas.pop();

                                console.log(frutas);  // ["manzana", "banana"]
                                console.log(ultimoElemento);  // "naranja"

                     


                                                --SHIFT--

                    shift(): Elimina el primer elemento del array.
                                
                                frutas.shift();
                                console.log(frutas); // ["banana", "naranja"]



                                                --UNSHIFT--


                    unshift(): Agrega uno o más elementos al inicio del array.
                                
                                frutas.unshift('kiwi');
                                console.log(frutas); // ["kiwi", "banana", "naranja"]



                                                --SLICE--


                    slice(): Retorna una copia de parte del array. parametros (desde,hasta)
                                
                                const copia = frutas.slice(0, 2);
                                console.log(copia); // ["kiwi", "banana"]




                                                --SPLICE--



                    splice(): Cambia el contenido del array eliminando elementos y reemplazandolos.
                                
                            '



                    concat(): Une dos o más arrays.
                                
                                const perros = ['puqui', 'negrito','manchita'];
                                const gatos = ['mishi', 'garfield', 'salem']
                                const mascotas = perros.concat(gatos);
                                console.log(mascotas); // aparecen todos los perros y gatos





                                                --JOIN--

                    join(): Une todos los elementos de un array en una cadena.
                               
    º                            const cadena = frutas.join(', ');
                                console.log(cadena); // "kiwi, mango, sandía, banana, naranja"





                                                --INDEXOF--



                    indexOf(): Retorna la posición de un elemento específico en el array.
                                si el elemento no existe, retorna -1
                                
                                 const posicion = frutas.indexOf('banana');
                                console.log(posicion); // 1
 


                                                --INCLUDES--


                    includes(): el método includes me permite saber si un elemento que recibo por parámetro 
                    existe o no dentro de un array, retornando un valor booleano en caso afirmativo o negativo:



                                const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

                                console.log( nombres.includes('Rita') ) // ⇒ true
                                console.log( nombres.includes('Miguel') ) // ⇒ true
                                console.log( nombres.includes('Julieta') ) // ⇒ false



                    
                    Estos son solo algunos de los métodos de array disponibles en JavaScript. 
                   

 */
