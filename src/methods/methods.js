import lang from "./lang.json";
import store from "@/store.js";
export default {
  methods: {
    toLocal(key) {
      if (lang[key] != undefined) {
        if(lang[key][store.state.lang] && lang[key][store.state.lang] != " "){
          return lang[key][store.state.lang];
        }else{
          return lang[key]["EN"];
        }
      } else {
        return key;
      }
    },
  },
};
