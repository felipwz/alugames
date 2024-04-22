function alterarStatus(id) {
    let gameEscolido = document.getElementById(`game-${id}`);
    let imgGame = gameEscolido.querySelector('.dashboard__item__img');
    let nomeGame = gameEscolido.querySelector('.dashboard__item__name');
    let botao = gameEscolido.querySelector('.dashboard__item__button');



    if (botao.classList.contains('dashboard__item__button')) {
        botao.classList.add('dashboard__item__button--return');
        imgGame.classList.add('dashboard__item__img--rented');


    } else if (botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
        imgGame.classList.remove('dashboard__item__img--rented')

    }


}

