// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName')
      .should('be.visible')
      .type('Gabriel')
      .get('#lastName')
      .should('be.visible')
      .type('Oliveira')
      .get('#email')
      .type('gabrieldev73@gmail.com')
      .get('#open-text-area')
      .type('Teste de envio de mensagem a central de atendimento ao cliente')
      
    cy.contains('button','Enviar')
      .click()
      .get('.success')
      .should('be.visible')
})

