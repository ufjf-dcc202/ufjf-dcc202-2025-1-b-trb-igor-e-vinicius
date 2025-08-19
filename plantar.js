let sementeSelecionada = null;

const sementes = Array.from(document.querySelectorAll('footer > button')).filter(button => {
  const texto = button.querySelector('span')?.textContent?.toLowerCase();
  return texto === 'batata' || texto === 'abóbora' || texto === 'tomate';
});

sementes.forEach(button => {
  button.addEventListener('click', () => {
    sementeSelecionada = button.querySelector('span').textContent.toLowerCase();
    sementes.forEach(d => d.classList.remove('selecionada'));
    button.classList.add('selecionada');
  });
});

export function plantarSemente(areaEl) {
  if (!sementeSelecionada) return;
  if (areaEl.id !== 'terra') return;

  let imgPath = '';
  switch (sementeSelecionada) {
    case 'batata':
      imgPath = './assets/Potato/2 - Potato Sprout.png';
      break;
    case 'abóbora':
      imgPath = './assets/Pumpkin/2 - Pumpkin Sprout.png';
      break;
    case 'tomate':
      imgPath = './assets/Tomato/2 - Tomato Sprout.png';
      break;
  }

  areaEl.style.backgroundImage = `url('${imgPath}')`;
  areaEl.id = `semente-${sementeSelecionada}`;
}

document.querySelectorAll('.canteiro button').forEach(areaEl => {
  areaEl.addEventListener('click', () => {
    plantarSemente(areaEl);
  });
});