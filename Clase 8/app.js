const mysql = require('mysql')
const io = require ('socket.io')

const http = require('http')

const template  = require('./template')
res.writeHead(200,{"content-type" : "text/html"})
res.end(template)

/**
 * soc
 */

 const server = http.createServer((req,res))

 const connection = mysql.createConnection({
     host: "localhost", //url del servidor 
     port: "3306" , // el puerto de mysql xampp
     user : "root",
     password : "",
     database: "test"
    

     /**
      * CREATE USER 'leydi'@localhost IDENTIFIED BY '1233333';
      * GRANT ALL, //ADMINISTRADOR
      * GRANT ALL ON  localhost.* TO 'leydi'@localhost // CONCEDERLE TODOS LOS PERMISOS 
      * CREATE USER 'leydi'@localhost solo asi lo crea sin contraseña
      */
 })

 /**
  * 
  * despues de la variable (connection) que mantiene la conexion 
  * sale siempre un metodo llamado query  que es la permite ejecutar asincronicamente cada consulta al db
  *  */

   //connection.query(consulta String, callback function)

   connection.query("SELECT")