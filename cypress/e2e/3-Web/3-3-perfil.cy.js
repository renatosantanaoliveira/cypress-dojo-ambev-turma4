/// <reference types="cypress" />

describe('Funcionalidade: Criar Perfil', () => {

    beforeEach(() => {
        cy.fixture("usuario").then((data) => {
            cy.login(data.email, data.senha)
        })
        
        cy.visit('/criar-perfil')
    });

    afterEach(() => {
        cy.screenshot()
        cy.log('Evidência gerada com sucesso')
    })

    it.skip('Deve criar perfil com sucesso', () => {
        const cargo = "Especialista em QA"

        cy.get('#mui-component-select-status').click()

        // cy.get('.MuiList-root').contains('Especialista em QA').click()
        // cy.get('.MuiList-root').find('li[data-value=' + cargo + ']').click()
        cy.get('.MuiList-root').find(`li[data-value="${cargo}"]`).click()
        cy.wait(1000)
        cy.log('Selecionado o cargo com sucesso')
        // cy.contains('Especialista em QA').click()
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('Via')
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('http://www.viahub.com')
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('João Monlevade')
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('JavaScript, NodeJS, Ruby, Java')
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('renatosaantanaoliveira')
        cy.get('[data-test="profile-bio"] > .MuiInputBase-root').type('Olá, sou o Renato Santana')
        cy.get('[data-test="profile-submit"]').click()

        cy.get('[data-test="dashboard-deleteProfil"]').should('exist')
    });
});