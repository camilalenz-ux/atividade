import express from "express";
import { cadastrarSetor,
    listarSetores,
    buscarSetorPorIndice,
    deletarSetor,
    atualizarSetor
} from "../controller/setorController.js";

const router = express.Router();


router.post("/", cadastrarSetor)
router.get("/", listarSetores)
router.patch("/:indice", buscarSetorPorIndice )
router.delete("/:indice", deletarSetor)
router.get("/:indice", atualizarSetor)

export default router;