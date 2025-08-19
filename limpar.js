export function limparCanteiro(e) {
  const areaEl = e.currentTarget;
  const areaId = areaEl.id;

  switch (areaId) {
    case 'grama':
      areaEl.style.backgroundImage = "url('./assets/floor/tile_m.png')";
      areaEl.id = 'terra';
      break;
    case 'erva':
      areaEl.style.backgroundImage = "url('./assets/floor/tile_grama.png')";
      areaEl.id = 'grama';
      break;
    case 'pedra':
      areaEl.style.backgroundImage = "url('./assets/floor/tile_grama.png')";
      areaEl.id = 'grama';
      break;
  }

}