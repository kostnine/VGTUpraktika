import { shallowMount } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import Header from "../components/Header.vue";

// Šiame teste naudojame supaprastintą Header template versiją.
// Mums nereikia testuoti viso Header HTML, paveikslėlių ar router-link.
// Šiam testui svarbiausia yra reali Header.vue toggleDropdown logika.
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
            // Originaliame Header.vue šitas navigacijos punktas kviečia toggleDropdown(3).
            // 3 reiškia National or Local Government dropdown.
            click: () => this.toggleDropdown(3),
          },
        },
        this.toLocal("header.regulations")
      ),
      // Dropdown yra rodomas tik tada, kai dropdownExtended reikšmė yra 3.
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

// Vertimų mock'as. Teste nereikia tikros vertimų sistemos,
// todėl pagal raktą grąžiname aiškų tekstą.
const translations = {
  "header.regulations": "National or Local Government",
  "header.extra_europe": "Regulations in Europe",
  "downloads.more_info": "More Information & Downloads",
};

// Pagalbinė funkcija komponentui sumountinti testavimo aplinkoje.
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

// Po kiekvieno testo išvalome mock'us,
// kad vieno testo būsena nepaveiktų kitų testų.
afterEach(() => {
  vi.restoreAllMocks();
});

describe("Header.vue dropdown toggle", () => {
  it("closes National or Local Government dropdown when it is clicked twice", async () => {
    // Sumountiname Header komponentą.
    const wrapper = mountComponent();

    // Susirandame National or Local Government dropdown mygtuką.
    const button = wrapper.find(".regulations-dropdown-button");

    // Pradinė būsena: dropdown neturi būti matomas.
    expect(wrapper.find(".header-dropdown").exists()).toBe(false);
    expect(wrapper.vm.dropdownExtended).toBe(0);

    // Pirmas click turi atidaryti dropdown.
    await button.trigger("click");

    // Po pirmo click dropdown matomas, o dropdownExtended tampa 3.
    expect(wrapper.find(".header-dropdown").exists()).toBe(true);
    expect(wrapper.vm.dropdownExtended).toBe(3);

    // Antras click ant to paties mygtuko turi dropdown uždaryti.
    await button.trigger("click");

    // Po antro click dropdown vėl nebematomas, o dropdownExtended grįžta į 0.
    expect(wrapper.find(".header-dropdown").exists()).toBe(false);
    expect(wrapper.vm.dropdownExtended).toBe(0);
  });
});
