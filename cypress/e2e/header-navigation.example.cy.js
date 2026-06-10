// Šis testų blokas tikrina realų vartotojo kelią per Header navigaciją.
// Tai jau sudėtingesnis E2E testas, nes tikrinamas ne vienas elementas,
// o kelių veiksmų seka: atidaryti puslapį, atidaryti dropdown, paspausti nuorodą
// ir patikrinti, kad vartotojas pateko į teisingą puslapį.
describe('Header navigation', () => {
  // beforeEach paleidžiamas prieš kiekvieną it testą.
  // Taip kiekvienas testas prasideda vienodomis sąlygomis.
  beforeEach(() => {
    // Iš anksto nustatome slapukų sutikimą.
    // Tai daroma tam, kad cookies langas neuždengtų Header navigacijos.
    cy.setCookie('cookies_accepted', 'true')

    // Atidarome pagrindinį puslapį.
    cy.visit('/')
  })

  it('opens the government dropdown and navigates to regulations', () => {
    // Surandame National or Local Government dropdown mygtuką pagal aria-label.
    // aria-label yra stabilesnis ir aiškesnis selektorius nei ilgas CSS kelias.
    cy.get('[aria-label="National or Local Government menu"]')
      // Suteikiame rastam elementui alias vardą governmentMenu.
      // Vėliau galėsime tą patį elementą pasiekti su cy.get('@governmentMenu').
      .as('governmentMenu')
      // Patikriname, kad dropdown mygtukas yra matomas vartotojui.
      .should('be.visible')
      // Pradinėje būsenoje dropdown turi būti uždarytas.
      // aria-expanded="false" reiškia, kad meniu neišskleistas.
      .and('have.attr', 'aria-expanded', 'false')

    // Paspaudžiame National or Local Government dropdown mygtuką.
    cy.get('@governmentMenu').click()

    // Po paspaudimo aria-expanded turi pasikeisti į true.
    // Tai reiškia, kad dropdown meniu atsidarė.
    cy.get('@governmentMenu').should('have.attr', 'aria-expanded', 'true')

    // Surandame atsidariusį dropdown meniu.
    cy.get('.header-dropdown')
      // Patikriname, kad dropdown yra matomas.
      .should('be.visible')
      // within apriboja paiešką tik iki dropdown vidinės dalies.
      // Taip testas netyčia nepasirinks tokio pat teksto iš kitos puslapio vietos.
      .within(() => {
        // Patikriname, kad dropdown viduje yra Regulations in Europe nuoroda.
        cy.contains('a', 'Regulations in Europe').should('be.visible')

        // Patikriname, kad dropdown viduje yra More Information & Downloads nuoroda.
        cy.contains('a', 'More Information & Downloads').should('be.visible')
      })

    // Paspaudžiame Regulations in Europe nuorodą dropdown viduje.
    cy.contains('.header-dropdown a', 'Regulations in Europe').click()

    // Patikriname, kad po paspaudimo URL kelias yra teisingas.
    // Tai patvirtina, kad navigacija tikrai įvyko.
    cy.location('pathname').should('eq', '/EN/regulations')

    // Patikriname, kad naujame puslapyje matomas teisingas puslapio pavadinimas.
    // Taip užtikriname ne tik URL pasikeitimą, bet ir puslapio turinio užsikrovimą.
    cy.get('#page-title').should('contain.text', 'Regulations in Europe')
  })
})