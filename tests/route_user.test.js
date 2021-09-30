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
})