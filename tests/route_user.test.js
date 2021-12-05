import supertest from "supertest";
import app from '../src/server'

describe('Testa as rotas de usuário', () => {

    let idTest = ""

    const bodyIn = {
      nome: "John Dee",
      cep: "09250230",
      rua: "Alameda Campinas",
      bairro: "Jardins",
      numero: "30",
      complemento: "ap 12",
      cidade: "São Paulo",
      estado: "SP",
      email: "johndee@gmail.com",
      senha: "5555",
      telefone: "4444-8888",
      admin: false,
    };
    
    const bodyOut = {
        status: "ok",
        registro: {
            id: expect.stringMatching(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/),
            nome: "John Dee"
        }
        
    }

    const usuarioCadastrado = {
        "msg": "O usuário já está cadastrado no sistema"
      }

    test('retorno do método POST será um objeto semelhante a bodyOut', async () => {
        const response = await supertest(app)
            .post('/api/v1/user').send(bodyIn)
        expect(response.statusCode).toEqual(200)
        expect(response.body).toMatchObject(bodyOut)
        idTest = response.body.registro.id
    })

    test('retorno do método POST será um objeto usuário cadastrado', async () => {
        const response = await supertest(app)
            .post('/api/v1/user').send(bodyIn)
        expect(response.statusCode).toEqual(200)
        expect(response.body).toMatchObject(usuarioCadastrado)
    })

    test('retorno do método GET será um array de objetos', async () => {
        const response = await supertest(app)
            .get('/api/v1/user')
        expect(response.statusCode).toEqual(200)
        expect(response.body).toContainEqual(expect.objectContaining(bodyOut.registro))
    })

    test('restorno de GET com id será um objeto', async () => {
        const response = await supertest(app)
            .get('/api/v1/user/' + idTest)
        expect(response.statusCode).toEqual(200)
        expect(response.body).toMatchObject(bodyOut.registro)
    })

    test('retorno do método PUT será um objeto', async () => {
        const response = await supertest(app)
            .put('/api/v1/user/' + idTest)
            .send({
                telefone: "2222-2222"
            })
        expect(response.statusCode).toEqual(200)
        expect(response.body).toEqual(expect.objectContaining({
            telefone: "2222-2222"
        }))
    })

    test('retorno do delete será um objeto', async () => {
        const response = await supertest(app)
            .delete('/api/v1/user/' + idTest)
        expect(response.body).toMatchObject({
            delete: idTest
        })
    })
})