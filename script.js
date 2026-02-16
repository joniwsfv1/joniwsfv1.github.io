function mostrarAba(id) {

    const abas = document.querySelectorAll('.aba');
    const botoes = document.querySelectorAll('.menu button');

    abas.forEach(aba => aba.classList.remove('ativa'));
    botoes.forEach(botao => botao.style.background = "transparent");

    document.getElementById(id).classList.add('ativa');

    event.target.style.background = "#38bdf8";
    event.target.style.color = "black";
}
