/// <reference types="cypress" />

const faker = require('faker-br')

describe('Funcionalidade: Cadastro', () => {
    beforeEach(() => {
        cy.visit('/cadastrar')
    });

    it.skip('Cadastrar usuário com sucesso dados no código', () => {
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type('Renato Dojo')
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type('renatodojo5@coding.com')
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('senha@54321')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('senha@54321')
        cy.get('[data-test="register-submit"]').click()

        cy.get('[data-test="dashboard-welcome"]').should('have.text',' Bem-vindo Renato Dojo')
        cy.get('.large').should('contain', 'Dashboard').and('exist')

    });

    it('Cadastrar usuário com sucesso gerando dados randomicos ou dinamicos', () => {
        let nome = `Renato de ${faker.name.lastName()}`
        let email = faker.internet.email(nome)

        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('senha@54321')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('senha@54321')
        cy.get('[data-test="register-submit"]').click()

        cy.get('[data-test="dashboard-welcome"]').should('have.text',` Bem-vindo ${nome}`)
        cy.get('.large').should('contain', 'Dashboard').and('exist')

    });
});

/*
Funcinalidade: Cadastro

Cenário: Cadastrar o usuário com sucesso
    Dado que eu esteja na tela de cadastro
    Quando eu preencher os campos obrigatórios
    Então deve direcionar para o dashboard

*/

/*
Hooks

Before (ação executado antes da suíte de teste)
visit home
login
input dados
criar uma conexao com banco de dados

BeforeEach (antes de cada cenário teste)
visit da tela login ou da dashboard

After (após a execução da suíte de teste)
finalizar a conexao com o banco de dados
gerar um arquivo csv
validar downloads

AfterEach (após cada cenário de teste)
screenshot

*/