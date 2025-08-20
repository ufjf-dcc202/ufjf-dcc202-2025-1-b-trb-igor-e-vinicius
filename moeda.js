import { plantasInfo } from "./info.js";

let moedas = 20;

const moedasEl = document.getElementById('moedas');
atualizaMoedas()

export function compraSemente(tipo) {
  const info = plantasInfo[tipo];
  if (!info) return;

  if (moedas >= info.preco) {
    moedas -= info.preco;
    atualizaMoedas();
    return true;
  }
  return false;
}

function atualizaMoedas() {
  moedasEl.innerHTML = moedas;
}