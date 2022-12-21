addEventListener(`DOMContentLoaded`, (e)=>{
    document.querySelector("body").innerHTML = " Abrir consola con f12"
    
    //forEach
   //El metodo forEach() llama a una  función callback específica una vez por cada elemento 
   //sobre el que itera dentro de un arreglo
    let numeros = [3, 6, 8, 10, 12]
    let impar = 3;
    
    //El método forEach no regresa un nuevo arreglo al igual que lo hacen otros iteradores tal como
    //map . En cambio, el método devuelve el valor  undefined por sí solo. Por lo tanto
    // no se puede encadenar como los otros métodos

    numeros.forEach(function(numero) {
        if (numero === impar) {
            numeros.shift() 
        }
    })

    console.log(numeros);

})