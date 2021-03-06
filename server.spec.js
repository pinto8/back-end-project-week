const request = require('supertest');
const server = require('./server');
const mongoose = require('mongoose');


describe('server', () => {
    beforeAll(() => {
      console.log('starting server tests')
        return mongoose
            .connect('mongodb://caroline:lambda1@ds141611.mlab.com:41611/backend-week')
            .then(() => console.log('\n=== connected to TEST DB ==='))
            .catch(err => {
                console.log('error connecting to TEST database');
            });
    });

    afterAll(() => {
        return mongoose
            .disconnect()
            .then(() => console.log('\n=== disconnected from TEST DB ==='));
    });

    it('has a GET / endpoint', async () => {
        await request(server)
            .get('/')
            .expect(200)
    })

    it('has a GET / endpoint that returns 200', async () => {
        await request(server)
            .get('/')
            .expect(200)
    })

    it('has a GET / endpoint that returns json', async () => {
        const expectedJSON = { msg: "Connected" }
        const response = await request(server).get('/')
        expect(response.body).toEqual(expectedJSON)
    })

})