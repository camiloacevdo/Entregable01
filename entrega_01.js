// PAQUETES EXTERNOS
const curso = require ('./info');
const funciones = require('./functions');

//INICIALIZACIÓN DE VARIABLES
const repeticiones = curso.cursos.length;
var contador = 1;
const opciones = {
    id_curso:{
        demand: true,
        alias: 'id',
    },
    nombre_alumno:{
        demand: true,
        alias: 'st',
    },
    documento_alumno:{
        demand: true,
        alias: 'idst',
    },
};

//MAIN
const argv = require('yargs').command('inscribir', 'Inscribir un nuevo alumno', opciones).argv;

//LISTAR TODOS LOS CURSOS
if (argv.id == undefined && argv.st == undefined && argv.idst == undefined ){
    listar(contador, repeticiones);
}
//VALIDAR SI EL CURSO EXISTE
else
{   id_ins_curso = argv.id;
    student = argv.st;
    doc_student = argv.idst;
    
    texto_estudiante= 'INFORMACIÓN DEL ESTUDIANTE\n\n' + 'Estudiante           :'+ student + '\n' + 'Documento Estudiante :'+ doc_student;
    console.log(texto_estudiante);
    console.log('');
    texto_curso = curso.resultInfo(id_ins_curso);
    console.log(texto_curso);
    texto_final = texto_estudiante + '\n\n' + texto_curso;
   
    if (texto_curso == "EL CURSO NO EXISTE"){
        console.log('');
        listar(contador, repeticiones);
    }
    else
        funciones.createFile(texto_final,'archivo_curso.txt');
}


//FUNCIONES
function imprimir(id_imprimir,callback){
    setTimeout(function(){
        let resultado = curso.resultInfo(id_imprimir);
        callback (resultado);
    }, id_imprimir*2000);
};

function listar(contador, repeticiones){
    while(contador<=repeticiones){
        imprimir(contador,function(resultado){
            console.log(resultado);
        });
        contador=contador+1;
    };
};
