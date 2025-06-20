//let titulo= document.querySelector('h1');
//titulo.innerHTML= 'Jogo do numero secreto';
//let paragrafo=document.querySelector('p');
//paragrafo.innerHTML= 'Escolha um número entre 1 a 10';
let listaDeNumeroSorteados=[];
let numeroLimite=10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa=1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do numero secreto.');
exibirTextoNaTela('p','Escolha um numero de 1 a 10.');
} exibirMensagemInicial();
function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativa> 1? 'tentativas' : 'tentativa';
        let mensagemTentativas =`Você descobriu o numero secreto, você descobriu o numero secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor!');
        }else{
            exibirTextoNaTela('p','O numero secreto é maior!');
        }
        tentativa++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
let numeroEscolhido= parseInt(Math.random() * numeroLimite + 1);
let quantidadeDeElementosNaLista= listaDeNumeroSorteados.length;
    if(quantidadeDeElementosNaLista == numeroLimite){
      listaDeNumeroSorteados=[];
    }
    if(listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value= '';
}
function reiniciarJogo(){
    exibirMensagemInicial();
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa=1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
}