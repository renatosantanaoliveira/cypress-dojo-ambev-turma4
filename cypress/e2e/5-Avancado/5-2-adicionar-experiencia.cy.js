/// <reference types="cypress"/>

const expPage = require('../../support/pages/add-experiencia.page')

const experiencia = {
    posicao: 'Tester',
    empresa: 'ViaHub', 
    local: 'São Paulo', 
    inicio: '01/10/2021',
    descricao: 'Experiencia em Testes'
}

describe('Funcionalidade: Adicionar Experiência', () => {
    beforeEach(() => {
        cy.fixture('usuario').then((data) => {
            cy.login(data.email, data.senha)
        })

        cy.visit('/adicionar-experiencia')
    });

    it('Deve adicionar a experiência com sucesso (Uso de page objects)', () => {
        expPage.addExperiencia('QA', 'Ambev', 'Belo Horizonte', '01/12/2020', '12/12/2021', 'Experiencia em QA')

        cy.get('[data-test="experience-delete"]').should('exist')
    });

    it('Deve adicionar a experiência como atual com sucesso (Uso de page objects)', () => {
        expPage.addExperienciaAtual(experiencia.posicao, 
                                    experiencia.empresa, 
                                    experiencia.local, 
                                    experiencia.inicio, 
                                    experiencia.descricao
                                    )

        cy.get('[data-test="experience-delete"]').should('exist')
    });
});