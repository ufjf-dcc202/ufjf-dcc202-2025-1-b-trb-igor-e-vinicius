let sementeSelecionada = null;

const sementes = Array.from(document.querySelectorAll('footer > button')).filter(button => {
  const id = button.id
  return id === 'batata' || id === 'abobora' || id === 'tomate';
});

sementes.forEach(button => {
  button.addEventListener('click', () => {
    sementeSelecionada = button.id;
    sementes.forEach(d => d.classList.remove('selecionada'));
    button.classList.add('selecionada');
  });
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
    regado: false,
    tipo: sementeSelecionada,
    viva: true
  });
}

document.querySelectorAll('.canteiro button').forEach(areaEl => {
  areaEl.addEventListener('click', () => {
    plantarSemente(areaEl);
  });
});