import express from "express";
import userRouter from '../src/api/router/user-router'
import produtoRouter from '../src/api/router/produto-router'
import categoriaRouter from '../src/api/router/categoria-router'

const app = express()
const port = process.env.port || 5000

app.get('/', (req, res) => {
    res.status(200).send({"server_status": "ok"}).json
}) 

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/api/v1/user', userRouter)
app.use('/api/v1/produto', produtoRouter)
app.use('/api/v1/categoria', categoriaRouter)

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Servidor executando no endereço http://localhost:${port}`)
    })
}

module.exports = app