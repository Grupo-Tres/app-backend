import "@babel/polyfill"
import express from "express"
import userRouter from './api/router/user-router'
import produtoRouter from './api/router/produto-router'
import categoriaRouter from './api/router/categoria-router'
import cardapioRouter from './api/router/cardapio-router'
import opcoesRouter from './api/router/opcoes-router'

const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.status(200).send({"server_status": "ok"}).json
}) 

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/api/v1/user', userRouter)
app.use('/api/v1/produto', produtoRouter)
app.use('/api/v1/categoria', categoriaRouter)
app.use('/api/v1/cardapio', cardapioRouter)
app.use('/api/v1/opcoes', opcoesRouter)

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Servidor executando no endereço http://localhost:${port}`)
    })
}

module.exports = app