class Hello {
    get(req, res){
        res.send({"response": "Hello people!"}).json
    }
}

module.exports = Hello