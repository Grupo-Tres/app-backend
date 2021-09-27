import express from "express";
import helloRouter from '../src/api/router/hello-router'

const app = express()
const port = process.env.port || 5000

app.get('/', (req, res) => {
    res.status(200).send({"server_status": "ok"}).json
}) 

app.use('/api/v1/hello', helloRouter)

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Servidor executando no endereço http://localhost:${port}`)
    })
}

module.exports = app