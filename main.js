addEventListener(`DOMContentLoaded`, (e)=>{

   //DO..WHILE
    // es un bucle donde se ejecuta una sentencia especifica hasta que la condicion que se comprueba sea falsa

    do
        sentencia
    while (condición);

    //una sentencia que se ejecuta al menos una ves y es reejcuatada cadavez que la condicion sea verdadera
    //condicion se evalua despues de cada paso por el bucle si la condicion es verdadera se reejecuta 

    //ejemplos 
    do {
        i += 1;
        document.write(i);
     } while (i < 5);

})