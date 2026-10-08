import 
export function cadastrarAmostra(req, res) {
    res.status(201).json({
        mensagem: "Amostra cadastrada com sucesso"
    });
}

export function listarAmostras(req, res) {
    res.status(200).json([]);
}

export function buscarAmostra(req, res) {
    res.status(200).json({
        mensagem: "Amostra encontrada"
    });
}

export function atualizarAmostra(req, res) {
    res.status(200).json({
        mensagem: "Amostra atualizada com sucesso"
    });
}

export function deletarAmostra(req, res) {
    res.status(200).json({
        mensagem: "Amostra deletada com sucesso"
    });
}