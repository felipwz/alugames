let botao = document.getElementsByTagName('a');

function alterarStatus(numero) {

    alterarStatus('1');

    if (botao.classList.contains('dashboard__item__img')) {
        botao.classList.remove('dashboard__item__img');
        botao.classList.add('dashboard__item__img--rented');

        console.log('passou aqui');

    } else {

    }





}