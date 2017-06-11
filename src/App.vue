<template>
  <div id="app">
    <h3> Game app drunk </h3>
    <h4>Τεστ Ανθρώπινης Αριθμομηχανής -για πιο λογο ;;;</h4>
    <img src="./assets/logo.png">
      <div class="panel panel-success">
        <div class="totalScore">
          totalScore:{{totalScore}}
        </div>
        <div class="">
          <button  v-on:click="debugAction">debugAction</button>
        </div>
        <h2>Πρόσθεση</h2>
        <praxis :typeofpraxis="'+'"></praxis>
      </div>
      <div class="panel panel-success">
        <h2>Αφαίρεση</h2>
       <praxis :typeofpraxis="'-'"></praxis>
    </div>

  </div>
</template>

<script>
import praxis from './components/praxis.vue'

export default {
  name: 'app',
  components: {
      praxis
    },
    data () {
    return {
      totalScore: 0
    }
  },
  // define methods under the `methods` object
  methods: {
    debugAction: function (event) {
       console.log('debug here');

    }
  }
}

</script>
<style>
#app {
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
