// // diferencias de express
// const http = require ('http')


// http
// .createServer((req,res) =>{
//     if(req === url){
//         res
//         .writeHead(200,{"Content-type":"text/plain"})
//         .end("holis,me crearon con HTTP")
//     }
// })
// .listen(3001,"localhost")

const server = require ('express')()
//const server = express()
const morgan = require('morgan')
//para utilizar el miderwall hay que utilizar el metodo use.
server.use(morgan('dev'))//muesta informacion


server.get("/",(req,res)=>{
    res.send('esta ruta fue crada con express')
})

server.get('/users',(req,res) =>{
    res.send('esta ruta es para usuarios')
})

server.get('/users/:id/:name',(req,res)=>{
    const{id,name} = req.params

    if(+id === 23 && name === 'dai'){
        const infoUser = {
        cohorte:'37 a',
        name: 'Dai',
        id:23,
        alumnos:'muchos'
    }
   return res.json(infoUser)
        }
console.log(typeof id);
    //por default toma el primer if con el 200
    // luego los demas tenemos que asignarle el estado como por ejemplo 404
    res.status(404).send ('hubo un error mi rey')
    })
server.get('/user',(req,res) =>{
    const {name} = req.query
    console.log(req.query);

    if (name) {
        return res.send(`aca mandariamos infor especifica de los usuarios`)
    }
    return res.send('aca mandamos info de todos los usuarios')
})

server.listen(3001,() => {
    console.log("Server listen on port 3001");
})