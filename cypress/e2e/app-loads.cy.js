describe('Application', () => {
  it('opens the home page', () => {
    cy.visit('/')

    cy.get('body').should('be.visible')
  })
})
