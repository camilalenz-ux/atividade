import { Amostras } from "../model/Amostras";

const produtos = []

export function cadastrar(Amostra){
    Amostras.push(Amostra);
}

export function listar(){
    return Amostras;
}

export function buscarPorIndice(indice) {
    Amostras[indice] = Amostras;
}

export function deletar(indice){
    Amostras.splice(indice, 1)
}
