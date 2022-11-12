onload = () =>{
    document.querySelector('#b1').onclick = () => digito(1); //() => digito(7) espressão de função, assim chama a função e consegue atribuir, isso e igual a dizer function(){return digito(9)}
    document.querySelector('#b2').onclick = () => digito(2);
    document.querySelector('#b3').onclick = () => digito(3);
    document.querySelector('#b4').onclick = () => digito(4);
    document.querySelector('#b5').onclick = () => digito(5);
    document.querySelector('#b6').onclick = () => digito(6);
    document.querySelector('#b7').onclick = () => digito(7);
    document.querySelector('#b8').onclick = () => digito(8);
    document.querySelector('#b9').onclick = () => digito(9);
    document.querySelector('#b0').onclick = () => digito(0);
    document.querySelector('#bsub').onclick = () => operador('-');
    document.querySelector('#bsum').onclick = () => operador('+');
    document.querySelector('#bdiv').onclick = () => operador('/');
    document.querySelector('#bplus').onclick = () => operador('*');
    document.querySelector('#bequal').onclick = () => calcula();
    document.querySelector('#bcoma').onclick = virgula; //atribuindo a uma expressão de função existente
    document.querySelector('#bclean').onclick = limpa;
}

//variaveis para armazenar o valor, operador e estado da calculadora
let sValor ='0'; ///valor apresentado no display
let novoNumero = true; //indica se o proximo digito sera de um novo numero
let numeroAnterior = 0; //valor acumulado para uma operação
let operacaoPendente= null; //operação acumulada 

//atualiza valor do visor
const atualizaVisor =() =>{
    let [parteInteira, parteDecimal] = sValor.split(','); // divide valor em vetor de posição, sendo a uma antes da virgula e outra depois da virgula, com desestruturização de vetor
    let numeroFinal = '';
    c=0;
    for(i=parteInteira.length-1;i>=0;i--){
        if(++c > 3){
            numeroFinal = '.'+numeroFinal;
            c=1;
        }

        numeroFinal=parteInteira[i]+numeroFinal;
    }
    numeroFinal = numeroFinal + (parteDecimal ? ','+parteDecimal : ''); //?retorno verdadeiro da expressão:retorno falso da expressão
    document.querySelector('#result').innerText = numeroFinal;
}
//tratamento do click nos digitos
const digito = (n) =>{
    if(novoNumero){
        sValor = ''+n;
        novoNumero = false;
    }
    else {sValor +=n;} 
    atualizaVisor(); 
}

//tratamento clique botao decimal

const virgula = () =>{
    if(novoNumero){
        sValor = '0,';
        novoNumero = false;
    }else if(sValor.indexOf(',')==-1){ //indexOf retorna -1 se a virgula existir via documentação do metodo
        sValor+= ',';
        
    }
    atualizaVisor(); 
}

//tratamento botão ac, limpar

const limpa = () => {
    novoNumero=true;
    valorAnterior = 0;
    sValor = '0';
    operacaoPendente = null;
    atualizaVisor();
}

const valorAtual = () => { 
    sValor=sValor;
    console.log(sValor)
    sValor= parseFloat(sValor.replace(',', '.'));
   // console.log(sValor)
}

//operações, tratando o click nos botões

const operador = (op) =>{
    calcula(); //dispacha operação já selecionada antes de escolher a próxima
    valorAnterior = parseFloat(sValor.replace(',', '.'));
    operacaoPendente = op;
    novoNumero = true;
    
}

const calcula = () =>{
    if(operacaoPendente!=null){
        let resultado;
        switch(operacaoPendente){
            case '+': 
                resultado = valorAnterior + parseFloat(sValor.replace(',', '.')); 
                break;
            case '-': 
                resultado = valorAnterior - parseFloat(sValor.replace(',', '.')); 
                break;
            case '*': 
                resultado = valorAnterior * parseFloat(sValor.replace(',', '.')); 
                break;
            case '/': 
                resultado = valorAnterior / parseFloat(sValor.replace(',', '.')); 
                break;   
        }
        sValor = resultado.toString().replace('.', ',');
        console.log(sValor);
    }
    novoNumero = true;
    operacaoPendente = null;
    valorAnterior = 0;
    atualizaVisor();
}
