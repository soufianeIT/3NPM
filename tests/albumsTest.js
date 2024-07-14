const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const should = chai.should();
const Album = require('../models/album');

chai.use(chaiHttp);

    // Teste la récupération de tous les albums
    describe('/GET albums', () => {
        it('it should GET all the albums', (done) => {
            chai.request(app)
                .get('/albums')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.include('<h2>Albums</h2>');
                    done();
                });
        });
    });

    

