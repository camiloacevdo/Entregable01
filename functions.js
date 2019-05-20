const file_save = require('fs');

function createFile (texto_archivo, nombre_archivo) {
    file_save.writeFile(nombre_archivo, texto_archivo, (err) =>{
        if (err) throw (err);
        console.log('Se ha creado correctamente el archivo')
    });

}

module.exports = {
    createFile,
};