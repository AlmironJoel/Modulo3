const fulFilled1 = new Promise((resolve,reject)=>{
    resolve("Resuelto")
})
const rejected1 = new Promise ((resolve,reject)=>{
    reject('Rechazado')
})

//Case 1
fulFilled1.then((value) => console.log('caso 1: ',value))

//Case 2
rejected1
.then(
    (value) => console.log(value),
    (reason) => console.log('caso 2: '),reson
        )

//Case 3
//la promesa  se revuelve y no tengo un successHandler
fullFilled1 // promesa => 'resuelto '
.then()
.then((value) => console.log ('caso 3: ',value)) 

