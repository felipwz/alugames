function alterarStatus(id){
    let gameEscolido = document.getElementById(`game-${id}`);
    let imgGame = gameEscolido.querySelector('.dashboard__item__img');
    let nomeGame = gameEscolido.querySelector('.dashboard__item__name');

    alert(nomeGame.textContent);




}