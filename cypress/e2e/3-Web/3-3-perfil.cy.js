/// <reference types="cypress" />

describe('Funcionalidade: Criar Perfil', () => {

    beforeEach(() => {
        cy.fixture("usuario").then((data) => {
            cy.login(data.email, data.senha)
        })
        
        cy.visit('/criar-perfil')
    });

    it('Deve criar perfil com sucesso', () => {
        cy.get('#mui-component-select-status').click()

        // cy.get('.MuiList-root').contains('Especialista em QA').click()
        cy.get('.MuiList-root').find('li[data-value="Especialista em QA"]').click()
        // cy.contains('Especialista em QA').click()
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('Via')
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('http://www.viahub.com')
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('João Monlevade')
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('JavaScript, NodeJS, Ruby, Java')
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('renatosaantanaoliveira')
        cy.get('[data-test="profile-bio"] > .MuiInputBase-root').type('Olá, sou o Renato Santana')
        cy.get('[data-test="profile-submit"]').click()

        cy.get('[data-test="dashboard-deleteProfile"]').should('exist')
    });
});