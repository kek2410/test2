import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from "./messages";

/* Vuetify 에서 제공해주는 디폴트 언어
  af - Afrikaans (Afrikaans)
  ar - Arabic (اللغة العربية)
  ca - Catalan (català)
  cs - Czech (čeština)
  de - German (Deutsch)
  el - Greek (Ελληνικά)
  en - English
  es - Spanish (Español)
  et - Estonian (eesti)
  fa - Persian (فارسی)
  fr - French (Français)
  he - Hebrew (עברית)
  hr - Croatian (hrvatski jezik)
  hu - Hungarian (magyar)
  id - Indonesian (Indonesian)
  it - Italian (Italiano)
  ja - Japanese (日本語)
  ko - Korean (한국어)
  lt - Lithuanian (lietuvių kalba)
  lv - Latvian (latviešu valoda)
  nl - Dutch (Nederlands)
  no - Norwegian (Norsk)
  pl - Polish (język polski)
  pt - Portuguese (Português)
  ro - Romanian (Română)
  ru - Russian (Русский)
  sl - Slovene (slovenski jezik)
  srCyrl - Serbian (српски језик)
  sv - Swedish (svenska)
  th - Thai (ไทย)
  tr - Turkish (Türkçe)
  uk - Ukrainian (Українська)
  zhHans - Chinese (中文)
  zhHant - Chinese (中文)
*/

Vue.use(VueI18n);

export const seti18n = {
  locale: "ko",
  messages
};

export default new VueI18n(seti18n);
