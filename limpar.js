import { colherPlanta, plantarSemente, regarPlanta } from './plantar.js';

export function limparCanteiro(e) {
  const areaEl = e.currentTarget;
  const areaId = areaEl.id;

  switch (areaId) {
    case 'grama':
      areaEl.style.backgroundImage = "url('./assets/floor/tile_m.png')";
      areaEl.id = 'terra';
      areaEl.addEventListener('click', () => plantarSemente(areaEl));
      areaEl.addEventListener('click', () => regarPlanta(areaEl));
      areaEl.addEventListener('click', () => colherPlanta(areaEl));
      break;
    case 'erva':
      areaEl.style.backgroundImage = "url('./assets/floor/tile_grama.png')";
      areaEl.id = 'grama';
      break;
    case 'pedra':
      areaEl.style.backgroundImage = "url('./assets/floor/tile_grama.png')";
      areaEl.id = 'grama';
      break;
    case 'morto': 
      areaEl.style.backgroundImage = "url('./assets/floor/tile_grama.png')";
      areaEl.id = 'grama';
      break;
  }

}