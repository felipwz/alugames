function alterarStatus(id) {
    let gameEscolido = document.getElementById(`game-${id}`);
    let imgGame = gameEscolido.querySelector('.dashboard__item__img');
    let nomeGame = gameEscolido.querySelector('.dashboard__item__name');
    let botao = gameEscolido.querySelector('.dashboard__item__button');



    if (imgGame.classList.contains('dashboard__item__img--rented')) {
        imgGame.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        

    } else {
        imgGame.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        
        
    }


}