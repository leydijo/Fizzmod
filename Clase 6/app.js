/* EJERCICIOS
    iniciar un servidor TCP
    identificar propiedades para capturar la direccion ip y el puerto del socket
    establecer un nombre aleatorio para cada socket conectado al servidor
    guardar cada socket en un array de sockets
    mostrar un mensaje para todos los sockets cada ve que alquien se conecte
    identificar el evento de desconexion del socket y enviar un msj a todos los sockets notificando las desconexion.
    eliminar el socket del array de sockets a notificar de lo contrario nos dara error en los proximos
    msj.
    crear una funcion broadcast que envie el msj recibido por el evento data a todos
    los sockets menos al que lo envia 
*/

const net = require("net")

let sockets = []
//iniciar un servidor TCP
const servidor = net.createServer(socket=>{
    //identificar propiedades para capturar la direccion ip y el puerto del socket
    let {localAddress,localPort,remoteAddress,remotePort} = socket
    //establecer un nombre aleatorio para cada socket conectado al servidor.
    /*
        Math.floor => REDONDEA PARA ABAJO
        Math.ceil => redondea para arriba
        Number.tofixec(cant Number) => fija la cantidad de dedimales al numero especificado por cant
    */
    socket.id =`Socket-${Math.floor(Math.random()*1000)}`

    //  guardar cada socket en un array de sockets (crear el array vacio)
    sockets.push(socket)

    //mostrar un mensaje para todos los sockets cada ve que alquien se conecte
    if (sockets.length){
        sockets.forEach(s=>{
            s.write(`Se ha conectado alguien`)
        })
    }

    let buffer =[]

    socket.on("data", data=>{
        buffer.push(datas)
        if(data == "enter"){
            buffer = Buffer.concat(buffer)
            /*acordate de usar la linea 39 en otra variable orestaurar el variable o restaurar originar
            de la variable buffer en array vacio,de lo contrario, el proximo ingreso de data falla ya que la variable
            no es mas un array si no Buffer
            */
        }
    })

})

servidor.listen(8000)