import supertest from "supertest";
import app from '../src/server'

describe('Testa as rotas do servidor', () => {

    test('retorno da rota raiz será o objeto obj ', async () => {
        const obj = {
            "server_status": "ok"
        }
        const response = await supertest(app).get('/');
        expect(response.statusCode).toEqual(200);
        expect(response.body).toMatchObject(obj);
    })
})