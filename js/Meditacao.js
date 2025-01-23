 
 let textos = [
    "Enquanto estiver expandindo inspire devagar,preenchendo toda barriga, todo o peito e do pulmão!",
    "Agora exale profundamente, eliminando todo o ar.",
    "Repita a respiração profundamente, mantendo a atenção no momento presente."
  ];
  let index = -1;
  let interval;

  function alterarTitulo() {
    const botao = document.querySelector('a[onclick="alterarTitulo()"]');

    // Verifica se o elemento e o botão existem

    if (botao) {
      botao.innerHTML = ""; // Altera o texto do botão
    }

    // Começa a sequência de mudanças automáticas
    if (!interval) {
      interval = setInterval(() => {
        index = (index + 1) % textos.length; // Alterna entre os textos do array
        const textoprincipal = document.getElementById('textoprincipal');

        // Oculta o texto gradualmente
        textoprincipal.style.opacity = '0';

        // Aguarda a transição de ocultar antes de alterar o texto
        setTimeout(() => {
          textoprincipal.innerHTML = textos[index]; // Usa innerHTML para suportar formatação
          textoprincipal.style.opacity = '0.8'; // Mostra o texto novamente
        }, 1000); // Tempo para a transição
      }, 4000); // Intervalo de 4 segundos entre as mensagens
    }
  }