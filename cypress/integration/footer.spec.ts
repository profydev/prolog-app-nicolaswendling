describe("Footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("Version is in the Footer", () => {
      cy.get("#version").should("have.text", "Version: 14.5.1");
    });

    it("Links are in the Footer", () => {
      cy.get("#footer-nav").contains("Docs").should("have.text", "Docs");
      cy.get("#footer-nav").contains("API").should("have.text", "API");
      cy.get("#footer-nav").contains("Help").should("have.text", "Help");
      cy.get("#footer-nav")
        .contains("Community")
        .should("have.text", "Community");
    });

    it("Logo is in the Footer", () => {
      cy.get("#footer-logo").should("have.attr", "alt", "logo");
      cy.get("#footer-logo").should(
        "have.attr",
        "src",
        "/icons/logo-small.svg"
      );
    });
  });
});
