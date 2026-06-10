describe('Links', () => {
  it('checks that the home page has links with href attributes', () => {
    cy.visit('/')

    cy.get('a').should('have.length.greaterThan', 0)
    cy.get('a').first().should('have.attr', 'href').and('not.be.empty')
  })
})
