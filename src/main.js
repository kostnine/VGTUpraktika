import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import VScrollLock from 'v-scroll-lock'
 
Vue.use(VScrollLock)
Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.mixin({
  data: function() {
    return {
      windowWidth: 0,
      windowHeight: 0
    }
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight; 
    window.addEventListener('resize', this.setWindowSize);
  },
  beforeDestroy(){
     window.removeEventListener('resize', this.setWindowSize);
  },
  methods: {
    setWindowSize(){
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
    },
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
