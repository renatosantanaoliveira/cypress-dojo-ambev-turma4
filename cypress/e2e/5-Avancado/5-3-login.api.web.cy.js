/// <reference types="cypress"/>

import user from '../../fixtures/usuario.json'

describe('Funcionalidade: Login via API e acesso ao Perfil', () => {
    beforeEach(() => {
        cy.gerarToken(user.email, user.senha).then((tkn) => {
            Cypress.env('token', tkn)
        })
    });

    it('Validar uso com Cypress.env', () => {
        //lendo do arquivo cypress.env.json no root da pasta
        cy.log(Cypress.env('usuario'))

        //lendo variavel de ambiente dinamica
        cy.log(Cypress.env('token'))
    });

    it.only('Deve acessar o perfil com o login realizado via API', () => {
        cy.clearCookies()
        cy.setCookie('jwt', Cypress.env('token'))
        
        cy.visit('/adicionar-experiencia')
        cy.get('.large').should('contain','Adicionar Experiência Profissional')
    });
});