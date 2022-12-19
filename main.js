addEventListener(`DOMContentLoaded`, (e)=>{

   //FOR...OF
    // ejecuta un bloque de codigo para cada elemento de un objeto iterable
 
    for (variable of iterable) {
        statement
      }
    //variable corresponde al valor asignado
    //iterable objeto cuyas propiedades enumerables son repetidas
    //ejemplos

    //Iterando un Array

    let iterable= [10, 20, 30];

    for (let value of iterable) { // en vez de let utlizar const si no se va a modificar la variable 
      value += 1;
      console.log(value);
    }
    
    //Iterando un String

    let iterable1 = "boo";

    for (let value of iterable) {
    console.log(value);
    }

    //Iterando un TypedArray
    let iterable2 = new Uint8Array([0x00, 0xff]);

    for (let value of iterable) {
     console.log(value);
    }

    //Iterando un Set

    let iterable3 = new Set([1, 1, 2, 2, 3, 3]);

    for (let value of iterable) {
     console.log(value);
    }

    //Iterando un objeto

    (function() {
        for (let argument of arguments) {
          console.log(argument);
        }
      })(1, 2, 3);

    //Hay muchos mas ejemplos sobre defernetes tipos esos son los mas principales

    //la diferencia sobre for..in itera sobre cualquier propiedad de un onjeto
    //for..of es especifica para colecciones y no para los onjetos 


})