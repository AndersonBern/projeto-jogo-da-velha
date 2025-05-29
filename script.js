let opcao = document.getElementById('opt');
let jogo = document.getElementById('jogo');
let campo = '';

let player = 0;
let cpu = 0;


function escolha(opt) {
    if(opt == 1) {
        player = 1;
    }
    else {
        cpu = 1;
    }
    opcao.style.display = 'none';
    jogo.style.display = 'flex';
    console.log(player, cpu);
}

function escolherCampo(id) {
    campo = document.getElementById(`${id}`);
    
    listaJogadaPlayer.push(id);

    console.log(player, cpu);

       
    if (campo.classList == 'campo') {

        campo.classList.add('preenchido');

        campo.style.backgroundImage = `url(imagens/img-${player}.png)`;

        campo.removeAttribute('onclick');
    }
    
}

let jogada = 0;
let listaJogadaPC = [jogada];
let listaJogadaPlayer = [];

function sorteioPC() {

    if (listaJogadaPC.length < 5) {
        
        jogada = Math.floor(Math.random() * 9) + 1;
        console.log(jogada);
    }
    else {
        return;
    }
}


function jogadaPC() { 

    sorteioPC();

    if(listaJogadaPC.indexOf(jogada) != -1) {
        sorteioPC();
        jogadaPC();
    }
    else if (listaJogadaPlayer.indexOf(jogada) != -1) {
        sorteioPC();
        jogadaPC();
    }
    else {
        listaJogadaPC.push(jogada);

        console.log(listaJogadaPC);
        console.log(listaJogadaPlayer);


        let campoPc = document.getElementById(`${jogada}`);

        if (campoPc.classList == 'campo') {

            campoPc.classList.add('preenchido');

            campoPc.style.backgroundImage = `url(imagens/img-${cpu}.png)`
        }

        let delay = setInterval(resultado, 1000)
        
    }
        
    
    
}

let vencedor = document.getElementById('vencedor');
let corDeFundo = document.getElementById('fundo');
let mensagem = document.getElementById('msg');

