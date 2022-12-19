addEventListener(`DOMContentLoaded`, (e)=>{

    // FOR...IN
    //la instrucion se repite sobre todas las propiedades de un objeto que este codificado por cadena
    //for (variable in objeto) instrucción
    
    for (variable in objeto){
    instrucción }
    //la variable es la asignacion de un nombre a la propiedad diferntes a la variable
    // el objeto cuyas propiedas enumerables no son simbolos 


    // Imprimir las propiedades de un objeto en la consola
    var obj = {a: 1, b: 2, c: 3};

    for (const prop in obj) {
      console.log(`obj.${prop} = ${obj[prop]}`);
    }
 
    // Modificar las propiedades de un objeto
    var obj = {a: 1, b: 2, c: 3};
    for (const variable in obj) {
    obj[variable] = obj[variable] * 2;
    }
    console.log(obj); 
   //En general, es mejor no agregar, modificar o eliminar propiedades del objeto durante la iteración, 
   //aparte de la propiedad que se está visitando actualmente. No hay garantía de si se visitará una propiedad agregada



})