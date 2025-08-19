const CANTEIRO_LARG = 12;
const CANTEIRO_ALT = 12;

const canteiros_tipos = [
  './assets/floor/tile_grama.png',
  './assets/floor/tile_erva.png',
  './assets/floor/tile_pedra.png'
]


const canteiroEl = document.querySelector('.canteiro');
for (let i = 0; i < CANTEIRO_LARG; i++) {
  for (let j = 0; j < CANTEIRO_ALT; j++) {
    const areaEl = document.createElement('div');
    const idxCanteiroTipo = Math.floor(Math.random() * 3);
    areaEl.style.backgroundImage = `url('${canteiros_tipos[idxCanteiroTipo]}')`;
    canteiroEl.appendChild(areaEl);
  }
}