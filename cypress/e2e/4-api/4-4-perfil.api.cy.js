/// <reference types="cypress"/>

import user from "../../fixtures/usuario.json";
let token;

describe("Funcionalidade perfil via API", () => {
  beforeEach(() => {
      cy.log('hooks')
      cy.gerarToken(user.email, user.senha).then((tkn) => {
          token = tkn
      })
  });
  it("[GET] - Deve consultar perfil do usuário", () => {
    cy.request({
      method: "POST",
      url: "api/auth",
      body: {
        email: user.email,
        password: user.senha,
      },
    }).then((response) => {
      let jwt = response.body.jwt;

      const options = {
        method: "GET",
        url: "/api/profile/me",
        headers: {
          cookie: jwt,
        },
      };

      cy.request(options).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.githubusername).to.equal("renatosaantanaoliveira");
        expect(response.body.skills[1]).to.equal("NodeJS");
      });
    });
  });

  it("[GET] - Deve consultar perfil do usuário - Usando token dinâmico pelo hook", () => {
    const options = {
      method: "GET",
      url: "/api/profile/me",
      headers: {
        cookie: token,
      },
    };

    cy.request(options).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.githubusername).to.equal("renatosaantanaoliveira");
      expect(response.body.skills[1]).to.equal("NodeJS");
    });
  });

  it.only('[PUT] - Deve adicionar experiência profissional do usuário', () => {
    const bodyRequest = {
        title: "QA Especialist",
        company: "Via",
        from: "2022-09-08"
    }

    const options = {
        method: "PUT",
        url: "/api/profile/experience",
        headers: {
            cookie: token,
        },
        body: bodyRequest
    }

    cy.request(options).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.experience[0].title).to.equal(bodyRequest.title);
        expect(response.body.experience[0].company).to.equal(bodyRequest.company);
    })
  });
});
