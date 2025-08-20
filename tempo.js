import { plantacoes } from "./plantar.js";
import { plantasInfo } from "./info.js";
const tempoBtn = document.getElementById('tempo');
export let tempo = 0;

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
  const index = plantacoes.indexOf(plantacao);
  if (index !== -1) {
    plantacoes.splice(index, 1);
  }
}

function atualizaTempo() {
  const tempoEl = document.querySelector('header span:first-child');
  tempoEl.textContent = `Dia: ${tempo}`;
}