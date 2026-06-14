// Importuojame tikrą VueCookies pluginą.
// Šio integration testo esmė yra nenaudoti netikro $cookies mock objekto.
import VueCookies from "vue-cookies";

// createLocalVue sukuria izoliuotą Vue kopiją, į kurią įdiegsime VueCookies.
// mount pilnai atvaizduoja tikrą CookieModal.vue.
import { createLocalVue, mount } from "@vue/test-utils";

// afterEach išvalo būseną po kiekvieno testo.
// vi reikalingas išorinei Google Analytics funkcijai mockinti.
import { afterEach, describe, it, vi } from "vitest";

// Testuojame tikrą projekto slapukų modal komponentą.
import CookieModal from "@/components/CookieModal.vue";

// Google Analytics yra išorinė paslauga ir nėra šio integration testo tikslas.
// Todėl bootstrap pakeičiame saugia netikra vi.fn funkcija.
vi.mock("vue-gtag", () => ({
  bootstrap: vi.fn(),
}));

// Po kiekvieno testo ištriname naršyklės slapuką ir išvalome mock iškvietimus.
// Taip vieno testo rezultatas nepaveiks kito testo.
afterEach(() => {
  document.cookie =
    "cookies_accepted=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  vi.clearAllMocks();
});

describe("CookieModal ir VueCookies integracija", () => {
  // BENDRAS SETUPAS:
  // 1. Sukurk localVue su createLocalVue().
  // 2. Įdiek VueCookies per localVue.use(VueCookies, { expires: "7d" }).
  // 3. Mountink CookieModal su tuo localVue.
  // 4. Pateik toLocal mocką tekstams ir scroll-lock direktyvos stubą.
  // 5. $cookies objekto nemockink, nes tikriname tikrą VueCookies integraciją.

  // Išvalyk cookies_accepted, sumountink komponentą ir patikrink,
  // kad be naršyklės slapuko .cookie-modal yra matomas.
  it.todo("rodo CookieModal, kai naršyklės slapukas neegzistuoja");

  // Paspausk "Allow all cookies" ir patikrink document.cookie.
  // Jame turi atsirasti cookies_accepted=true.
  it.todo("po sutikimo įrašo cookies_accepted per tikrą VueCookies");

  // Po to paties vartotojo veiksmo patikrink komponento DOM:
  // .cookie-modal turi būti pašalintas, nes cookieAccepted tapo true.
  it.todo("sukūrus tikrą naršyklės slapuką paslepia CookieModal");

  // Pirmiausia sukurk tikrą slapuką, tada mountink naują komponento kopiją.
  // mounted metu komponentas turi perskaityti slapuką per VueCookies.
  it.todo("naujas komponentas perskaito jau egzistuojantį naršyklės slapuką");

  // Sunaikink pirmą wrapper, mountink naują ir patikrink,
  // kad dėl išsaugoto slapuko .cookie-modal išlieka paslėptas.
  it.todo("pakartotinai sumountinus komponentą modal langas lieka paslėptas");
});

// Šios void eilutės reikalingos tik tol, kol testai pažymėti it.todo.
// Įgyvendinus testus jas galima pašalinti.
void VueCookies;
void createLocalVue;
void mount;
void CookieModal;
