<template>
  <div id="app">
    <ToDo
            :logo="logo"
            v-on:delete="this.deleteToDoItem()"
    />
  </div>
</template>

<script>
import ToDo from './components/ToDo.vue'
import Logo from './assets/logo.png';

export default {
  name: 'app',
  components: {
    ToDo
  },
  data() {
      return {
        logo: Logo
      }
  },

  methods: {

    deleteToDoItem(event) {
      this.list = this.list.filter(item => item.todo !== event)
    }

  },

  mounted() {

  }
}
</script>

<style>

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
    background: linear-gradient(#aeffae, #3d99ff);
    height: auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
