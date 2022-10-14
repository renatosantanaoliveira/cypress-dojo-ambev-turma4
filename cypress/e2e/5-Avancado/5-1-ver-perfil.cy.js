/// <reference types="Cypress"/>

import mkperfis from '../../fixtures/perfis.json'

const options = {
    method: 'GET',
    url: 'api/profile'
}

const resposta = {
    statusCode: 200,
    body: mkperfis
}

describe('Funcionalidade: Ver perfis', () => {
    beforeEach(() => {
        cy.visit('/perfis')
    });

    it('Deve validar o primeiro item da lista', () => {
        cy.fixture('perfis').then((mockperfis) => {
            cy.intercept('GET', 'api/profile', {
                statusCode: 200,
                body: mockperfis
            })
        })

        cy.reload()
        cy.get('[data-test="profile-name"]').first().should('have.text', 'Paulo Guerra')
    });

    it('Deve validar o ultimo item da lista', () => {
        cy.intercept(options, resposta).as('getPerfis')

        cy.visit('/perfis')
        cy.get('[data-test="profile-name"]').last().should('have.text', mkperfis[3].user.name)
    });

    it('Deve validar o terceiro item da lista do front', () => {
        cy.intercept('**/api/profile**').as('loadPerfis')
        cy.visit('/perfis')
        cy.wait('@loadPerfis')
        cy.get('[data-test="profile-name"]').eq(2).should('have.text', 'Pa Sun')
    })
})