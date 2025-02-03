let textos = [
    "Faremos a respiração da Abelha, Pranayama Bhramari em Sanscrito",
    "Seus dedos indicadores nos seus ouvidos.",
    "Tome uma inspiração profunda e quando você expirar, gentilmente pressione a cartilagem..",
    "Inspire novamente e continue o mesmo processo por 6 ou 7 vezes, agora com os olhos fechados.",
    "Como você está se sentindo?"
];

let index = 0;

function alterarTitulo() {
    const botao = document.querySelector('a[onclick="alterarTitulo()"]');
    if (botao) {
        botao.innerHTML = "";
    }

    const textoprincipal = document.getElementById('textoprincipal');
    const contador = document.getElementById('contador');
    if (!textoprincipal || !contador) return;

    function iniciarContador(duracao, callback) {
        let tempoRestante = duracao;
        contador.innerHTML = `Próxima frase em: ${tempoRestante}s`;

        let intervalo = setInterval(() => {
            tempoRestante--;
            contador.innerHTML = `Próxima frase em: ${tempoRestante}s`;

            if (tempoRestante <= 0) {
                clearInterval(intervalo);
                contador.innerHTML = "";
                callback();
            }
        }, 1000);
    }

    function mostrarProximoTexto() {
        if (index < textos.length) {
            textoprincipal.style.opacity = '0';
            setTimeout(() => {
                textoprincipal.innerHTML = textos[index];
                textoprincipal.style.opacity = '0.8';
                index++;
                if (index < textos.length) {
                    iniciarContador(4, mostrarProximoTexto);
                }
            }, 1000);
        }
    }

    mostrarProximoTexto();
}