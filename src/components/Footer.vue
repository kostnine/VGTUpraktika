<template>
  <div>
    <h1>Footer</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'FooterComponent',
    data(){
        return{

        }
    }
}
</script>

<style scoped lang="scss">
div{

}
</style>