addEventListener(`DOMContentLoaded`, (e)=>{
    document.querySelector("body").innerHTML = " Abrir consola con f12"
    
    //map
   //es un método incorporado en los arreglos, para iterar a través de
   //los elementos dentro de una colección de arreglos
  
   //Este método toma una función callback, que se llama por cada nuevo elemento sobre el que se itera.
  //no aparecera como valor undefinido 
   let prefijos = ["super", "spider", "ant", "iron"]
    let sufijo = "man";

    let nombresCompletos = prefijos.map(prefijo => prefijo + sufijo);

    console.log(nombresCompletos);


})