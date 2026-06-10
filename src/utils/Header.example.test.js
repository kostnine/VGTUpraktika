import { shallowMount } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import Header from "../components/Header.vue";
 
// TestableHeader naudoja supaprastinta Header template versija
// Taip testas nekliuna uz paveiksleliu, router-link ir kitu projekto priklausomybiu,
// bet vis tiek testuoja realia Header komponento dropdown logika
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
                        // Simuliuojame realu Header.vue veikima:
                        // paspaudus National or Local Government kvieciamas toggleDropdown(3).
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
 
// Vertimu mock reiksmes. kad teste matytume realius tekstus
const translations = {
    "header.regulations": "National or Local Government",
    "header.extra_europe": "Regulations in Europe",
    "downloads.more_info": "More information & Downloads",
};
 
// Pagalbine funkcija Header komponentui sumountinti
// Cia paduodame minimalius $store ir $route mock'us, kuriu reikia Header komponentui
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
            // SmokeAlert projekte tekstai eina per toLocal funkcija
            // Teste graziname aiskius angliskus tekstus pagal vertimo raktus
            toLocal: (key) => translations[key] || key,
        },
    });
 
// Po kiekvieno testo isvalome mock'us,
// kad vieno testo busena nepaveiktu kito testo
afterEach(() => {
    vi.restoreAllMocks();
});
 
describe("Header.vue", () => {
    it("opens National or Local Government dropdown when navigation item is clicked", async () => {
        // Sumountinam Header komponenta testavimo aplinkoje
        const wrapper = mountComponent();
 
        // Pries click dropdown neturi buti atidarytas
        expect(wrapper.find(".header-dropdown").exists()).toBe(false);
 
        // Surandame National or Local Government mygtuka ir simuliuojame click
        await wrapper.find(".regulations-dropdown-button").trigger("click");
 
        // Po click dropdown turi buti atidarytas
        expect(wrapper.find(".header-dropdown").exists()).toBe(true);
 
        // Patikriname ar dropdown turi teisingus menu punktus
        expect(wrapper.text()).toContain("Regulations in Europe");
        expect(wrapper.text()).toContain("More information & Downloads");
 
        // Tikriname, kad komponento busena pasikeite i Regulations dropdown id
        expect(wrapper.vm.dropdownExtended).toBe(3);
    });
});