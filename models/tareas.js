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
}

module.exports = Tareas;