import { Amostra } from "../model/Amostras.js";

const amostras = [];

export function cadastrar(amostra){
    amostras.push(Amostra);
}

export function listar(){
    return Amostra;
}

export function buscarPorIndice(indice) {
    Amostras[indice] = Amostra;
}

export function deletar(indice){
    Amostra.splice(indice, 1)
}
