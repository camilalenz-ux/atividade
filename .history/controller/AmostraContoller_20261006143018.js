import {Amostras} from "../model/Amostra.js"
import { cadastrar, listar, buscarPorIndice, deletar } from "../repository/AmostraRepository.js"

export function cadastrarAmostra(req , res ) {
    const { codigo, material, origem, resultado} = req.body
}

const Amostra = new Amostras(codigo, material, origem, resultado);
cadastrar