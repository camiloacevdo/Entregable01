let cursos = [{
        id_curso: 1,
        nombre: 'Introducción a la programación',
        duracion: '40 horas',
        valor: 850000,
        alias: 'IP',
    },
    {
        id_curso: 2,
        nombre: 'Ingles básico',
        duracion: '60 horas',
        valor: 950000,
        alias: 'IB',
    },
    {
        id_curso: 3,
        nombre: 'Introducción a las redes de datos',
        duracion: '80 horas',
        valor: 1050000,
        alias: 'IRD',
    },
    {
        id_curso: 4,
        nombre: 'Evaluación de proyectos',
        duracion: '80 horas',
        valor: 1150000,
        alias: 'EP',
    },
    {
        id_curso: 5,
        nombre: 'Aprendizaje Profundo',
        duracion: '80 horas',
        valor: 3550000,
        alias: 'AP',
}];

function printInfo(id_curso) {
    if ((id_curso <= cursos.length)){
        let info_curso = cursos.find(function(curso){return curso.id_curso ==id_curso});
        console.log("Id Curso:       " + info_curso.id_curso);
        console.log("Nombre Curso:   " + info_curso.nombre);
        console.log("Duración Curso: " + info_curso.duracion);
        console.log("Valor Curso:    " + info_curso.valor + " Pesos");
        console.log('');
    }
};

function resultInfo(id_curso) {
    if ((id_curso <= cursos.length)){
        let info_curso = cursos.find(function(curso){return curso.id_curso ==id_curso});
        texto = 'Id Curso:       ' + info_curso.id_curso + '\n';
        texto = texto + 'Nombre Curso:   ' + info_curso.nombre + '\n';
        texto = texto + 'Duración Curso: ' + info_curso.duracion + '\n';
        texto = texto + 'Valor Curso:    ' + info_curso.valor  + ' Pesos\n';
        return texto;
    }
    else{
        return "EL CURSO NO EXISTE";
    }
};


module.exports = {
    cursos,
    printInfo,
    resultInfo,
};