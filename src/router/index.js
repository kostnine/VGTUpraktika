import Vue from "vue";
import VueRouter from "vue-router";
import LandingPageView from "../views/LandingPageView.vue";
import RegulationsView from "../views/RegulationsPage.vue";
import RegulationsViewDownload from "../views/RegulationsViewDownload.vue";
import MessagesViewDownload from "../views/MessagesViewDownload.vue";
import FactsView from "../views/FactsPage.vue";
import TypesView from "../views/TypesPage.vue";
import AlarmsView from "../views/AlarmPlacePage.vue";
import DownloadsView from "../views/DownloadsPage.vue";
import MaintainView from "../views/MaintainPage.vue";
import PrivacyView from "../views/PrivacyPolicy.vue";
import SupportView from "../views/SupportPage.vue";
import SuccessPage from "../views/SuccessPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landingpage",
    component: LandingPageView,
  },
  {
    path: "/regulations",
    name: "regulations",

    component: RegulationsView,
  },
  {
    path: "/types",
    name: "types of smoke alarms",
    component: TypesView,
  },
  {
    path: "/place",
    name: "place",
    component: AlarmsView,
  },
  {
    path: "/practices",
    name: "practices",
    component: DownloadsView,
  },
  {
    path: "/facts",
    name: "facts",
    component: FactsView,
  },
  {
    path: "/maintain",
    name: "maintain",
    component: MaintainView,
  },
  {
    path: "/privacy-policy",
    name: "privacypolicy",
    component: PrivacyView,
  },
  {
    path: "/messages",
    name: "messages",
    component: SupportView,
  },
  {
    path: "/messagesDownload",
    name: "messages-down",
    component: MessagesViewDownload,
  },
  {
    path: "/success",
    name: "success",
    component: SuccessPage,
  },
  {
    path: "/regulationsDownload",
    name: "lang-regulations-down",
    component: RegulationsViewDownload,
  },

  {
    path: "/:lang",
    name: "lang-home",
    component: LandingPageView,
  },
  {
    path: "/:lang/regulations",
    name: "lang-regulations",
    component: RegulationsView,
  },
  {
    path: "/:lang/regulationsDownload",
    name: "lang-regulations-down",
    component: RegulationsViewDownload,
  },
  {
    path: "/:lang/types",
    name: "lang-types",
    component: TypesView,
  },
  {
    path: "/:lang/place",
    name: "lang-place",
    component: AlarmsView,
  },
  {
    path: "/:lang/practices",
    name: "lang-practices",
    component: DownloadsView,
  },
  {
    path: "/:lang/facts",
    name: "lang-facts",
    component: FactsView,
  },
  {
    path: "/:lang/maintain",
    name: "lang-maintain",
    component: MaintainView,
  },
  {
    path: "/:lang/privacy-policy",
    name: "lang-privacy",
    component: PrivacyView,
  },
  {
    path: "/:lang/messages",
    name: "messages",
    component: SupportView,
  },
  {
    path: "/:lang/messagesDownload",
    name: "messages-down",
    component: MessagesViewDownload,
  },
  {
    path: "/:lang/success",
    name: "success",
    component: SuccessPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
