// Šis testų blokas tikrina nuorodas pagrindiniame puslapyje.
// Tai paprastas testas, kuris padeda įsitikinti,
// kad puslapyje yra naviguojamų elementų.
describe('Links', () => {
  it('checks that the home page has links with href attributes', () => {
    // Atidarome pagrindinį puslapį.
    cy.visit('/')

    // Patikriname, kad puslapyje yra bent viena <a> nuoroda.
    // Jeigu nuorodų nebūtų, vadinasi navigacija arba turinys gali būti neužsikrovę.
    cy.get('a').should('have.length.greaterThan', 0)

    // Patikriname pirmą rastą nuorodą.
    // Ji turi turėti href atributą ir jis negali būti tuščias.
    // href nurodo, kur nuoroda veda.
    cy.get('a').first().should('have.attr', 'href').and('not.be.empty')
  })
})
