import { plantacoes } from "./plantar.js";

const tempoBtn = document.getElementById('tempo');
let tempo = 0;

tempoBtn.addEventListener('click', () => {
  tempo++;
  console.log('Dias: ', tempo);
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