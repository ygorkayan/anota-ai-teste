describe("Basic tests", () => {
  beforeEach("Accessing", () => {
    cy.visit("http://localhost:4200/");
  });

  it("should have the correct title", () => {
    cy.get("#title").should("have.text", "Teste de Desenvolvedor Front-End - Anota Ai");
  });

  it("should have the correct subtitle", () => {
    cy.get("#subtitle").should("have.text", "Ygor Kayan Joia de Araujo freitas");
  });

  it("when you put a term that we can't find should show a menssage", () => {
    cy.get("#input").click().type("any menssage to show the mmenssage bellow");
    cy.get("#not-found").should("have.text", "Termo buscado não encontrado, por favor, refaça a pesquisa.");
  });

  it("shoud show a menssge when all cards are deleted", () => {
    cy.get("#delete-card").click();
    cy.get("#delete-card").click();
    cy.get("#delete-card").click();
    cy.get("#delete-card").click();
    cy.get("#delete-card").click();
    cy.get("#delete-card").click();

    cy.get("#cards-deleted").should("have.text", "Todos os cards foram deletados, deseja recarregar?");
  });

  it("should when delete all and you click on reload-cards should get all again", () => {
    cy.get("#delete-card").click();
    cy.get("#delete-card").click();
    cy.get("#delete-card").click();
    cy.get("#delete-card").click();
    cy.get("#delete-card").click();
    cy.get("#delete-card").click();

    cy.get("#reload-cards").click();

    cy.get("#card");
  });
});
