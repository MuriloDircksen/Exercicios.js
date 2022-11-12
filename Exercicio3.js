function fatorial(n) {
let numero=1
for(i=1;i<=n;i++){
numero *=i;
}
return console.log('Fatorial de '+n+' = '+numero)
}
let n = 10
fatorial(n)

function reverteString(str){
    let inverte=' ';
    for ( i = str.length - 1; i >= 0; i--) { 
        inverte += str[i]; 
    }
    return console.log(inverte)
}
reverteString('banana')

const tamanhoPalavra={
    maior: function(str) {
        let palavra=str[0];
        for(i=0;i<str.length;i++){
        
            if(str[i].length>palavra.length){ palavra=str[i] }
            
        }
        return console.log(palavra)
    },
    menor: function(str){
       
        let palavra=str[0];
        for(i=0;i<str.length;i++){
        
            if(str[i].length < palavra.length){ palavra=str[i]}
          
        }
        return console.log(palavra)
    }
}
let array = ['java', 'javascript', 'python', 'html', 'css']

tamanhoPalavra.maior(array)
tamanhoPalavra.menor(array)

function maiorPrimo(inicio, fim){
    let divisores;
    let maiorPrimo
    for(count=inicio ; count<=fim ; count++){
        divisores=0;
        for(aux=1 ; aux<=count ; aux++){
            if(count % aux == 0)
                divisores++;
        }
        if(divisores==2){
           maiorPrimo = count ;
        }
    }
    return console.log(maiorPrimo)
}
maiorPrimo(0, 100)