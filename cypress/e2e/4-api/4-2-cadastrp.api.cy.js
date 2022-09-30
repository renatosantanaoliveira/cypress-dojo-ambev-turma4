/// <reference types="cypress"/>

describe('Funcionalidade cadastro via API', () => {
    it('Deve fazer o cadastro com sucesso', () => {
        let email = `renato${Math.floor(Math.random() * 100000)}@dojo.com.br`

        cy.request({
            method: 'POST',
            url: '/api/users',
            body: {
                "name": "Renato turma 4",
                "email": email,
                "password": "senha@54321"
            }
        }).then((response) => {
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('jwt');
        })
    });
});