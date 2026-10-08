import express from "express";
import router from "./route/amostrasRoute.js";

const app = express();
const app 

app.use(express.json());

app.use("/amostras", router);

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
});