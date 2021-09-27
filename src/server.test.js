import supertest from "supertest";
import app from './server'

test('GET /aplicarDesconto/10/5', async () => {
    const response = await supertest(app)
        .get('/');

    expect(response.statusCode).toEqual(200);
    expect(response.body.server_status).toEqual("ok");
})