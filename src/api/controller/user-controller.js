class User {

    post(req, res) {
        const mockObj = {
            status: "ok",
            registro: {
                id: "77d79bdb-cf84-46b1-937a-6b5c022263b4",
                nome: "John Dee",
                cep: "04104907",
                telefone: "9999-9999",
                admin: false
            }
        }

        res.send(mockObj)
    }

    get(req, res){
        res.send({"response": "Hello people!"}).json
    }
}

module.exports = User