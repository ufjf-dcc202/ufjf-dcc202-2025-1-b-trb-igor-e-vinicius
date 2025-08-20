import { plantacoes } from "./plantar.js";

const tempoBtn = document.getElementById('tempo');
export let tempo = 0;

tempoBtn.addEventListener('click', () => {
  tempo++;
  console.log('Dias: ', tempo);
  atualizaTempo();
  plantacoes.forEach(plantacao => {
    plantacao.idade++;
    plantacao.vida--;

    if (plantacao.vida < 1) {
      mataPlantacao(plantacao);
    }
  });
});

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