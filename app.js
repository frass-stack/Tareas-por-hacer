require('colors');
const { guardarArchivo } = require('./helpers/guardarArchivo');
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

        //Impactamos los datos de la informacion.
        // guardarArchivo(tareas.listadoArr);
        
        console.log('\n')
        if(opcion !== '0') await inquirerPausa();
        
    } while (opcion !== '0');
}

main();