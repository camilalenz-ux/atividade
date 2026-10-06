import { Amostra } from "../model/Amostra.js";

import {
    cadastrar,
    listar,
    buscarporID,
    excluir
} from "../repository/amostraRepository.js";

export function cadastrarAmostra(req, res) {

    const { nome, valor, unidade } = req.body;

    const amostra = new Amostra(nome, valor, unidade);

    cadastrar(amostra);

    res.status(201).json(amostra);
}

export function listarAmostras(req, res) {

    const amostras = listar();

    res.status(200).json(amostras);
}

export function buscarAmostra(req, res) {

    const indice = Number(req.params.indice);

    const amostra = buscarporID(indice);

    if (!amostra) {
        return res.status(404).json({
            mensagem: "Amostra não encontrada"
        });
    }

    res.status(200).json(amostra);
}

export function excluirAmostra(req, res) {

    const indice = Number(req.params.indice);

    const amostra = buscarporID(indice);

    if (!amostra) {
        return res.status(404).json({
            mensagem: "Amostra não encontrada"
        });
    }

    excluir(indice);

    res.status(200).json({
        mensagem: "Amostra excluída com sucesso"
    });
}