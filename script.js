function mostrarAba(id) {
    const abas = document.querySelectorAll('.aba');

    abas.forEach(function(aba) {
        aba.classList.remove('ativa');
    });

    document.getElementById(id).classList.add('ativa');
}
