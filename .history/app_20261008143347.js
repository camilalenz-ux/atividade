import express from "express";
import router from "./route/amostrasRoute.js";
import setorRoutes from "./routes/setorRoutes.js";

const app = express();

app.use(express.json());

app.use("/amostras", router);

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
});