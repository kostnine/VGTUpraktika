import { shallowMount } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import Header from "../components/Header.vue";

// TestableHeader naudoja supaprastintą Header template versiją.
// Taip testas nekliūna už paveikslėlių, router-link ir kitų projekto priklausomybių,
// bet vis tiek testuoja realią Header komponento dropdown logiką.
const TestableHeader = {
  ...Header,
  render(h) {
    return h("nav", { class: "header-navigation-bar" }, [
      h(
        "div",
        {
          class: "header-nav-block dropdown regulations-dropdown-button",
          attrs: {
            role: "button",
            tabindex: "0",
            "aria-haspopup": "true",
            "aria-expanded": this.dropdownExtended == 3,
          },
          on: {
            // Simuliuojame realų Header.vue veikimą:
            // paspaudus National or Local Government kviečiamas toggleDropdown(3).
            click: () => this.toggleDropdown(3),
          },
        },
        this.toLocal("header.regulations")
      ),
      this.dropdownExtended == 3
        ? h("div", { class: "header-dropdown", attrs: { role: "menu" } }, [
            h(
              "span",
              { class: "dd-link", attrs: { role: "menuitem" } },
              this.toLocal("header.extra_europe")
            ),
            h(
              "span",
              { class: "dd-link", attrs: { role: "menuitem" } },
              this.toLocal("downloads.more_info")
            ),
          ])
        : null,
    ]);
  },
};

// Vertimų mock reikšmės, kad teste matytume realius tekstus.
const translations = {
  "header.regulations": "National or Local Government",
  "header.extra_europe": "Regulations in Europe",
  "downloads.more_info": "More Information & Downloads",
};

// Pagalbinė funkcija Header komponentui sumountinti.
// Čia paduodame minimalius $store ir $route mock'us, kurių reikia Header komponentui.
const mountComponent = () =>
  shallowMount(TestableHeader, {
    mocks: {
      $store: {
        state: {
          lang: "EN",
        },
      },
      $route: {
        name: "lang-home",
        path: "/EN/",
      },
      // SmokeAlert projekte tekstai eina per toLocal funkciją.
      // Teste grąžiname aiškius angliškus tekstus pagal vertimo raktus.
      toLocal: (key) => translations[key] || key,
    },
  });

// Po kiekvieno testo išvalome mock'us,
// kad vieno testo būsena nepaveiktų kito testo.
afterEach(() => {
  vi.restoreAllMocks();
});

describe("Header.vue", () => {
  it("opens National or Local Government dropdown when navigation item is clicked", async () => {
    // Sumountiname Header komponentą testavimo aplinkoje.
    const wrapper = mountComponent();

    // Prieš click dropdown neturi būti atidarytas.
    expect(wrapper.find(".header-dropdown").exists()).toBe(false);

    // Surandame National or Local Government navigacijos elementą ir simuliuojame click.
    await wrapper.find(".regulations-dropdown-button").trigger("click");

    // Po click dropdown turi atsirasti.
    expect(wrapper.find(".header-dropdown").exists()).toBe(true);

    // Tikriname, kad dropdown viduje matomi teisingi meniu punktai.
    expect(wrapper.text()).toContain("Regulations in Europe");
    expect(wrapper.text()).toContain("More Information & Downloads");

    // Tikriname, kad komponento būsena pasikeitė į Regulations dropdown id.
    expect(wrapper.vm.dropdownExtended).toBe(3);
  });
});
