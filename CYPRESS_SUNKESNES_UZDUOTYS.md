# Cypress E2E: pavyzdys ir dvi sunkesnės užduotys

## Tikslas

Pereiti nuo paprastų Cypress patikrinimų prie realių vartotojo scenarijų.

Ankstesni testai tikrino, ar:

- puslapis atsidaro;
- `body` yra matomas;
- puslapyje yra nuorodų;
- nuoroda turi `href` atributą.

Dabar testuosime ne vieną elementą, o kelių veiksmų seką:

1. vartotojas atidaro puslapį;
2. atlieka veiksmą;
3. aplikacijos būsena pasikeičia;
4. vartotojas patenka į kitą puslapį arba jo pasirinkimas išsaugomas;
5. Cypress patikrina galutinį rezultatą.

Prieš testus frontend serverį paleisk atskirame terminale:

```bash
npm run serve
```

Testus paleisk kitame terminale:

```bash
npm run cy:run
```

Vieną konkretų testų failą galima paleisti taip:

```bash
npm run cy:run -- --spec cypress/e2e/header-navigation.example.cy.js
```

---

## Pavyzdys: dropdown atidarymas ir navigacija

### Tikslas

Patikrinti realų vartotojo kelią pagrindinėje navigacijoje:

1. vartotojas atidaro anglišką pagrindinį puslapį;
2. paspaudžia `National or Local Government`;
3. pamato dropdown meniu;
4. paspaudžia `Regulations in Europe`;
5. patenka į reglamentų puslapį.

Pavyzdžio failas:

```text
cypress/e2e/header-navigation.example.cy.js
```

### Pavyzdinis testas

```js
describe('Header navigation', () => {
  beforeEach(() => {
    cy.setCookie('cookies_accepted', 'true')
    cy.visit('/')
  })

  it('opens the government dropdown and navigates to regulations', () => {
    cy.get('[aria-label="National or Local Government menu"]')
      .as('governmentMenu')
      .should('be.visible')
      .and('have.attr', 'aria-expanded', 'false')

    cy.get('@governmentMenu').click()

    cy.get('@governmentMenu')
      .should('have.attr', 'aria-expanded', 'true')

    cy.get('.header-dropdown')
      .should('be.visible')
      .within(() => {
        cy.contains('a', 'Regulations in Europe').should('be.visible')
        cy.contains('a', 'More Information & Downloads').should('be.visible')
      })

    cy.contains('.header-dropdown a', 'Regulations in Europe').click()

    cy.location('pathname').should('eq', '/EN/regulations')
    cy.get('#page-title').should('contain.text', 'Regulations in Europe')
  })
})
```

### Ką daro svarbiausios komandos

`beforeEach()` paleidžiamas prieš kiekvieną `it()` testą. Taip kiekvienas testas pradeda darbą vienodomis sąlygomis.

`cy.setCookie('cookies_accepted', 'true')` iš anksto nustato slapukų sutikimą, kad slapukų langas neuždengtų navigacijos.

`cy.get(...).as('governmentMenu')` suranda elementą ir suteikia jam trumpą vardą. Vėliau tą patį elementą galima pasiekti su `cy.get('@governmentMenu')`.

`aria-expanded="false"` reiškia, kad dropdown yra uždarytas. Po paspaudimo atributas turi pasikeisti į `true`.

`within()` apriboja elementų paiešką iki konkretaus dropdown. Taip testas netyčia nepasirenka tokio pat teksto kitoje puslapio vietoje.

`cy.location('pathname')` patikrina ne tik paspaudimą, bet ir tikrą navigacijos rezultatą.

### Ką šis testas apsaugo

Testas pradėtų kristi, jeigu:

- dropdown mygtukas nebereaguotų į paspaudimą;
- nepasikeistų `aria-expanded`;
- dropdown nerodytų reikalingų nuorodų;
- nuoroda vestų neteisingu adresu;
- reglamentų puslapis neužsikrautų.

---

## Užduotis 1: mobili navigacija nuo burger meniu iki puslapio

### Sudėtingumas

Vidutinis–sunkus.

### Tikslas

Sukurti Cypress testą, kuris patikrina visą mobilios navigacijos vartotojo kelią.

Testo failas:

```text
cypress/e2e/mobile-navigation.cy.js
```

### Vartotojo scenarijus

Vartotojas atidaro svetainę telefonu, atveria burger meniu, atidaro `Householders` dropdown ir pasirenka `About Smoke Alarms`.

### Reikalavimai

Testas turi:

