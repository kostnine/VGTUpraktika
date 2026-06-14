// mount pilnai atvaizduos RegulationsPage ir jo tikrus vidinius komponentus.
import { mount } from "@vue/test-utils";

// vi bus reikalingas scroll ir kitų šalutinių veiksmų mockams.
import { describe, it, vi } from "vitest";

// Tai tikras tėvinis puslapis, kurio būseną ir vidinius komponentus integruosime.
import RegulationsPage from "@/views/RegulationsPage.vue";

// Country.vue siunčia vartotojo pasirinkimą į RegulationsPage.
import Country from "@/components/Country.vue";

// CountryTextBlock.vue parodo informaciją pagal parent pasirinktą šalį.
import CountryTextBlock from "@/components/CountryTextBlock.vue";

describe("RegulationsPage ir šalių komponentų integracija", () => {
  // BENDRAS SETUPAS:
  // 1. Mountink RegulationsPage su mount, ne shallowMount.
  // 2. PageHeader gali būti stubas, nes jis nedalyvauja šalies pasirinkime.
  // 3. Country ir CountryTextBlock turi likti tikri komponentai.
  // 4. Per setData sumažink country_data iki vienos Lietuvos šalies.
  // 5. Mockink toLocal, scroll ir $store, nes jie nėra šio scenarijaus tikslas.

  // Patikrink pradinę tėvinio komponento būseną: activeCountry turi būti tuščias,
  // turi būti matoma .country-select, o CountryTextBlock dar neturi egzistuoti.
  it.todo("prieš pasirenkant šalį rodo pradines instrukcijas");

  // Surask tikrą Country vidinį komponentą ir patikrink jo country prop.
  // Jame turi būti tėvinio RegulationsPage perduoti Lietuvos duomenys.
  it.todo("perduoda šalies duomenis iš RegulationsPage į Country komponentą");

  // Paspausk tikro Country komponento path. Po paspaudimo tėvinio komponento activeCountry
  // turi tapti "Lithuania", o DOM turi atsirasti CountryTextBlock.
  it.todo("paspaudus tikrą Country komponentą parodo CountryTextBlock");

  // Atsiradusiame CountryTextBlock patikrink country prop.
  // Jo reikšmė turi būti tokia pati kaip tėvinio komponento activeCountry.
  it.todo("perduoda pasirinktos šalies pavadinimą į CountryTextBlock");

  // Paspausk tikro CountryTextBlock .card-close elementą.
  // Tėvinio komponento activeCountry turi vėl tapti tuščias ir turi grįžti pradinis turinys.
  it.todo("uždarius šalies kortelę grįžta į pradinį turinį");
});

// Šios void eilutės laikinos. Pašalink jas pradėjusi naudoti importus testuose.
void mount;
void vi;
void RegulationsPage;
void Country;
void CountryTextBlock;
