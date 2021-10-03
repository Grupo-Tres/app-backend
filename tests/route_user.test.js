import supertest from "supertest";
import app from '../src/server'

describe('Testa as rotas de usuário', () => {

    const bodyIn = {
        nome: "John Dee",
        cep: "04104907",
        email: "john.dee@gmail.com",
        telefone: "9999-9999",
        admin: false
    }
    
    const bodyOut = {
        status: "ok",
        registro: {
            id: expect.stringMatching(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/),
            nome: "John Dee",
            cep: "04104907",
            email: "john.dee@gmail.com",
            telefone: "9999-9999",
            admin: false
        }
        
    }
    test('retorno do método POST será um objeto semelhante a bodyOut', async () => {
        const response = await supertest(app)
            .post('/api/v1/user').send(bodyIn)
        expect(response.statusCode).toEqual(200);
        expect(response.body).toMatchObject(bodyOut);
    })

    test('retorno do método GET será um array de objetos', async () => {
        const response = await supertest(app)
            .get('/api/v1/user')
        expect(response.statusCode).toEqual(200)
        expect(response.body).toContainEqual(bodyOut.registro)
    })

    test('restorno de GET com id será um objeto', async () => {
        const response = await supertest(app)
            .get('/api/v1/user/77d79bdb-cf84-46b1-937a-6b5c022263b4')
        expect(response.statusCode).toEqual(200)
        expect(response.body).toMatchObject(bodyOut.registro)
    })

  /** test('retorno do método PUT será um objeto', () => {
        const response = await supertest(app)
            .put('/api/v1/user/77d79bdb-cf84-46b1-937a-6b5c022263b4')
            .send(bodyIn)
        expect(response.statusCode).toEqual(200)
        expect(response.body).toMatchObject(bodyOut.registro)
    })*/
})