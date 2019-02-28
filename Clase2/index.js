/* los objetos primitivos: string-boolean-null-undefined, este tipo de obj se pasan por referncia
    objetos: function,array-object-document mas info https://developer.mozilla.org/es/docs/Web/API
*/
 /* el contexto de una funcion en lineas generales nos vsa a dar una referencia 
    de que objeto contiene a esa funcion y esta en la palabra reserveda this. no es estatio
    y puede variar por lugar de ejecucion o desicion del programador.
    un console.dir  console.dir(persona)
    */
let a ={}
a.toSting()

function  persona(){
   
    console.log(this)
    
}
persona()