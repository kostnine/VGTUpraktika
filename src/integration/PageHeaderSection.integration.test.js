// mount reikalingas tam, kad būtų atvaizduotas tikras PageHeader.vue
// kartu su testiniu tėviniu puslapiu ir jo #types sekcija.
import { mount } from "@vue/test-utils";

// vi bus naudojamas sukurti scrollIntoView mock funkciją.
// it.todo pažymi dar neįgyvendintus praktikantės scenarijus.
import { describe, it, vi } from "vitest";

// Importuojame tikrą PageHeader.vue, nes būtent jo ryšį su tėvinio puslapio DOM testuosime.
import PageHeader from "@/components/PageHeader.vue";

describe("PageHeader ir puslapio sekcijos integracija", () => {
  // BENDRAS SETUPAS:
  // 1. Sukurk testinį tėvinį komponentą.
  // 2. Jame įdėk tikrą PageHeader komponentą.
  // 3. PageHeader perduok scrollTo="types".
  // 4. Po PageHeader įdėk <section id="types"> elementą.
  // 5. Element.prototype.scrollIntoView pakeisk vi.fn() mock funkcija.

  // Šiame teste paspausk .header-button ir patikrink, kad tėvinio puslapio
  // #types elementui buvo iškviestas scrollIntoView su behavior: "smooth".
  it.todo("paspaudus antraštės mygtuką slenka iki parent puslapio sekcijos");

  // Surask PageHeader per findComponent ir patikrink, kad tėvinis komponentas
  // jam tikrai perdavė scrollTo prop su reikšme "types".
  it.todo("perduoda teisingą scrollTo prop iš parent į PageHeader");

  // Simuliuok keyup.enter ant .header-button ir patikrink tą patį
  // scrollIntoView rezultatą kaip paspaudimo pele scenarijuje.
  it.todo("paspaudus Enter taip pat slenka iki parent puslapio sekcijos");
});

// Šios void eilutės neleidžia linteriui skųstis dėl kol kas nenaudojamų importų.
// Kai parašysi testus ir pradėsi naudoti importus, šias eilutes pašalink.
void mount;
void vi;
void PageHeader;
