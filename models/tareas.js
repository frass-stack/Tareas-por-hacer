const Tarea = require('./tarea');


class Tareas {

    _listado = {};

    //getter
    get listadoArr(){
        const listado = [];
        //Extras todas las llaves de la propiedad _listado, en un arreglo de Strings
        Object.keys(this._listado).forEach((key)=>{
            const tarea = this._listado[key];
            //Añadimos las tareas que esten instanciadas al listado y lo retornamos.
            listado.push(tarea);
        })
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    borrarTarea = ( id = '' ) => {
        if(this._listado[id]) delete this._listado['id'];
    }

    cargarTareasFromArray(tareas = []){
        if(tareas.length !== 0){
            tareas.forEach(tarea => {
                this._listado[tarea.id] = tarea;
            })
        }
    }

    crearTarea = (descripcion = '') => {
        const tarea = new Tarea(descripcion);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto = () => {
        this.listadoArr.forEach((tarea, i) => {
            const idx = `${i + 1 + '.'}`.green;
            const { descripcion, completadoEn } = tarea;
            const estado = ( completadoEn )? 'Completada'.green:'Pendiente'.red;
            console.log(`${idx} ${descripcion} :: ${estado}`);
        })
    }

    listarCompletadasOPendientes = (completadas = true) => {
        console.log();
        let contador = 0;
        this.listadoArr.forEach((tarea, i) => {
            const { descripcion, completadoEn } = tarea;
            const estado = ( completadoEn )? completadoEn:'Pendiente'.red;
            if(completadas){
                if(completadoEn){
                    contador += 1;
                    console.log(`${(contador + '.').green} ${descripcion} :: ${completadoEn}`);
                }
            }else{
                if(!completadoEn){
                    contador += 1;
                    console.log(`${(contador + '.').green} ${descripcion} :: ${estado}`);
                }
            }
        })
    }
}

module.exports = Tareas;