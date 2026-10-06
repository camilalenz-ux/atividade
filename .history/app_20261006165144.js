import express from "express";
import router from "./route/amostraRoute.js";
const app = express();

app.use(express.json());

app.use("/amostras", amostraRoute);

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
});