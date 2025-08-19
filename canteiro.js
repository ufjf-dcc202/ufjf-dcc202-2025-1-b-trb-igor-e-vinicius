import { limparCanteiro } from './limpar.js';

const CANTEIRO_LARG = 12;
const CANTEIRO_ALT = 12;

const canteiros_tipos = [
  {
    solo: './assets/floor/tile_grama.png',
    id: 'grama'
  },
  {
    solo: './assets/floor/tile_erva.png',
    id: 'erva'
  },
  {
    solo: './assets/floor/tile_pedra.png',
    id: 'pedra'
  }
]


const canteiroEl = document.querySelector('.canteiro');
for (let i = 0; i < CANTEIRO_LARG; i++) {
  for (let j = 0; j < CANTEIRO_ALT; j++) {
    const areaEl = document.createElement('div');
    const idxCanteiroTipo = Math.floor(Math.random() * 3);
    areaEl.style.backgroundImage = `url('${canteiros_tipos[idxCanteiroTipo].solo}')`;
    areaEl.id = canteiros_tipos[idxCanteiroTipo].id;
    areaEl.addEventListener('click', limparCanteiro);
    canteiroEl.appendChild(areaEl);
  }
}