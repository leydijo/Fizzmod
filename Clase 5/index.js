cons fs = requiere("fs")

fs.readFileSync(__filename)

fs.readFile(_filename,(err,data)=>{
    console.log(data.toString())
})

//inicia un stream en modo pausado, hasta que le haga una operacion a este script
//los streams pueden estar en dos modos: paused o flowing
let archivo =fs.createReadStream(__dirname+"/index.html")
let nuevo =fs.createWriteStream(__dirname+"/output.txt")

// el evento data de un readable se dispara cuando nos llega un chunk a traves del stream en forma de buffer
archivo.on("data", chunk => {
    console.log("nuevo chunk", chunk)
    //todos los stream de tipo writable implementan el metodo write para escribir por stream
    nuevo.write(chunk)
})

/*
    todos 
*/

Request (cliente)
//Metodo  URl Version

//pipes string
archivo.pipe(nuevo) //sabe cuando abrilo, cuando escribirlo 

/*
modulo net sirve para hacer servidores de conexion por TCP
const net = require("net")
es un servidor de TCp  recibimos una insracio ade net.Socket el cual implementa la interfaz de stream duplex,
osea que podemos consumirlo y escribirlo
const servidor = net.createServer(socket=>{

    en un servidor tcp o http siempre hay que cerrar la respuesta del cliente, de lo contrario el mismo queda en
    TimeOut
    socket.write("para leydi\n\r")
    socket.end("hola leydi")
    socket.on("data", data=>)

})
servidor.listen(8000)
*/

let sockets =[]
const servidor = net.createServer(socket=>{


    sockets.push(socket)
    socket.write("para leydi\n\r")
    //socket.end("hola leydi")
    socket.on("data", data=>{
        console.log("consola servidor: ", data)
        socket.write("conexion telnet : ",data)

        for (let index = 0; index < sockets.length; index++){
            const s = sockets[index]
            s.write(data)
        }
    })

})
servidor.listen(8000)
