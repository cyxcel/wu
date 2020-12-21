<template>
  <div id="app">
    <header>
      <myNav></myNav>
    </header>
    <router-view/>
    <footer></footer>
  </div>
</template>

<script>
import myNav from './components/myNav'
export default {
  name: 'App',
  components:{
    myNav
  }
}
</script>

<style>
 *{
   margin: 0;
   padding: 0;
 }
</style>
