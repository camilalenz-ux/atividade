import { Amostra } from "../model/Amostras.js";

const amostras = [];

export function cadastrar(amostra){
    amostras.push(amostra);
}

export function listar(){
    return amostras;
}

export function buscarPorIndice(indice) {
    return Amostra[indice];
}

export function deletar(indice){
    mostra.splice(indice, 1)
}
