import express from "express";
import amostraRoutes from "./route/amostrasRoute.js";
import setorRoutes from "./route/setorRoutes.js";

const app = express();

app.use(express.json());

app.use("/amostras", amostraRoutes);
app.use("/setores", setorRoutes);

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
});