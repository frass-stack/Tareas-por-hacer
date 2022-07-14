require('colors');
const { inquirerMenu, inquirerPausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


const main = async () => {

    let opcion = '';
    const tareas = new Tareas();

    do {
        //Imprime el menu
        opcion = await inquirerMenu();

        switch (opcion) {
            case '1':
                const descripcion = await leerInput('Descripcion:');
                tareas.crearTarea(descripcion);
                break;
            case '2':
                console.log(tareas.listadoArr);
                break;
        }
        
        console.log('\n')
        if(opcion !== '0') await inquirerPausa();
        
    } while (opcion !== '0');
}

main();