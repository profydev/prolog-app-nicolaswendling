describe("Sidebar Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("links are working", () => {
      // check that each link leads to the correct page
      cy.get("#sidebar-nav").contains("Issues").click();
      cy.url().should("eq", "http://localhost:3000/dashboard/issues");

      cy.get("#sidebar-nav").contains("Projects").click();
      cy.url().should("eq", "http://localhost:3000/dashboard");

      cy.get("#sidebar-nav").contains("Alerts").click();
      cy.url().should("eq", "http://localhost:3000/dashboard/alerts");

      cy.get("#sidebar-nav").contains("Users").click();
      cy.url().should("eq", "http://localhost:3000/dashboard/users");

      cy.get("#sidebar-nav").contains("Settings").click();
      cy.url().should("eq", "http://localhost:3000/dashboard/settings");
    });

    it("open User Client Email", () => {
      cy.get("#sidebar-nav").contains("Support").as("support-link");
      cy.get("@support-link")
        .should("have.attr", "href")
        .and(
          "include",
          "mailto:support@prolog-app.com.com?subject=Support Request: "
        );
    });

    it("is collapsible", () => {
      // collapse navigation
      cy.get("#sidebar-nav").contains("Collapse").click();

      // check that links still exist and are functionable
      cy.get("#sidebar-nav").find("a").should("have.length", 6).eq(1).click();
      cy.url().should("eq", "http://localhost:3000/dashboard/issues");

      // check that text is not rendered
      cy.get("#sidebar-nav").contains("Issues").should("not.exist");
    });
  });

  context("mobile resolution", () => {
    beforeEach(() => {
      cy.viewport("iphone-8");
    });

    function isInViewport(el: string) {
      cy.get(el).then(($el) => {
        // navigation should cover the whole screen
        const rect = $el[0].getBoundingClientRect();
        expect(rect.right).to.be.equal(rect.width);
        expect(rect.left).to.be.equal(0);
      });
    }

    function isNotInViewport(el: string) {
      cy.get(el).then(($el) => {
        // navigation should be outside of the screen
        const rect = $el[0].getBoundingClientRect();
        expect(rect.left).to.be.equal(-rect.width);
        expect(rect.right).to.be.equal(0);
      });
    }

    it("toggles sidebar navigation by clicking the menu icon", () => {
      // wait for animation to finish
      cy.wait(500);
      isNotInViewport("#sidebar-nav");

      // open mobile navigation
      cy.get("img[alt='open menu']").click();

      // wait for animation to finish
      cy.wait(500);
      isInViewport("#sidebar-nav");

      // check that all links are rendered
      cy.get("#sidebar-nav").find("a").should("have.length", 6);

      // Support button should be rendered but Collapse button not
      cy.get("#sidebar-nav").contains("Support").should("exist");
      cy.get("#sidebar-nav").contains("Collapse").should("not.be.visible");

      // close mobile navigation and check that it disappears
      cy.get("img[alt='close menu']").click();
      cy.wait(500);
      isNotInViewport("#sidebar-nav");
    });
  });
});
