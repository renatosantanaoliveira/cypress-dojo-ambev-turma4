/// <reference types="cypress"/>

describe('Funcionalidade login via API', () => {
    it('Deve fazer login com sucesso', () => {
        cy.fixture("usuario").then((data) => {
            cy.request({
                method: 'POST',
                url: '/api/auth',
                body: {
                    email: data.email,
                    password: data.senha
                }
            }).should((response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.have.property("jwt");
                expect(response.duration).be.lessThan(500)
            })
        })
    });
});