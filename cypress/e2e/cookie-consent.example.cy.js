// Šis testų blokas tikrina slapukų sutikimo modalą ir jo elgseną.
// Tai sudėtingesnis testas, nes reikia valdyti naršyklės slapukus,
// o ne tik matomus HTML elementus.
// Testai turi būti nepriklausomi vienas nuo kito,
// todėl kiekvienas pats pasiruošia reikalingą slapukų būseną.
describe('Cookie consent', () => {
  // Testas 1: sutikimas išsaugomas po puslapio perkrovimo.
  it('accepts cookies and remembers the choice after reload', () => {
    // Prieš testą išvalome visus slapukus.
    // Tai simuliuoja pirmąjį apsilankymą, kai vartotojas dar nėra sutikęs.
    cy.clearAllCookies()

    // Atidarome pagrindinį puslapį.
    cy.visit('/')

    // Patikriname, kad slapukų sutikimo modalas yra matomas.
    // Tai reiškia, kad aplikacija pastebėjo, jog slapukas dar neegzistuoja.
    cy.get('.cookie-modal').should('be.visible')

    // Surandame ir paspaudžiame mygtuką "Allow all cookies".
    // contains ieško teksto visame puslapyje, todėl nereikia žinoti tikslaus selektoriaus.
    cy.contains('Allow all cookies').click()

    // Po paspaudimo modalas turėtų pranykti.
    cy.get('.cookie-modal').should('not.exist')

    // Patikriname, kad naršyklėje sukurtas cookies_accepted slapukas.
    // getCookie tikrina tikrą naršyklės slapuką, o ne DOM elementą.
    cy.getCookie('cookies_accepted')
      .should('exist')
      // Patikriname slapuko reikšmę.
      // have.property tikrina objekto savybę, kurią grąžina Cypress.
      .and('have.property', 'value', 'true')

    // Perkrauname puslapį.
    // reload() imituoja vartotojo puslapio perkrovimą.
    cy.reload()

    // Patikriname, kad po perkrovimo slapukų modalas daugiau nepasirodo.
    // Tai įrodo, kad aplikacija prisimena vartotojo pasirinkimą.
    cy.get('.cookie-modal').should('not.exist')
  })

  // Testas 2: ištrynus slapuką modalas vėl pasirodo.
  it('shows the cookie modal again after clearing the cookie', () => {
    // Iš anksto nustatome slapuką, kad simuliuotume anksčiau sutikusį vartotoją.
    cy.setCookie('cookies_accepted', 'true')

    // Atidarome pagrindinį puslapį.
    cy.visit('/')

    // Patikriname, kad slapukų modalas nerodomas.
    // not.exist reiškia, kad elemento apskritai nėra DOM'e.
    cy.get('.cookie-modal').should('not.exist')

    // Ištriname slapuką, imituodami vartotojo naršyklės duomenų išvalymą.
    cy.clearCookie('cookies_accepted')

    // Perkrauname puslapį.
    // Po reload aplikacija vėl nematys slapuko ir turėtų parodyti modalą.
    cy.reload()

    // Patikriname, kad slapukų modalas vėl yra matomas.
    cy.get('.cookie-modal').should('be.visible')
  })

  // Testas 3: papildomas iššūkis — Manage choices modalas.
  it('opens Manage choices modal and shows checkboxes', () => {
    // Išvalome slapukus, kad pamatytume pradinį modalą.
    cy.clearAllCookies()

    // Atidarome pagrindinį puslapį.
    cy.visit('/')

    // Patikriname, kad mažas slapukų modalas yra matomas.
    cy.get('.cookie-modal').should('be.visible')

    // Paspaudžiame mygtuką, kuris atidaro detalesnius slapukų pasirinkimus.
    cy.contains('Manage choices').click()

    // Mažas modalas turėtų pranykti.
    cy.get('.cookie-modal').should('not.exist')

    // Turėtų pasirodyti didesnis pasirinkimų modalas.
    cy.get('.cookie-big-modal').should('be.visible')

    // Patikriname, kad modalas turi bent du checkbox elementus.
    // Tai rodo, kad vartotojas gali valdyti skirtingas slapukų kategorijas.
    cy.get('.cookie-big-modal input[type="checkbox"]')
      .should('have.length.at.least', 2)

    // Uždarome didelį modalą, paspausdami atitinkamą mygtuką.
    // Čia reikia pakeisti selektorių pagal tikrą mygtuko tekstą.
    // Pavyzdžiui: cy.contains('Close').click() arba cy.get('.close-button').click()

    // Po uždarymo vėl turėtų pasirodyti pradinis mažas modalas.
    // cy.get('.cookie-modal').should('be.visible')
  })
})
