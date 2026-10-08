import { Amostra } from "../model/Amostras.js";

const amostras = []; // Array que vai armazenar os dados

export function cadastrar(amostra) {
  amostras.push(amostra);
}

export function listar() {
  return amostras;
}

export function buscarPorIndice(indice) {
  return amostras[indice];
}

export function deletar(indice) {
  amostras.splice(indice, 1);
}