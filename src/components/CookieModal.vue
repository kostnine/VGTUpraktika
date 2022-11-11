<template>

    <div class="cookie-modal" v-if="!cookieAccepted">
        <span>We use cookies to improve your experience</span>
        <div class="button-container">
            <router-link to="/privacy-policy" > Privacy policy </router-link>
            <button @click="acceptCookies">OK</button>
        </div>

    </div>
  
</template>

<script>
import { bootstrap } from 'vue-gtag'

export default {
    data(){
        return{
            cookieAccepted: false,
        }
    },
    mounted(){

        this.cookieAccepted = this.$cookies.get("cookies_accepted");
        if(this.cookieAccepted){
            this.enablePlugin();
        }
    },
    methods:{
         acceptCookies(){
            this.$cookies.set('cookies_accepted', true, '2y');
            this.cookieAccepted=true;
            this.enablePlugin();
        },
        enablePlugin(){
            bootstrap()
        }
    }
}
</script>

<style lang="scss" scoped>
.cookie-modal{
    position: fixed;
    bottom: 15px;
    left: 15px;
    background: #ffffffe3;
    border: 2px solid #c0554b;
    padding: 10px 15px;
    border-radius: 10px;
    z-index: 1000;
    font-size: 18px;
    max-width: 95vw;
    color: #1e1826;
}
.button-container{
    display: flex;
    justify-content: space-between;
    margin:auto;
    width: 80%;
    margin-top: 1rem;
}
button{
    display: flex;
    justify-content: center;
    color:white;
    background: #c0554b;
    border: none;
    border-radius: 5px;
    width: 50%;
    padding: 5px 0;
    font-size: 16px;
    
    cursor: pointer;
    
    &:hover{
        font-weight: 700;
    }
}
a{
    cursor: pointer;
    color: #c0554b;
    &:hover{
        text-decoration: underline;
    }
}

</style>