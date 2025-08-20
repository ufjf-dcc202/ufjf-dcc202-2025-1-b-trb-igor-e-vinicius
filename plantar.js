let sementeSelecionada = null;
let regadorSelecionado = null;

const sementes = Array.from(document.querySelectorAll('footer > button')).filter(button => {
  const id = button.id
  return id === 'batata' || id === 'abobora' || id === 'tomate';
});

sementes.forEach(button => {
  button.addEventListener('click', () => {
    const isSelected = button.classList.contains('selecionada');
    sementes.forEach(d => d.classList.remove('selecionada'));
    regadorSelecionado = false;
    regador.classList.remove('selecionada');

    if (!isSelected) {
      button.classList.add('selecionada');
      sementeSelecionada = button.id;
    } else {
      sementeSelecionada = null;
    }
  });
});

const regador = document.getElementById('regador');
regador.addEventListener('click', () => {
  regadorSelecionado = !regadorSelecionado;
  if (regadorSelecionado) {
    regador.classList.add('selecionada');
    sementeSelecionada = null;
    sementes.forEach(d => d.classList.remove('selecionada'));
  } else {
    regador.classList.remove('selecionada');
  }
});

export const plantacoes = []

export function plantarSemente(areaEl) {
  if (!sementeSelecionada) return;
  if (areaEl.id !== 'terra') return;

  let imgPath = '';
  switch (sementeSelecionada) {
    case 'batata':
      imgPath = './assets/batata/batata-pequena.png';
      break;
    case 'abobora':
      imgPath = './assets/abobora/abobora-pequena.png';
      break;
    case 'tomate':
      imgPath = './assets/tomate/tomate-pequeno.png';
      break;
  }

  areaEl.style.backgroundImage = `url('${imgPath}')`;
  areaEl.id = `semente-${sementeSelecionada}`;
  plantacoes.push({
    el: areaEl,
    idade: 0,
    vida: 3,
    fase: 0,
    tipo: sementeSelecionada,
    viva: true
  });
}

export function regarPlanta(areaEl) {
  if (!areaEl.id.includes('semente') || !regadorSelecionado) return;

  const plantacao = plantacoes.find(p => p.el === areaEl);
  if (plantacao) {
    plantacao.vida = 3;
  }
}

