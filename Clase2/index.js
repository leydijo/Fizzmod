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

function ctx(a,b){
    console.log("parametros:", a,b)
    console.log("contexto:", this)
    console.log("**************************", )
}
ctx(1,2)

//call y apply: ejecutan la funcion
ctx.call({ctx:"call"}, 10,20)
ctx.apply({ctx:"apply"},[100,200])

//BIND : retorna la definicion de la funcion
ctx.bind({ctx:"bind"},100,200)
/* New : ejecuta la funcion que tiene al lado reasignandle el contexto con un onjetp vacio. al finalizar
la ejecucion de la funcion , retorna ese objeto
*/
new ctx // si l ejecitas asi , te muestra undefined,undefined,undefined y un obj vacio

let a ={}
ctx.call(a)
return a


/*formas de ejecutar una function
ctx(1,2) //1 2window{}
ctx.call({ctx:"call"}, 10,20)
*/

function foo(a,b){
    
    console.log(a,b)
}
document.addEventListener("click",foo.bind(null,1,2))

let protipo_uno ={
    saludo:function(){}
    constructor: function fizzmod(){}
}
let instancia_uno = Object.create(protipo_uno)




// closure es un espacio reservado que esta defina dentro de otra funcion,es un spoce temporal

function externa (x){
    console.log(x)

    return function interna(y){
        console.log(y+x)
    }
}
let retorno = externa(10)
retorno(20)

function persona(){
    //atributo "privado" de clase que le pertenece al closure de la funcion que la use
    let nombre =  "leydi"

    // metodo publico de instancia que guarda como referencia el atributo "privado" del cloure
    this.getnombre = function(){
        console.log(nombre)
    }
}

new Persona

 /*funciones IIfe=immediatly Invoked function
     Heap: declaracion de variables y funciones
     stack: asigancion de valores y ejecucio en ordem
 */