function resultado() {

        //PARA O JOGADOR.

    //Horizontal linha 1
    if((listaJogadaPlayer.indexOf(1) != -1) && (listaJogadaPlayer.indexOf(2) != -1) && (listaJogadaPlayer.indexOf(3) != -1)){

        corDeFundo.style.display = 'block';
        vencedor.style.display = 'block';
        mensagem.innerHTML = 'Você GANHOU!';
        
    }
    //Horizontal linha 2
    else if((listaJogadaPlayer.indexOf(4) != -1) && (listaJogadaPlayer.indexOf(5) != -1) && (listaJogadaPlayer.indexOf(6) != -1)){
    
        corDeFundo.style.display = 'block';
        vencedor.style.display = 'block'
        mensagem.innerHTML = 'Você GANHOU!'
    }
    //Horizontal linha 3
    else if((listaJogadaPlayer.indexOf(7) != -1) && (listaJogadaPlayer.indexOf(8) != -1) && (listaJogadaPlayer.indexOf(9) != -1)){

        corDeFundo.style.display = 'block';
        vencedor.style.display = 'block'
        mensagem.innerHTML = 'Você GANHOU!'
    }
    //Vertical linha 1
    else if((listaJogadaPlayer.indexOf(1) != -1) && (listaJogadaPlayer.indexOf(4) != -1) && (listaJogadaPlayer.indexOf(7) != -1)){

        corDeFundo.style.display = 'block';
        vencedor.style.display = 'block'
        mensagem.innerHTML = 'Você GANHOU!'
    }
    //Vertical linha 2
    else if((listaJogadaPlayer.indexOf(2) != -1) && (listaJogadaPlayer.indexOf(5) != -1) && (listaJogadaPlayer.indexOf(8) != -1)){

        corDeFundo.style.display = 'block';
        vencedor.style.display = 'block'
        mensagem.innerHTML = 'Você GANHOU!'
    }
    //Vertical linha 3
    else if((listaJogadaPlayer.indexOf(3) != -1) && (listaJogadaPlayer.indexOf(6) != -1) && (listaJogadaPlayer.indexOf(9) != -1)){

        corDeFundo.style.display = 'block';
        vencedor.style.display = 'block'
        mensagem.innerHTML = 'Você GANHOU!'
    }
    //Diagonal inicio linha 1
    else if((listaJogadaPlayer.indexOf(1) != -1) && (listaJogadaPlayer.indexOf(5) != -1) && (listaJogadaPlayer.indexOf(9) != -1)){

        corDeFundo.style.display = 'block';
        vencedor.style.display = 'block'
        mensagem.innerHTML = 'Você GANHOU!'
    }
    //Diagonal inicio linha 3
    else if((listaJogadaPlayer.indexOf(3) != -1) && (listaJogadaPlayer.indexOf(5) != -1) && (listaJogadaPlayer.indexOf(7) != -1)){

        corDeFundo.style.display = 'block';
        vencedor.style.display = 'block'
        mensagem.innerHTML = 'Você GANHOU!'
    }

        //PARA O CPU

    //Horizontal linha 1
    if((listaJogadaPC.indexOf(1) != -1) && (listaJogadaPC.indexOf(2) != -1) && (listaJogadaPC.indexOf(3) != -1)){

        corDeFundo.style.display = 'block';
        corDeFundo.style.backgroundColor = '#f54d4d91'
        vencedor.style.display = 'block'
        mensagem.innerHTML = 'Você PERDEU!'
    }
    //Horizontal linha 2
    else if((listaJogadaPC.indexOf(4) != -1) && (listaJogadaPC.indexOf(5) != -1) && (listaJogadaPC.indexOf(6) != -1)){

        corDeFundo.style.display = 'block';
        corDeFundo.style.backgroundColor = '#f54d4d91'
        vencedor.style.display = 'block'
        mensagem.innerHTML = 'Você PERDEU!'
    }
    //Horizontal linha 3
    else if((listaJogadaPC.indexOf(7) != -1) && (listaJogadaPC.indexOf(8) != -1) && (listaJogadaPC.indexOf(9) != -1)){

        corDeFundo.style.display = 'block';
        corDeFundo.style.backgroundColor = '#f54d4d91'
        vencedor.style.display = 'block'
        mensagem.innerHTML = 'Você PERDEU!'
    }
    //Vertical linha 1
    else if((listaJogadaPC.indexOf(1) != -1) && (listaJogadaPC.indexOf(4) != -1) && (listaJogadaPC.indexOf(7) != -1)){

        corDeFundo.style.display = 'block';
        corDeFundo.style.backgroundColor = '#f54d4d91'
        vencedor.style.display = 'block'
        mensagem.innerHTML = 'Você PERDEU!'
    }
    //Vertical linha 2
    else if((listaJogadaPC.indexOf(2) != -1) && (listaJogadaPC.indexOf(5) != -1) && (listaJogadaPC.indexOf(8) != -1)){

        corDeFundo.style.display = 'block';
        corDeFundo.style.backgroundColor = '#f54d4d91'
        vencedor.style.display = 'block'
        mensagem.innerHTML = 'Você PERDEU!'
    }
    //Vertical linha 3
    else if((listaJogadaPC.indexOf(3) != -1) && (listaJogadaPC.indexOf(6) != -1) && (listaJogadaPC.indexOf(9) != -1)){

        corDeFundo.style.display = 'block';
        corDeFundo.style.backgroundColor = '#f54d4d91'
        vencedor.style.display = 'block'
        mensagem.innerHTML = 'Você PERDEU!'
    }
    //Diagonal inicio linha 1
    else if((listaJogadaPC.indexOf(1) != -1) && (listaJogadaPC.indexOf(5) != -1) && (listaJogadaPC.indexOf(9) != -1)){

        corDeFundo.style.display = 'block';
        corDeFundo.style.backgroundColor = '#f54d4d91'
        vencedor.style.display = 'block'
        mensagem.innerHTML = 'Você PERDEU!'
    }
    //Diagonal inicio linha 3
    else if((listaJogadaPC.indexOf(3) != -1) && (listaJogadaPC.indexOf(5) != -1) && (listaJogadaPC.indexOf(7) != -1)){

        corDeFundo.style.display = 'block';
        corDeFundo.style.backgroundColor = '#f54d4d91'
        vencedor.style.display = 'block'
        mensagem.innerHTML = 'Você PERDEU!'
    }
}
