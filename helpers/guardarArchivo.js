const fs = require('fs');

//Path
//Directorio donde guardamos la informacion.
const archivo = './db/data.json';

const guardarArchivo = ( data ) => {
    fs.writeFileSync(archivo, JSON.stringify(data));
}

const leerDB = () => {
    if(!fs.existsSync(archivo)){
        return null;
    }

    const info = fs.readFileSync(archivo, {encoding:'utf-8'});
    const data = JSON.parse(info);

    return data;
}

module.exports = {
    guardarArchivo,
    leerDB
}