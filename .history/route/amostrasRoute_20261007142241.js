import express from "express";

import {
    cadastrarAmostra,
    listarAmostras,
    buscarAmostra,
    atualizarAmostra,
    deletarAmostra
} from "../controller/amostrasController.js";

const router = express.Router();

router.post("/", cadastrarAmostra);
router.get("/", listarAmostra);
router.get("/:id", buscarAmostras);
router.put("/:id", atualizarAmostras);
router.delete("/:id", deletarAmostras);

export default router;