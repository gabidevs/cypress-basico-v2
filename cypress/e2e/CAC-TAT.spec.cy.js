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

  it('Remover delay no input',() =>{
    const text = 'Teste de envio de mensagem a central de atendimento ao cliente'
    
    cy.get('#firstName')
      .should('be.visible')
      .type('Gabriel')
      .get('#lastName')
      .should('be.visible')
      .type('Oliveira')
      .get('#email')
      .type('gabrieldev73@gmail.com')
      .get('#open-text-area')
      .type(text, {delay: 0})
      .get('button[type="submit"]')
      .click()
      .get('.success')
      .should('be.visible')
  })

  it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () =>{
    const email = 'wwpoervkwperfowrbnemgrboigtrbrt'
    const text = 'Teste de envio de mensagem a central de atendimento ao cliente'
    
    cy.get('#firstName')
      .should('be.visible')
      .type('Gabriel')
      .get('#lastName')
      .should('be.visible')
      .type('Oliveira')
      .get('#email')
      .type(email)
      .get('#open-text-area')
      .type(text, {delay: 0})
      .get('button[type="submit"]')
      .click()
      .get('.error')
      .should('be.visible')
  } )

  it('Verificar se campo telefone só aceita números', () =>{
    cy.get('#phone')
      .type('spíbfjsrb')
      .get('#phone')
      .should('have.value','')
  })

  it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {

    cy.get('#firstName')
      .should('be.visible')
      .type('Gabriel')
      .get('#lastName')
      .should('be.visible')
      .type('Oliveira')
      .get('#email')
      .type('teste4@redepos.com.br')
      .get('#phone-checkbox')
      .click()
      .get('#open-text-area')
      .type('Teste')
      .get('button[type="submit"]')
      .click()
      .get('.error')
      .should('be.visible')
  })

  it('Preenche e limpa os campos nome, sobrenome, email e telefone', () =>{
    
    cy.get('#firstName')
      .type('Gabriel')
      .should('have.value','Gabriel')
      .get('#firstName')
      .clear()
      .should('have.value', '')
      .get('#lastName')
      .type('Oliveira')
      .should('have.value','Oliveira')
      .get('#lastName')
      .clear()
      .should('have.value', '')
      .get('#email')
      .type('teste4@redepos.com.br')
      .get('#email')
      .clear()
      .should('have.value', '')
      .get('#open-text-area')
      .type('Teste')
      .get('#open-text-area')
      .clear()
      .should('have.value', '')
  })

  it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () =>{
    cy.get('button[type="submit"]')
      .click()
      .get('.error')
      .should('be.visible')
  })

  it.only('Envia o formuário com sucesso usando um comando customizado',()=>{
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')
  })



  
})
