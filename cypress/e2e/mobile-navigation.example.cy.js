// Šis testų blokas tikrina visą mobilios navigacijos vartotojo kelią.
// Tai sudėtingesnis E2E scenarijus nei paprastas elemento paspaudimas,
// nes reikia keisti ekrano dydį, valdyti burger meniu, atidaryti dropdown
// ir patikrinti galutinę navigaciją.
describe('Mobile navigation', () => {
  // beforeEach paleidžiamas prieš kiekvieną it testą.
  // Kiekvienas testas prasideda nuo šių pačių pradinių sąlygų.
  beforeEach(() => {
    // Iš anksto nustatome slapukų sutikimą.
    // Tai padaro slapukų modalą nematomu, kad neuždengtų navigacijos.
    cy.setCookie('cookies_accepted', 'true')

    // Nustatome naršyklės ekrano dydį į mobilų telefoną.
    // 375 x 812 yra iPhone X dydis.
    // Tai priverčia aplikaciją rodyti mobilųjį burger meniu
    // vietoje didžiojo desktop meniu.
    cy.viewport(375, 812)

    // Atidarome pagrindinį puslapį.
    cy.visit('/')
  })

  it('opens burger menu, expands Householders dropdown and navigates to About Smoke Alarms', () => {
    // Patikriname, kad burger mygtukas yra matomas.
    // Mobile ekrane desktop meniu slepiasi, o vietoje jo rodomas burger.
    cy.get('.burger')
      .should('be.visible')
      // Pradinėje būsenoje mobilus meniu yra uždarytas.
      // aria-expanded="false" reiškia, kad meniu dar neatsidarytas.
      .and('have.attr', 'aria-expanded', 'false')

    // Paspaudžiame burger mygtuką, kad atsidarytų mobilioji navigacija.
    cy.get('.burger').click()

    // Patikriname, kad po paspaudimo burger aria-expanded pasikeitė į true.
    // Tai reiškia, kad meniu dabar yra atidarytas.
    cy.get('.burger').should('have.attr', 'aria-expanded', 'true')

    // Patikriname, kad navigacijos konteineris gavo klasę open.
    // Tai yra vizualus indikatorius, kad mobilus meniu atsidarė.
    cy.get('.header-navigation-bar').should('have.class', 'open')

    // Surandame Householders dropdown mygtuką pagal accessibility atributą.
    // aria-label yra patikimesnis selektorius nei CSS klasių sąrašas,
    // nes klasių pavadinimai gali keistis dizaino atnaujinimų metu.
    cy.get('[aria-label="Householders menu"]')
      .should('be.visible')
      // Pradinėje būsenoje Householders dropdown yra uždarytas.
      .and('have.attr', 'aria-expanded', 'false')

    // Paspaudžiame Householders mygtuką, kad atsidarytų jo dropdown.
    cy.get('[aria-label="Householders menu"]').click()

    // Patikriname, kad Householders dropdown dabar yra atidarytas.
    cy.get('[aria-label="Householders menu"]')
      .should('have.attr', 'aria-expanded', 'true')

    // Surandame atsidariusį dropdown meniu.
    // .header-dropdown yra bendras dropdown konteinerio selektorius.
    cy.get('.header-dropdown')
      .should('be.visible')
      // within() apriboja paiešką tik iki šio dropdown vidinės dalies.
      // Taip išvengiame klaidingo atitikimo su kitu dropdown.
      .within(() => {
        // Patikriname, kad Householders dropdown viduje yra About Smoke Alarms nuoroda.
        cy.contains('a', 'About Smoke Alarms').should('be.visible')
      })

    // Paspaudžiame About Smoke Alarms nuorodą.
    cy.contains('.header-dropdown a', 'About Smoke Alarms').click()

    // Patikriname, kad URL kelias pasikeitė į teisingą adresą.
    // /EN/types yra About Smoke Alarms puslapio adresas.
    cy.location('pathname').should('eq', '/EN/types')

    // Patikriname, kad naujame puslapyje matomas pagrindinis turinys.
    // Tai užtikrina ne tik URL pasikeitimą, bet ir puslapio užsikrovimą.
    cy.get('main, .main-content, body').should('be.visible')

    // Papildomas patikrinimas: po navigacijos mobilus meniu turėtų užsidaryti.
    // Tai rodo, kad aplikacija teisingai tvarko meniu būseną po vidinės navigacijos.
    cy.get('.header-navigation-bar').should('not.have.class', 'open')
    cy.get('.burger').should('have.attr', 'aria-expanded', 'false')
  })
})
