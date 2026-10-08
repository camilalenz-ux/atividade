import express from "express";
import router from "./route/amostrasRoute.js";
import setorRoute from "./route/setorRoute.js";

const app = express();

app.use(express.json());

app.use("/amostras", router);

app.use("/setores", Routes);

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
});