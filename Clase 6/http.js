const http = require ("http")
const fs = require("fs")

const servidor = http.createServer((req,res)=>{

    //Es indispensable  que una conexion HTTP termine la  escritura del socket con Socket.end

    res.write("hola")
    res.write("chao")
    //Timeout default=2m
   /* setTimeout(() => {
        res.end ("!")
    }, 3000);
  
   */
  //Content-Type : Determina que tipo de recurso esta  imactando en el cliente
  /**
   * CLIENTE>SERVIDOR
   * multipart/formdata (formulario post)
   * application/x-www-url-enconded (formulario get)
   * SERVIDOR>CLIENTE
   * text/html
   * text/plain
   * application/json
   * application/javascript
   * image/jpeg
   * image/gif
   * image/png
   * image/mp4
   * vide0/mp4
   * video/ogg
   * audio/mp3
   * audio/ogg
   */
  res.end ("!")


  /**
   * formadirecta
   */
  //por defecto el codigo de status de HHTP en node siempre es 200 hasta que le diga lo contraio
  //res.statusCode =200
  
  //forma indirecta
  //res.setHeader("conten-type", "text/html")
  res.writeHead(404,"ok",{"content-type" : "text/html"})
  res.end("<h1>hola mundo!</h1>")
  //  fs.readFile es asincronica
  fs.readFile(`${__dirname}/index.html`, (err,data)=>{
    if (err){
      console.error(err)
      res.writeHead(500,"Internal Server Error")
      res.send(err.message)
    }else{
      res.writeHead(200,{"content-type":"video/mp4"})
      res.end(data)
    }
    
  })
})

servidor .listen(8000)


/**
 * Aplicacion = HTTP / SSH /FTP/ STMP/ etc....
 * ....           = 
 * Transporte =Tcp
 * ....
 * Red  = ipv4/ipv6
 */