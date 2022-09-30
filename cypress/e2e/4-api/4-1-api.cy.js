describe('Teste de API', () => {
    //simulacao da corpo retorna por minha requisição da API que é o mesmo que body
    const dojo = {
        aula: "API",
        duracao: 3,
        professor: "Renato"
    }

    it('Validar dojo', () => {
        expect(dojo.aula).to.equal('API')
        expect(dojo.duracao).to.be.greaterThan(1);
        expect(dojo.professor).to.equal('Renato')
    });

    var numero = [0, 2, 4, 6, 8, 10]

    it('Validar numeros', () => {
        cy.log(`Posicao 1 do array ${numero[1]}`)

        expect(numero).to.have.lengthOf(6);
        expect(numero[2]).to.eql(4);
    });

    const alunos = [
        {usuario: "william", cargo: "qa"},
        {usuario: "graciane", cargo: "qa"}
    ]

    it('Validar alunos', () => {
        expect(alunos[0].usuario).to.equal("william");
        expect(alunos[1].cargo).to.equal("qa");
    });
});