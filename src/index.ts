import  express  from "express";
import cors from "cors"
import itemRouter from "./routers/itens-router";
//porta do servidor
const PORT = process.env.PORT || 4000

//host do servidor
const HOSTNAME  = process.env.HOSTNAME || "http://localhost"

//app express
const app = express()

//JSON
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//endpoint raiz
app.get("/", (req,res) => {
    res.send("bem-vindo")
})

//cors
app.use(cors({
    origin: ['http://localhost:3000']
}))

//Rotas
app.use("/api", itemRouter)

//resposta padrão para quaiquer outras requisições
app.use((req,res) => {
    res.status(404)
})

//Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME} : ${PORT}`);
})

