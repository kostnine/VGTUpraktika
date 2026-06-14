// Vue.nextTick leidžia palaukti, kol Vue baigs atnaujinti komponentų DOM.
import Vue from "vue";

// Tikras Vue Router bus naudojamas navigacijai tarp testinių puslapių.
import VueRouter from "vue-router";

// Tikras Vuex store perduos Header.vue pasirinktą kalbą.
import Vuex from "vuex";

// createLocalVue sukuria izoliuotą Vue kopiją tik šiam testui.
// mount pilnai atvaizduoja Header, router-link ir router-view.
import { createLocalVue, mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

// Testuojame tikrą projekto Header.vue komponentą.
import Header from "@/components/Header.vue";

// Header.vue tekstus gauna per globalią toLocal funkciją.
// Teste pateikiame tik šiam scenarijui reikalingus vertimus.
const translations = {
  "alt.logo": "European Smoke Alarm Day",
  "header.home": "Home",
  "header.regulations": "National or Local Government",
  "header.extra_europe": "Regulations in Europe",
  "downloads.more_info": "More Information & Downloads",
  "header.sm_info": "Smoke alarm information",
  "home.support": "Support",
  "header.important_facts": "Important facts",
  "header.success": "Success stories",
  "header.householders": "Householders",
  "header.about": "About Smoke Alarms",
  "header.where": "Where to install",
  "header.maintain": "Maintenance",
};

// Tai maži testiniai puslapių komponentai.
// Jie leidžia aiškiai pamatyti, kurį komponentą rodo router-view.
// Naudojame render funkcijas, nes testuose veikia Vue versija be template kompiliatoriaus.
const HomePage = {
  render(h) {
    return h("div", { class: "home-page" }, "Home page");
  },
};
const RegulationsPage = {
  render(h) {
    return h("div", { class: "regulations-page" }, "Regulations page");
  },
};

// Pagalbinė funkcija kiekvienam testui sukuria naują Router, Store ir wrapper.
// Taip testai nesidalija būsena ir nepriklauso vienas nuo kito.
const createIntegration = async () => {
  // Sukuriame atskirą Vue kopiją, kad nekeistume globalios projekto Vue būsenos.
  const localVue = createLocalVue();

  // Į testinę Vue kopiją įdiegiame tikrus Router ir Vuex pluginus.
  localVue.use(VueRouter);
  localVue.use(Vuex);

  // Header.vue naudoja windowWidth. Desktop reikšmė užtikrina,
  // kad teste būtų rodoma įprasta navigacija, o ne mobilus burger meniu.
  localVue.mixin({
    data() {
      return { windowWidth: 1200 };
    },
  });

  // Abstract režimas saugo maršrutų istoriją atmintyje.
  // Testui nereikia keisti tikro naršyklės adreso.
  const router = new VueRouter({
    mode: "abstract",
    routes: [
      { path: "/EN", component: HomePage },
      { path: "/EN/regulations", component: RegulationsPage },
    ],
  });

  // Header.vue iš store.state.lang suformuoja nuorodas, pavyzdžiui /EN/regulations.
  const store = new Vuex.Store({
    state: { lang: "EN" },
  });

  // Prieš mount nustatome pradinį maršrutą.
  await router.push("/EN");

  // Tėvinis testinis komponentas rodo tikrą Header ir tikrą router-view.
  const wrapper = mount(
    {
      render(h) {
        return h("div", [h(Header), h("router-view")]);
      },
    },
    {
      localVue,
      router,
      store,
      mocks: {
        // Mockinama tik vertimų funkcija, nes vertimų sistema nėra šio testo tikslas.
        toLocal: (key) => translations[key] || key,
      },
    }
  );

  // Grąžiname wrapper DOM tikrinimams ir router maršruto tikrinimui.
  return { wrapper, router };
};

describe("Header, Vue Router ir Vuex integracija", () => {
  it("naviguoja iš tikro Header dropdown į router-view puslapį", async () => {
    // Pasiruošimas: sukuriame visą integracinio testo aplinką.
    const { wrapper, router } = await createIntegration();

    // Pradiniame /EN maršrute router-view turi rodyti HomePage.
    expect(wrapper.find(".home-page").exists()).toBe(true);

    // Veiksmas: paspaudžiame tikro Header.vue valdžios institucijų išskleidžiamą meniu.
    await wrapper
      .find('[aria-label="National or Local Government menu"]')
      .trigger("click");

    // Atidarytame dropdown ieškome tikros router-link sugeneruotos nuorodos.
    const regulationsLink = wrapper.find('a[href="/EN/regulations"]');
    expect(regulationsLink.exists()).toBe(true);

    // Paspaudžiame nuorodą. Router turi pakeisti aktyvų maršrutą.
    await regulationsLink.trigger("click");

    // Palaukiame, kol router-view pašalins seną ir atvaizduos naują komponentą.
    await Vue.nextTick();

    // Tikriname tris integracijos rezultatus: maršrutą, naują puslapį ir seno pašalinimą.
    expect(router.currentRoute.path).toBe("/EN/regulations");
    expect(wrapper.find(".regulations-page").text()).toBe("Regulations page");
    expect(wrapper.find(".home-page").exists()).toBe(false);
  });
});
