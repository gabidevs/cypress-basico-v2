//Automação básica de cypress, curso TAT

describe('template spec', () => {
  it('passes', () => {
    cy.visit('../src/index.html')
    cy.title().should('eq','Central de Atendimento ao Cliente TAT')
    cy.get('#firstName')
      .type('Gabriel')
      .get('#lastName')
      .type('Oliveira')
      
  })
})