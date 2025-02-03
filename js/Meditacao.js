
let textos = [
"Enquanto estiver expandindo inspire devagar,preenchendo toda barriga, todo o peito e do pulmão!",
"Agora exale profundamente, eliminando todo o ar.",
"Repita a respiração profundamente, mantendo a atenção no momento presente."
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