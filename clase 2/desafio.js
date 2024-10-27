/* Desafío: Manejo de Arreglos y Objetos de Hamburguesas

Imagina que tenes una cadena de hamburgueserías que ofrece una gran variedad de combos. 
Para este desafío, hay que escribir un código que trabaje con un arreglo de objetos llamado hamburguesas, 
donde cada objeto representa una hamburguesa con propiedades como nombre y precio. 

Instrucciones:

Crea el arreglo hamburguesas con al menos cinco objetos que representen distintos combos.
Implementa cada uno de los ejercicios utilizando los métodos de arreglos como filter, find, e includes.
Que el código sea limpio y funcione correctamente.
*/

const hamburguesas = [
    {nombre: "Hamburguesa Con Papas", precio: 1500},
    {nombre: "Hamburguesa Completa", precio: 1300},
    {nombre: "Hamburguesa Doble", precio: 2500},
    {nombre: "Hamburguesa Con cheddar", precio: 1200},
    {nombre: "Hamburguesa Triple", precio: 2600},
];

/* Ejercicio 1: Filtrar Combos Caros
Tenes que filtrar los combos donde el precio sea mayor a 2000 pesos y mostrar los resultados en la consola 
usando console.table(). En caso de no encontrar ningún combo que cumpla con esta condición, 
mostrar una advertencia con console.warn(). */

const precioCaro = 2000
const combosCaros = hamburguesas.filter(h => h.precio > precioCaro);

if (combosCaros.length != 0){
    console.table(combosCaros)
}
else {
    console.warn(`Ninguna hamburguesa vale más de ${precioCaro}`)
}


/* Ejercicio 2: Buscar Combo con papas
Buscar un combo que contenga la palabra 'papas' en su nombre. Si existe un combo que cumple con esta condición:

Mostra al cliente el nombre del combo con un cuadro de diálogo (alert).
Mostra el precio de ese combo en la consola.
Si no se encuentra ningún combo con papas, enviar una advertencia a la consola.
*/

const comboConPapas = hamburguesas.find(h => h.nombre.toLowerCase().includes("papas"));

if (comboConPapas){
    alert(`Combo: ${comboConPapas.nombre}`);
    console.log(`Precio del Combo con papas: ${comboConPapas.precio}`);
}
else {
    console.warn("No existen combos con papas")
}


/*
Ejercicio 3: Combos Dobles
Finalmente, filtrar los combos que incluyan la palabra 'doble' en su nombre. Los resultados deben mostrarse 
en una tabla con console.table(). 
Si no se encuentran combos con la palabra 'doble', muestra una advertencia en la consola.
*/

const combosDobles = hamburguesas.filter(h => h.nombre.toLowerCase().includes("doble"));

if (combosDobles.length != 0){
    console.table(combosDobles)
}
else {
    console.warn("No existen combos dobles")
}