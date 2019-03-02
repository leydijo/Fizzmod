/**
 * sync vs async
 * 
 * v8(stack+heap)+web apis+ task queue = javascript front end
 * v8+libuv+Modulos Nativos(javascript)+c/c++librerias+bindings =javascript back end
 */

 /**
 * 
 */

 //funcion variadica
/**
 * function foo(a,b){
     var copia = Array.prototype
     //var a = 1
     //var a = 2
     a = 10
     arguments [1]=20
     //como copio una funcion?
    console.log(b)
 }
 foo(1,2)
 * 
 */ 




 import{promisify}from "utils"  //convierte un call a una promesa

 //Event loop en node

 /**
 * timers+IO network + io fs +process
 */

 setTimeout()

 setInterval()

 setImediate()

 XHR
 fetch
 process.nextick()

 //Funciones autoinvocadas
 (1+1)()
 //patron modulo
 (function (){
    let a = 1
        document.addEventListener("click",()=>{
            console.log(a)
        })
 })(10)

 function a(callback){
     callback("hola")
 }

 a(res=>{console.log(res)})

 console.log("primero")

 //callback hell / Pyramid of doom

 let promise = new promise(function(bien,mal){
     bien(1)
     //mal, si se ejecuto como mala no se puede pasar a buena
 })

 promise.then(res=>{}).catch(err=>{})