1. nustatyti mobilų ekrano dydį, pavyzdžiui, `375 x 812`;
2. nustatyti `cookies_accepted` slapuką;
3. atidaryti `/`;
4. patikrinti, kad `.burger` yra matomas;
5. prieš paspaudimą patikrinti, kad burger turi `aria-expanded="false"`;
6. paspausti burger mygtuką;
7. patikrinti, kad `aria-expanded` pasikeitė į `true`;
8. patikrinti, kad navigacija turi klasę `open`;
9. atidaryti `Householders` dropdown;
10. patikrinti, kad dropdown rodo `About Smoke Alarms`;
11. paspausti `About Smoke Alarms`;
12. patikrinti, kad URL kelias tapo `/EN/types`;
13. patikrinti, kad naujame puslapyje matomas pagrindinis turinys.

### Hintai

Mobilų ekraną nustatyk su:

```js
cy.viewport(375, 812)
```

Burger elementas:

```js
cy.get('.burger')
```

Navigacijos elementas:

```js
cy.get('.header-navigation-bar')
```

`Householders` mygtuką galima rasti pagal jo accessibility atributą:

```js
cy.get('[aria-label="Householders menu"]')
```

URL patikrinimas:

```js
cy.location('pathname').should('eq', '/EN/types')
```

### Papildomas iššūkis

Po navigacijos patikrink, kad mobilus meniu automatiškai užsidarė.

### Vertinimo kriterijai

- Testas tikrina ne tik elementų egzistavimą, bet ir būsenų pasikeitimą.
- Naudojami stabilūs selektoriai arba accessibility atributai.
- Patikrinamas galutinis URL ir naujo puslapio turinys.
- Teste nėra nereikalingų `cy.wait()` komandų.
- Testas stabiliai praeina paleidus kelis kartus.

---

## Užduotis 2: slapukų pasirinkimo išsaugojimas

### Sudėtingumas

Sunkus.

### Tikslas

Patikrinti, kad vartotojo slapukų pasirinkimas išsaugomas naršyklėje ir galioja po puslapio perkrovimo.

Testo failas:

```text
cypress/e2e/cookie-consent.cy.js
```

### Kodėl ši užduotis sudėtingesnė

Čia tikrinamas ne tik matomas elementas. Reikia valdyti ir tikrinti naršyklės būseną:

- išvalyti ankstesnius slapukus;
- atlikti vartotojo pasirinkimą;
- patikrinti sukurto slapuko reikšmę;
- perkrauti puslapį;
- įsitikinti, kad aplikacija prisimena pasirinkimą.

### Reikalavimai

Faile parašyk du testus.

#### Testas 1: sutikimas išsaugomas

Testas turi:

1. prieš puslapio atidarymą išvalyti visus slapukus;
2. atidaryti `/`;
3. patikrinti, kad `.cookie-modal` yra matomas;
4. rasti ir paspausti mygtuką `Allow all cookies`;
5. patikrinti, kad `.cookie-modal` dingo;
6. patikrinti, kad egzistuoja `cookies_accepted` slapukas;
7. patikrinti, kad jo reikšmė yra `true`;
8. perkrauti puslapį;
9. patikrinti, kad slapukų langas daugiau nepasirodo.

#### Testas 2: išvalius slapuką langas grįžta

Testas turi:

1. nustatyti `cookies_accepted` slapuką;
2. atidaryti `/`;
3. patikrinti, kad `.cookie-modal` nerodomas;
4. išvalyti `cookies_accepted` slapuką;
5. perkrauti puslapį;
6. patikrinti, kad `.cookie-modal` vėl matomas.

### Hintai

Visų slapukų išvalymas:

```js
cy.clearAllCookies()
```

Vieno slapuko tikrinimas:

```js
cy.getCookie('cookies_accepted')
```

Slapuko reikšmės tikrinimas:

```js
cy.getCookie('cookies_accepted')
  .should('exist')
  .and('have.property', 'value', 'true')
```

Puslapio perkrovimas:

```js
cy.reload()
```

Vieno slapuko išvalymas:

```js
cy.clearCookie('cookies_accepted')
```

### Papildomas iššūkis

Atidaryk `Manage choices >` langą ir patikrink, kad:

- mažas slapukų langas pasislepia;
- `.cookie-big-modal` tampa matomas;
- lange yra bent du `checkbox` elementai;
- uždarius pasirinkimų langą vėl parodomas pradinis slapukų langas.

### Vertinimo kriterijai

- Kiekvienas testas pats pasiruošia reikalingą naršyklės būseną.
- Testai nepriklauso nuo jų paleidimo eilės.
- Patikrinamas ir UI, ir tikras naršyklės slapukas.
- Patikrinamas elgesys po `cy.reload()`.
- Testai neturi fiksuotų laukimo laikų.

---

## Galutinis rezultatas

Atlikus visas užduotis kataloge turėtų būti:

```text
cypress/e2e/header-navigation.example.cy.js
cypress/e2e/mobile-navigation.cy.js
cypress/e2e/cookie-consent.cy.js
```

Pavyzdinis testas jau pateiktas. Kitus du failus praktikantė turi sukurti savarankiškai pagal reikalavimus.
