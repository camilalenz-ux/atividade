import express from "express";
import { cadastrarAmostra,
    listarTodos,
    buscarAmostraPorId,
    deletarAmostra,
    atualizarAmostra
} from "../controller/amostraController.js";

const router = express.Router();

router.post("/", cadastrarAmostra)
router.get("/", listarTodos)
router.patch("/:indice", atualizarAmostra )
router.delete("/:indice", deletarAmostra)
router.get("/:indice", buscarAmostraPorId)


export default router;
