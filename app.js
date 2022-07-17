require('colors');
const { guardarArchivo, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu,
    inquirerPausa,
    leerInput,
    listadoTareasBorrar,
    confirmar, 
    mostrarMultipleSeleccion} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


const main = async () => {

    let opcion = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();

    //Cargamos tareas en caso de haber previamente.
    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        //Imprime el menu
        opcion = await inquirerMenu();

        switch (opcion) {
            case '1':
                const descripcion = await leerInput('Descripcion:');
                tareas.crearTarea(descripcion);
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarCompletadasOPendientes(true);
                break;
            case '4':
                tareas.listarCompletadasOPendientes(false);
                break;
            case '5':
                const ids = await mostrarMultipleSeleccion(tareas.listadoArr);
                console.log({ids});
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !== '0') {
                    const confirmacion = await confirmar('¿Esta seguro que desea borrar la tarea?')
                    if (confirmacion) {
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada exitosamente.');
                    }
                }
                break;
        }

        //Impactamos los datos de la informacion.
        guardarArchivo(tareas.listadoArr);

        console.log('\n')
        await inquirerPausa();

    } while (opcion !== '0');
}

main();