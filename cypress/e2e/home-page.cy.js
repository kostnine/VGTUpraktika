describe('Home page', () => {
  it('opens the home page and shows content', () => {
    cy.visit('/')

    cy.get('body').should('be.visible')
    cy.get('body').should('not.be.empty')
  })
})
