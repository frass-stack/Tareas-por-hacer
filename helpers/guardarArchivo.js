const fs = require('fs');


const guardarArchivo = ( data ) => {
    //Directorio donde guardamos la informacion.
    const archivo = './db/data.json';

    fs.writeFileSync(archivo, JSON.stringify(data));
}

module.exports = {
    guardarArchivo
}