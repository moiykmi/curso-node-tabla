const argv = require('yargs')
    .option('b',{
        alias : 'base',
        type: 'number',
        demandOption: true,
        description : 'Es la base de la tabla de multiplicar'
    })
    .option('h',{
        alias : 'hasta',
        type: 'number',
        demandOption: true,
        description : 'Es el limite de la tabla de multiplicar'
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw'La base debe ser un numero';
        }
        return true;
    })
    .option('l',{
        alias : 'listar',
        type: 'boolean',
        default:false,
        description:'Muestra la tabla en consola'
    })
    .argv;

module.exports = argv;