function palindromo(str){
    let inverte='';
    for ( i = str.length - 1; i >= 0; i--) { 
        inverte += str[i]; 
    }
    return console.log(inverte==str)
}
palindromo('arara')


function maiorValor(array){
    let maior = array[0];
    let posicao
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
            posicao = i;
        }
    }
    return console.log('Posição maior valor: '+posicao);
}
let array = [2, 3, 6, 7, 10, 1]
maiorValor(array)

function menorValor(array2){
    let menor = array2[0];
    let posicao
    for (let i = 0; i < array2.length; i++) {
        if (array2[i] < menor) {
            menor = array2[i];
            posicao = i;
        }
    }
    return console.log('Posição menor valor: '+posicao);
}
let array2 = [2, 4, 6, 7, 10, 0, -3]
menorValor(array2)

function maiorNome(str) {
    let palavra=str[0];
    for(i=0;i<str.length;i++){
    
        if(str[i].length>palavra.length){ palavra=str[i] }
        
    }
    return console.log('Maior nome: '+palavra)
}
let nomes =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
maiorNome(nomes)

const contaPrimo = {
    verificaOcorrencia: function(numeros){
        var maior = null;
        var ocorrenciasMaior = -1;

        for ( i = 0 ; i < numeros.length ; i++ ) {
            var ocorrencias = 1;
            if(this.verificaPrimo(numeros[i])){
                
            for ( var t = i+1 ; t < numeros.length ; t++ ){
                
                if ( numeros[i] == numeros[t] ){ 
                    
                   ocorrencias++; }
                }
               }
                     
            if ( ocorrencias > ocorrenciasMaior ) {
                maior = numeros[i];
                ocorrenciasMaior = ocorrencias;
            }
        
        }
    return console.log("Numero primo com maior ocorrência:"+ maior +' com '+ ocorrenciasMaior+' ocorrências')
},
    verificaPrimo: function(numero){
        
       
            let divisores=0;
            for(aux=0 ; aux<=numero; aux++){
                if(numero % aux == 0)
                    divisores++;
            }
           
        
        
        return divisores==2
        
    }

}
let numeros = [2, 3, 2, 5, 8, 2, 3]
contaPrimo.verificaOcorrencia(numeros)

function somaNumeroNatural(numeroNatural){
    let soma=0
    for(i=1;i<=numeroNatural;i++){
        soma+=i;
    }
    return soma
}
console.log(somaNumeroNatural(5))

function verificaFimParalavra(world, ending){
    return world.endsWith(ending)
}
let world1 = 'roberto'
let ending1 = 'rto'
console.log('Final '+ ending1+ ' é final da palavra '+ world1+': '+verificaFimParalavra(world1, ending1))
let world2 = 'joaofernando'
let ending2 = 'fernan'
console.log('Final '+ ending2+ ' é final da palavra '+ world2+': '+verificaFimParalavra(world2, ending2))