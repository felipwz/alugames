function confirmacaoDeDevolucao(imagem, button) {
    var resposta = confirm("Você deseja devolver esse jogo?");

    if (resposta) {
        imagem.classList.remove('dashboard__item__img--rented') ;
        button.classList.remove('dashboard__item__button--return');
        button.textContent = 'Alugar';

    } else {


    }
}


function alterarStatus(id) {
    let gameEscolido = document.getElementById(`game-${id}`);
    let imgGame = gameEscolido.querySelector('.dashboard__item__img');
    let nomeGame = gameEscolido.querySelector('.dashboard__item__name');
    let botao = gameEscolido.querySelector('.dashboard__item__button');



    if (imgGame.classList.contains('dashboard__item__img--rented')) {
        confirmacaoDeDevolucao(imgGame, botao);

    } else {
        imgGame.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';


    }


}