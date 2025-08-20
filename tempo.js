import { plantacoes } from "./plantar.js";

const tempoBtn = document.getElementById('tempo');
export let tempo = 0;

const plantasInfo = {
  'batata': {
    tempoCrescimento: 2,
    fasesImg: [
      './assets/batata/batata-pequena.png',
      './assets/batata/batata-media.png',
      './assets/batata/batata-grande.png'
    ]
  },
  'abobora': {
    tempoCrescimento: 3,
    fasesImg: [
      './assets/abobora/abobora-pequena.png',
      './assets/abobora/abobora-media.png',
      './assets/abobora/abobora-grande.png'
    ]
  },
  'tomate': {
    tempoCrescimento: 4,
    fasesImg: [
      './assets/tomate/tomate-pequeno.png',
      './assets/tomate/tomate-medio.png',
      './assets/tomate/tomate-grande.png'
    ]
  }
}

tempoBtn.addEventListener('click', () => {
  tempo++;
  atualizaTempo();
  plantacoes.forEach(plantacao => {
    plantacao.idade++;
    plantacao.vida--;

    if (plantacao.vida < 1) {
      mataPlantacao(plantacao);
      return
    }
    crescimentoPlanta(plantacao);
  });
});

function crescimentoPlanta(plantacao) {
  const info = plantasInfo[plantacao.tipo];
  if (!info && !plantacao.viva) return;
  if (plantacao.fase === 2) return;

  if (plantacao.idade % info.tempoCrescimento === 0) {
    plantacao.fase++;
    plantacao.el.style.backgroundImage = `url('${info.fasesImg[plantacao.fase]}')`;
  }
}

function mataPlantacao(plantacao) {
  const areaEl = plantacao.el;
  areaEl.style.backgroundImage = `url('./assets/${plantacao.tipo}/${plantacao.tipo}-morto.png')`;
  areaEl.id = 'morto';
  plantacao.viva = false;
}

function atualizaTempo() {
  const tempoEl = document.querySelector('header span:first-child');
  tempoEl.textContent = `Dia: ${tempo}`;
}