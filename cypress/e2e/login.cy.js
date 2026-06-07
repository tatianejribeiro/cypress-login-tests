describe('Testes de Login', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  })

  it('Login com sucesso', () => {
  cy.get('#username').type('tomsmith')
  cy.get('#password').type('SuperSecretPassword!')
  cy.get('button[type="submit"]').click()

  cy.url().should('include', '/secure')
  cy.contains('You logged into a secure area!')
  cy.contains('Logout')
})

  it('Senha inválida', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('senhaerrada')
    cy.get('button[type="submit"]').click()

    cy.contains('Your password is invalid!')
  })

  it('Usuário inválido', () => {
    cy.get('#username').type('usuariofake')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()

    cy.contains('Your username is invalid!')
  })
  it('Logout com sucesso', () => {
  cy.get('#username').type('tomsmith')
  cy.get('#password').type('SuperSecretPassword!')
  cy.get('button[type="submit"]').click()

  cy.get('.button').click()

  cy.url().should('include', '/login')
})

})