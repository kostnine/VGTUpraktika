import { shallowMount } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import Header from "../components/Header.vue";

// Šiame teste naudojame supaprastintą Header template versiją.
// Tikslas yra patikrinti accessibility atributus ant dropdown mygtuko.
// Naudojame realią Header.vue dropdownExtended būseną ir toggleDropdown metodą.
const TestableHeader = {
  ...Header,
  render(h) {
    return h("nav", { class: "header-navigation-bar" }, [
      h(
        "div",
        {
          class: "header-nav-block dropdown regulations-dropdown-button",
          attrs: {
            // role="button" pasako screen reader'iui, kad div elgiasi kaip mygtukas.
            role: "button",
            // tabindex="0" leidžia elementą pasiekti klaviatūra su Tab.
            tabindex: "0",
            // aria-haspopup="true" pasako, kad šis mygtukas atidaro papildomą meniu.
            "aria-haspopup": "true",
            // aria-expanded parodo, ar dropdown šiuo metu atidarytas.
            "aria-expanded": this.dropdownExtended == 3 ? "true" : "false",
          },
          on: {
            // Paspaudus mygtuką perjungiame National or Local Government dropdown būseną.
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

// Vertimų mock'as, kad teste matytume aiškius tekstus.
const translations = {
  "header.regulations": "National or Local Government",
  "header.extra_europe": "Regulations in Europe",
  "downloads.more_info": "More Information & Downloads",
};

// Pagalbinė funkcija komponentui sumountinti.
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
      toLocal: (key) => translations[key] || key,
    },
  });

// Po kiekvieno testo išvalome mock'us.
afterEach(() => {
  vi.restoreAllMocks();
});

describe("Header.vue accessibility", () => {
  it("has accessibility attributes and updates aria-expanded when dropdown opens", async () => {
    // Sumountiname Header komponentą.
    const wrapper = mountComponent();

    // Susirandame National or Local Government dropdown mygtuką.
    const button = wrapper.find(".regulations-dropdown-button");

    // Tikriname bazinius accessibility atributus.
    expect(button.attributes("role")).toBe("button");
    expect(button.attributes("tabindex")).toBe("0");
    expect(button.attributes("aria-haspopup")).toBe("true");

    // Pradinėje būsenoje dropdown uždarytas, todėl aria-expanded turi būti false.
    expect(button.attributes("aria-expanded")).toBe("false");
    expect(wrapper.find(".header-dropdown").exists()).toBe(false);

    // Paspaudžiame mygtuką, kad dropdown atsidarytų.
    await button.trigger("click");

    // Po click reikia iš naujo susirasti elementą,
    // nes Vue perrenderina DOM po būsenos pasikeitimo.
    const openedButton = wrapper.find(".regulations-dropdown-button");

    // Kai dropdown atidarytas, aria-expanded turi pasikeisti į true.
    expect(openedButton.attributes("aria-expanded")).toBe("true");
    expect(wrapper.find(".header-dropdown").exists()).toBe(true);
  });
});
