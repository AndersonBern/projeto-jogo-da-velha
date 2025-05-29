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

        campo.style.backgroundImage = `url(imagens/img-${player}.png)`

        
    }
    
}

let jogada = 0;
let listaJogadaPC = [jogada];
let listaJogadaPlayer = [];

function sorteioPC() {
    jogada = Math.floor(Math.random() * 9) + 1;
    console.log(jogada);
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
        
    }
        
    
    
}

function vencedor() {

}
