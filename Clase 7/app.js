const http = require ("http")
const Url = require ("url")

let parsed_url= Url.parse(url,true)
let {nombre} = parse_url.query
console.log(nombre)



const server = http.createServer((req,res)=>{
    //morgan = es logger
    //version http -metodo - url =  req

    let{ httpVersion,method,url} = req
    console.log(`HTTP ${httpVersion} - ${method} - ${url}`)


    //Express = es un framework para crear servidores en node
    //body-parse =  parsea la data entrante desde el cliente
    //

    /**
     *  obtengo la data de mi fetch
     * fetch("http://localhost:8000",{
        method : "POST",
        headers : {
        "content-type" : "application/json"
    },   
    body : JSON.stringify({x:1})
})
     */
    let buffer =[]
    let buffer_edn

    req.on("data", chunk=>{
        buffer.push(chunk)
        //buffer = [...buffer,chunk]
    })

    req.on ("end",()=>{
        buffer_end = buffer.concat(buffer)
        console.log(buffer_end.toString())
    })
    res.end("hola")
})


server.listen(8000,()=>{
    console.log("servidor Encendido")
})

/**
 * fetch 
 */