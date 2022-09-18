const fs = require('fs')    
const colors = require('../config/colors')



const crearArchivo = async(base = 5,listar= false , hasta= 10) =>{

    try{
        
        let salida = '';
        let consola = '';

        for(let x=1 ; x <= hasta; x++){
            salida +=`${base} x ${x} = ${base * x} \n`;
            consola +=`${base} ${'x'.green} ${x} ${'='.green} ${base * x} \n`;
        }
        
        if(listar){
            
            console.log('================='.green);
            console.log('   Tabla del :'.green,colors.green(base));
            console.log('================='.green);
            console.log(salida.data)
        }

        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        
        return(`tabla-${base}.txt`);
    }catch(err){
        throw err
    }
}

module.exports = {
    crearArchivo
}