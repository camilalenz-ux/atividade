import express from "express";

import {
  cadastrarAmostra,
  listarAmostras,
  buscarAmostra,
  atualizarAmostra,
  deletarAmostra
} from "../controller/amostrasController.js";

const router = express.Router();

// Altere cadastrarAmostras -> cadastrarAmostra
router.post("/", cadastrarAmostra); 
router.get("/", listarAmostras);
router.get("/:id", buscarAmostra);
router.put("/:id", atualizarAmostra);
router.delete("/:id", deletarAmostra);

export default router;