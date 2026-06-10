// Šis testų blokas skirtas pagrindinio puslapio patikrinimui.
// Čia tikriname ne tik tai, kad puslapis atsidaro,
// bet ir tai, kad jame yra bent kažkoks turinys.
describe('Home page', () => {
  it('opens the home page and shows content', () => {
    // Atidarome pagrindinį puslapį.
    // Cypress naudoja baseUrl iš cypress.config.js.
    cy.visit('/')

    // Patikriname, kad body yra matomas vartotojui.
    cy.get('body').should('be.visible')

    // Patikriname, kad body nėra tuščias.
    // Tai apsaugo nuo situacijos, kai puslapis techniškai atsidaro,
    // bet aplikacijos turinys nėra užrenderinamas.
    cy.get('body').should('not.be.empty')
  })
})
