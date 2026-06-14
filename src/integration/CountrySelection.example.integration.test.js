// mount pilnai atvaizduoja testuojamą komponentą ir jo tikrus vidinius komponentus.
// Integration teste tai svarbu, nes norime tikrinti ne izoliuotą Country.vue,
// o jo bendradarbiavimą su tėviniu komponentu.
import { mount } from "@vue/test-utils";

// describe sukuria susijusių testų grupę.
// it aprašo vieną konkretų scenarijų.
// expect patikrina, ar gautas rezultatas sutampa su tikėtinu rezultatu.
import { describe, expect, it } from "vitest";

// Importuojame tikrą SmokeAlert Country.vue komponentą.
import Country from "@/components/Country.vue";

// Tai nedidelis testinis tėvinis komponentas.
// Jis imituoja tikrą puslapį, kuris rodo Country.vue ir saugo pasirinktą šalį.
const CountrySelection = {
  // Užregistruojame tikrą Country.vue, kad jis nebūtų pakeistas stubu.
  components: { Country },

  // data saugo tėvinio komponento būseną ir duomenis, perduodamus į Country.vue.
  data() {
    return {
      // Pradžioje vartotojas dar nėra pasirinkęs šalies.
      selectedCountry: "",

      // Šis objektas per country prop perduodamas į Country.vue.
      country: {
        name: "Lithuania",
        // Supaprastintas SVG kelias, kurio pakanka testui.
        svg: "M0 0 L10 10",
        // Spalva Country.vue komponente reiškia "Multiple requirements".
        fill: "#a2bbe5",
      },
    };
  },

  methods: {
    // Šią tėvinio komponento funkciją perduodame į Country.vue per setActiveCountry prop.
    // Kai vartotojas paspaudžia šalį, Country.vue iškviečia šį metodą.
    selectCountry(countryName) {
      this.selectedCountry = countryName;
    },
  },

  // Template parodo, kaip tėvinis ir vidinis komponentai sujungti tarpusavyje.
  // selectedCountry perduodamas į Country.vue ir kartu rodomas <p> elemente.
  template: `
    <section>
      <svg>
        <Country
          :country="country"
          :setActiveCountry="selectCountry"
          :activeSelectedCountry="selectedCountry"
        />
      </svg>
      <p class="selected-country">
        {{ selectedCountry || "No country selected" }}
      </p>
    </section>
  `,
};

describe("Šalies pasirinkimo integracija", () => {
  it("atnaujina parent būseną paspaudus tikrą Country komponentą", async () => {
    // Pasiruošimas: pilnai sumountiname tėvinį komponentą kartu su tikru Country.vue.
    const wrapper = mount(CountrySelection);

    // Patikrinimas: prieš vartotojo veiksmą šalis dar neturi būti pasirinkta.
    expect(wrapper.find(".selected-country").text()).toBe(
      "No country selected"
    );

    // Veiksmas: surandame tikrą Country vidinį komponentą ir paspaudžiame jo SVG path.
    // await palaukia, kol Vue apdoros click ir atnaujins DOM.
    await wrapper.findComponent(Country).find("path").trigger("click");

    // Patikrinimas: Country.vue iškvietė tėvinio komponento metodą, todėl tekstas pasikeitė.
    expect(wrapper.find(".selected-country").text()).toBe("Lithuania");

    // Pasikeitusi tėvinio komponento būsena grįžo į Country.vue per activeSelectedCountry prop.
    expect(wrapper.findComponent(Country).props("activeSelectedCountry")).toBe(
      "Lithuania"
    );

    // Tikriname vartotojui ir ekrano skaitytuvui prieinamą galutinį rezultatą.
    expect(wrapper.find("path").attributes("aria-pressed")).toBe("true");
  });
});
