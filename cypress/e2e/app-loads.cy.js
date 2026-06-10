// Šis testų blokas tikrina bazinį aplikacijos užsikrovimą.
// Tai pats paprasčiausias E2E testas, kuris padeda įsitikinti,
// kad frontend serveris veikia ir pagrindinis puslapis atsidaro naršyklėje.
describe('Application', () => {
  it('opens the home page', () => {
    // cy.visit('/') atidaro pagrindinį puslapį.
    // Kadangi cypress.config.js yra nurodytas baseUrl,
    // Cypress realiai atidarys http://localhost:8080/
    cy.visit('/')

    // Tikriname, kad puslapio body elementas yra matomas.
    // Jeigu aplikacija neužsikrautų arba būtų tuščias/baltas ekranas,
    // šis patikrinimas pradėtų kristi.
    cy.get('body').should('be.visible')
  })
})
