import { Amostra } from "../model/Amostras.js";

const amostras = [];

export function cadastrar(amostra){
    amostras.push(amostra);
}

export function listar(){
    return amostras;
}

export function buscarPorIndice(indice) {
    return Amostras[indice];
}

export function deletar(indice){
    Amostra.splice(indice, 1)
}
