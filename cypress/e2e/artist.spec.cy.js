describe("Artist", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("visit pagina de inicio", () => {
    cy.contains("Redefiniendo tu estilo!!");
  });

  it("login", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('[name="email"]').type("alex18escorpio@gmail.com");
    cy.get('[name="password"]').type("123456789");
    cy.get('[name="test-iniciar-sesion"]').click();
  });

  it(" register package", () => {
    cy.visit("http://localhost:3000/package/create");
    cy.get('[name="title"]').type("paquete de prueba");
    cy.get('[name="description"]').type("descripcion de prueba");
    cy.get('[name="price"]').type(12);
    cy.get('[name="btn-registrar"]').click();
  });

  it(" register artist", () => {
    cy.visit("http://localhost:3000/artist/create");
    cy.get('[name="test-tegister"]').type("artist de prueba");
    cy.get('[name="test-register"]').click();
  });
});
