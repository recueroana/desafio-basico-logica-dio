let resultado = saldoResultado(110,8)

let nivel = ''

function saldoResultado( vitorias, derrotas ){
    let resultado = vitorias - derrotas
    return resultado
}

if( resultado <= 10){
   nivel = 'Ferro';
}else if( resultado >= 11 && resultado <= 20 ){
    nivel ="Bronze"
}else if( resultado >= 21 && resultado <= 50 ){
    nivel ='Prata'
}else if( resultado >= 51 && resultado <= 80 ){
    nivel ="Ouro"
}else if( resultado >= 81 && resultado <= 90 ){
    nivel ='Diamante'
}else if ( resultado >= 91 && resultado <= 100 ){
    nivel = 'Lendário'
}else{
    nivel = 'Imortal'
}

console.log("O herói tem de saldo de " + (resultado) + " esta no nível " + (nivel))