require('colors');

const showMenu= async()=> {
    return new Promise (resolve => {

        console.clear();
        console.log('====================='.blue);
        console.log('welcome to my todo'.blue)
        console.log('======================'.blue)
    
        console.log(`1. Crear tarea`)
        console.log(`2. Task list`)
        console.log(`3. Task list complete`)
        console.log(`4. Task list pendient`)
        console.log(`5. Complete task`)
        console.log(`6. Borrar tarea`)
        console.log(`0. Salir \n`)
        
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        
        })
         readline.question('Select a option ', (opt)=> {
            readline.close();
            resolve(opt)

        })
    })
}
const pausa =() => {
    return new Promise (resolve =>{
      
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    
    })
        readline.question('Press enter for continue ', (opt)=> {     
        readline.close();
        resolve();
     })  
    })
    }


module.exports ={
    showMenu,
    pausa
}