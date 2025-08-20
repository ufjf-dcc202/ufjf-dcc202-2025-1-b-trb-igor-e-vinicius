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

export function vendaPlanta(tipo) {
  const info = plantasInfo[tipo];
  if (!info) return;

  moedas += info.valorVenda;
  atualizaMoedas();
}

function atualizaMoedas() {
  moedasEl.innerHTML = moedas;
}