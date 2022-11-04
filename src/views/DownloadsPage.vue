<template>
  <div class="downloads">

  </div>
</template>

<script>
export default {
    name: 'DownloadsPage',
    data(){
        return{
        windowWidth: window.innerWidth,
        }
    },
    watch:{
        '$route.path'(){
        window.scroll(0,0);
        }
    },
    mounted(){
        window.addEventListener('resize', this.handleResize);
    },
    methods:{
        handleResize(){
        this.windowWidth = window.innerWidth;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>