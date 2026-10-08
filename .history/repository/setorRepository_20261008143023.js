const setores = [];

export function cadastrar(setor) {
    setores.push(setor);
}

export function listar() {
    return setores;
}

export function buscarPorIndice(indice) {
    return setores[indice];
}

export function atualizar(indice, dadosAtualizados) {

    if (setores[indice]) {

        if (dadosAtualizados.nome !== undefined) {
            setores[indice].nome = dadosAtualizados.nome;
        }

        if (dadosAtualizados.sigla !== undefined) {
            setores[indice].sigla = dadosAtualizados.sigla;
        }

        if (dadosAtualizados.responsavel !== undefined) {
            setores[indice].responsavel = dadosAtualizados.responsavel;
        }

        if (dadosAtualizados.ramal !== undefined) {
            setores[indice].ramal = dadosAtualizados.ramal;
        }

        return true;
    }

    return false;
}

export function excluir(indice) {

    if (setores[indice]) {
        setores.splice(indice, 1);
        return true;
    }

    return false;
}