const { v4: uuidv4 } = require('uuid');

class Tarea {

    id = '';
    descripcion = '';
    completadoEn = false;

    constructor( descripcion ){
        this.id = uuidv4();
        this.descripcion = descripcion
    }

}

module.exports = Tarea;