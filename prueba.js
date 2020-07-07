const saludar = nombre => `Hola ${nombre}`;

console.log(saludar('Angel'));

const resultado = saludar('Angel');
const esperadp = 'Hola Angel';

if(resultado === esperado){
    console.log('Resultado esperado');
}else{
    throw new Error('No fue el resultado esperado');
}

function expect(actual){
    return {
        toBe(expect){
            if(actual !== expect){
                throw new Error('Prueba no exitosa');
            }
        }
    }
}

function it(title, callback){
    try{
        callback();
        console.log('Resultado esperado');
    }catch{

    }
}