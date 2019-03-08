//Node BUSCA extensiones .js .json


(function(exports ,...,...){


})()
/*incluir modulos
require() es sincronica 
node tiene bafers se puede auto incluir  modulos

module.exports ={}







*/
module.exports ={}
module.exports.a = 1
module.exports ={

}


//no es vzlido module-exports = a

//los nopmbre de los modulos no se debe llamar igual que los modulos global de node que ya viene incluido

/*
Buffer - stream- EventEmitter(eventos evenlistener)

*/



// EventEmitter
const events = require("events")

let { EventEmitter } = events  //es  let EventEmitter = events.EventEmitter
/
let obj = {x:1,y:2}

//let {x:x,y:y}= obj
let x= obj.x
























/*function ajax(params){
	let xhr = new XMLHttpRequest
	xhr.open(params.metodo,params.url)
	xhr.addEventListener("load",function(){
		if (xhr.status == 200) {
			params.success(JSON.parse(xhr.response))
		}
	})
	xhr.send()
}
*/
/*
ajax({
	metodo : "GET",
	url : "url1",
	success : function(data){
		ajax({
			metodo : "GET",
			url : "url2"+data,
			success : function(data){
				ajax({
					metodo : "GET",
					url : "url3"+data,
					success : function(data){
						
					}
				})
			}
		})		
	}
})
*/
/*
ajax({
	metodo : "GET",
	url : "url1"
})
.done(data=>{
	ajax({
		metodo : "GET",
		url : "url1"
	})
})
.done(data=>{

})
.fail()
*/

//XHR + Promise
/*
let url = "https://jsonplaceholder.typicode.com/"
let usuarios = fetch(`${url}users`)
usuarios
.then(data=>data.json())
.then(data=>fetch(`${url}posts?userId=${data[6].id}`))
.then(data=>data.json())
.then(data=>Promise.all(data.map(post=>fetch(`${url}comments?postId=${post.id}`))))
.then(data=>Promise.all(data.map(comment=>comment.json())))
.then(data=>console.log(data))
.catch(err=>console.error(err))
*/

/*let imagen = fetch(`img.jpg`) //=> Promise

imagen
.then(data=>data.blob())
.then(data=>{
	let url = URL.createObjectURL(data)
	let img = document.createElement("img")
	img.src = url
	document.body.appendChild(img)
})
.catch(error=>console.error(error))
*/

//ASYNC / AWAIT

/*let url = "https://jsonplaceholder.typicode.com/"
async function obtenerComentarios(){
  
    let usuarios_response = await fetch(`${url}users`)
    let usuarios = await usuarios_response.json()
    let usuario_id = usuarios[7].usuario_id
    let posts_response = await fetch(`${url}posts?userId=$´{usuario_id}`)
    let posts = await posts_response.json()

     let comentarios_response = await fetch(`$`)
}
obtenerComentarios()
*/

