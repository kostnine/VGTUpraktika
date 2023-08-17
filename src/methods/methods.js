import lang from "./lang.json";
import store from "@/store.js";
export default {
  methods: {
    toLocal(key) {
      if (lang[key] != undefined) {
        return lang[key][store.state.lang];
      } else {
        return key;
      }
    },
  },
};
