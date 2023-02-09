// <reference types="cypress" />
describe("réinitialisation mot de passe", () => {
  it('connexion BackMarket', () => {
      cy.intercept({
          url: 'https://preprod.backmarket.fr/bm/lost-password',
          method: 'POST'
        }).as('waitEmail')
      cy.visit(' https://preprod.backmarket.fr/fr-fr/password-reset');
      cy.get('[data-qa="accept-cta"] > .MkLAMntR').click();
      cy.get('#email').type('94a713f9-20d6-4099-838a-980451367b9f@mailslurp.com');
      cy.get('[data-test="password-reset-submit-button"]').click();
      cy.wait('@waitEmail');
     cy.mailslurp()
     .then(mailslurp =>
      mailslurp.waitForLatestEmail('94a713f9-20d6-4099-838a-980451367b9f', 40000, true))
     .then(email =>
     // expect(email.subject).to.contain("Nouveau mot de passe"))
      cy.document().invoke('write', email.body));
      cy.get('[class="t_fz15px t_fwbold t_fsnormal t_w100p m_fwbold m_fsnormal m_w100p"]').click();
      cy.get('#newPassword').type('Manbob1!');
      cy.get('#newPasswordConfirmation').type('Manbob1!');
      cy.get('.MkLAMntR').click();
      cy.get('[class="_1xMx-RYw _3jgXaWY4 _1ayVgG8s"]').should("contain","Welcome Back!");
       cy.get('#signin-email').type('94a713f9-20d6-4099-838a-980451367b9f@mailslurp.com');
       cy.get('#signin-password').type('Manbob1!');
       cy.get('[data-qa="signin-submit-button"]').click();
  })
})