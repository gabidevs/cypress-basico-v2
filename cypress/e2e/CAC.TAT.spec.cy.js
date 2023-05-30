//Automação básica de cypress, curso TAT

describe('Hooks', () => {

  beforeEach(function(){
    cy.visit('../src/index.html')
      .title()
      .should('eq','Central de Atendimento ao Cliente TAT')
  })

  it('passes', () => {
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
      .get('button[type="submit"]')
      .click()
      .get('.success')
      .should('be.visible')
})
})

/* describe('template spec', () => {
  it('passes', () => {
    cy.visit('../src/index.html')
    cy.title().should('eq','Central de Atendimento ao Cliente TAT')
    cy.get('#firstName')
      .should('be.visible')
      .type('Gabriel')
      .get('#lastName')
      .should('be.visible')
      .type('Oliveira')
      
  })
}) */