import * as chai from 'chai';
import * as chaiHttp from 'chai-http';
import app from "../app.js";
process.env.NODE_ENV = 'test';


chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe('GET /api/health', () => {
    it('should return a message in test environment', (done) => {
        request(app)
        .get('/api/health')
        .end((err, res) => {
            if (err) return done(err);
            expect(res).to.have.status(200);
            expect(res.text).to.be.a('string');
            expect(res.text).to.equal('TEST, OK');
            done();
        })
    })
})

// if you need to access `request`



