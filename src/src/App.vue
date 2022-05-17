<template>
  <div id="app">
    <h1>Object Detection App</h1>
    
    <div class='container'>
      <ImageProcApp/>
    </div>

  </div>
</template>

<script>
import ImageProcApp from './components/ImageProcApp.vue'

export default {
  name: 'App',
  components: {
    ImageProcApp
  }
}
</script>

<style>
  #app{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: center;
    margin-top: 3rem;
  }
 
</style>
