import { Setor } from "../model/Setor.js";

import {
    cadastrar,
    listar,
    buscarPorIndice,
    atualizar,
    excluir
} from "../repository/setorRepository.js";

export function cadastrarSetor(req, res) {

    const { nome, sigla, responsavel, ramal } = req.body;

    const setor = new Setor(
        nome,
        sigla,
        responsavel,
        ramal
    );

    cadastrar(setor);

    res.status(201).json({
        mensagem: "Setor cadastrado com sucesso"
    });
}

export function listarSetores(req, res) {

    const setores = listar();

    res.status(200).json(setores);
}

export function buscarSetor(req, res) {

    const indice = req.params.indice;

    const setor = buscarPorIndice(indice);

    if (!setor) {
        return res.status(404).json({
            mensagem: "Setor não encontrado"
        });
    }

    res.status(200).json(setor);
}

export function atualizarSetor(req, res) {

    const indice = req.params.indice;

    const atualizado = atualizar(indice, req.body);

    if (!atualizado) {
        return res.status(404).json({
            mensagem: "Setor não encontrado"
        });
    }

    res.status(200).json({
        mensagem: "Setor atualizado com sucesso"
    });
}

export function excluirSetor(req, res) {

    const removido = excluir(req.params.indice);

    if (!removido) {
        return res.status(404).json({
            mensagem: "Setor não encontrado"
        });
    }

    res.status(200).json({
        mensagem: "Setor excluído com sucesso"
    });
}