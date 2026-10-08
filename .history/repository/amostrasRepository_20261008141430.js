import { Amostra } from "../model/Amostras.js";

const produtos = []

export function cadastrar(Amostras){
    Amostras.push(Amostras);
}

export function listar(){
    return Amostra;
}

export function buscarPorIndice(indice) {
    Amostras[indice] = Amostra;
}

export function deletar(indice){
    Amostras.splice(indice, 1)
}
