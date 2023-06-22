function tocarSom(selectorAudio) {
    const element = document.querySelector(selectorAudio);

    if (element && element.localName === 'audio') {
        element.play();
    } else {
        console.log(`Elemento ou seletor inválido`)
    }
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaTeclas.length; i++) {
    const instrumento = listaTeclas[i].classList[1];

    //função anonima, chamado dentro de evento onclick, chamado quando o evento ocorre
    listaTeclas[i].onclick = function () {
        document.querySelector(`#som_${instrumento}`).play();
    };

    listaTeclas[i].onkeydown = function (event) {
        //== → igual: compara os valores, como 1 == '1', igual true
        //=== → estritamente igual: compara além do valor o tipo de dado, como 1 === '1', igual a false
        if (event.code === 'Enter' || event.code === 'NumpadEnter' || event.code === 'Space') {
            listaTeclas[i].classList.add('ativa');
        };
    };
    listaTeclas[i].onkeyup = function (event) {
        if (event.code === 'Enter' || event.code === 'NumpadEnter' || event.code === 'Space') {
            listaTeclas[i].classList.remove('ativa');
        };
    };

}