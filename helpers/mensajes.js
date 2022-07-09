require('colors');

const mostrarMenu = ()=>{
    console.clear();
    console.log('==========================='.green);
    console.log('   Seleccione una opcion   '.green);
    console.log('===========================\n'.green);

    console.log(`${'1.'.green} Crear tarea`)
    console.log(`${'2.'.green} Listar tareas`)
    console.log(`${'3.'.green} Listar tareas completadas`)
    console.log(`${'4.'.green} Listar tareas pendientes`)
    console.log(`${'5.'.green} Completar tarea(s)`)
    console.log(`${'6.'.green} Borrar tarea`)
    console.log(`${'0.'.green} Salir \n`)

    //Preparamos la interfaz que se le presentara al usuario.
    const readLine = require('readLine').createInterface({
        //Pausamos para recibir la entrada del usuario.
        input: process.stdin,
        //Pausamos para emitir la respuesta al usuario.
        output: process.stdout
    })

    readLine.question(`\nSelecciones una opcion: `, (opcion)=>{
        readLine.close();
    })
}

const pausa = ()=> {
    //Preparamos la interfaz que se le presentara al usuario.
    const readLine = require('readLine').createInterface({
        //Pausamos para recibir la entrada del usuario.
        input: process.stdin,
        //Pausamos para emitir la respuesta al usuario.
        output: process.stdout
    })

    readLine.question(`\nPresione ${'ENTER'.green}\n`, (opcion)=>{
        readLine.close();
    })
}

module.exports = {
    mostrarMenu
}