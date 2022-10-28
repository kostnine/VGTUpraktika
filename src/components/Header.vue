<template>
  <div>
    <h1>Header</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
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