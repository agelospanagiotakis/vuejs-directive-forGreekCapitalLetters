<template>
  <div id="app">

  <asidebar :show.sync="showSideMenu" placement="left" header="Μενού" :width="350">
          <h2> Επιλέξτε τύπο παιγνιδιού : </h2>
           <div class="btn-group btn-group-vertical ">
                 <a class="btn btn-lg btn-default" :class="{ 'btn-primary' : activePraxis == '+' }"  @click="setPraxis(this,'+')">Πρόσθεση</a><br />
                 <a class="btn btn-lg btn-default" :class="{ 'btn-primary' : activePraxis == '-' }"   @click="setPraxis(this,'-')">Αφαίρεση</a><br />
                 <a class="btn btn-lg btn-default" :class="{ 'btn-primary' : activePraxis == '*' }"   @click="setPraxis(this,'*')">Πολλαπλασιασμός</a><br />
                 <a class="btn btn-lg btn-default" :class="{ 'btn-primary' : activePraxis == '//' }"   @click="setPraxis(this,'/')">Διαίρεση</a><br />
            </div>
    </asidebar>

      <asidebar :show.sync="showSideMenu_Options" placement="right" header="Επιλογές" :width="350">
              <h2> Ρύθμιση δυσκολιας: </h2>
                  min 0
                  max 100
        </asidebar>
    <div class="pull-right">
      <div class="totalScore pull-right">
        Σκόρ : {{totalScore}}
      </div>
        <div class="btnActions">
          <button  class="btn btn-danger"  v-on:click="debugAction">Debug</button>
          <button class="btn btn-success"  @click="showSideMenu =  !showSideMenu">Μενού</button>
          <button class="btn btn-warning"  @click="showSideMenu_Options = !showSideMenu_Options">Ρυθμίσεις</button>
    </div>
  </div>
     <h4>Τεστ Ανθρώπινης Αριθμομηχανής</h4>
      <div class="panel panel-success">
        <h2>{{typeofpraxisStr}}</h2>
        <praxis :typeofpraxis="activePraxis" @ScoreChange="ScoreChanged($event)"></praxis>
      </div>
    <alert :show.sync="showModal" placement="top-right"   type="success" width="400px" dismissable>
      <span class="icon-ok-circled alert-icon-float-left"></span>
      <strong>{{ModalMsg}}</strong>
      <p></p>
    </alert>

  </div>
</template>

<script>
import praxis from './components/praxis.vue'
//var alert = require('vue-strap/src/alert');
var alert = require('vue-strap').alert;
var asidebar = require('vue-strap').aside;

export default {
  name: 'app',
  components: {
      praxis,
      alert,
      asidebar
    },
    data () {
    return {
      typeofpraxisStr : 'Πρόσθεση',
      activePraxis: '+',
      totalScore: 0,
      ModalMsg : '',
      showModal: false,
      showSideMenu: false,
      showSideMenu_Options: false
    }
  },
  // define methods under the `methods` object
  methods: {
    ScoreChanged: function (isCorrect) {
      console.log("ScoreChange callled!",isCorrect);
      if (isCorrect) {
        this.totalScore +=1;
      }else{
        this.totalScore -=1;
      }
    },
    setPraxis: function (e,praxis) {
      console.log('changed praxis ' , e );
      console.log('debug here praxis' , praxis );
      this.activePraxis = praxis;
      if ( praxis == "+") this.typeofpraxisStr = "Πρόσθεση";
      if ( praxis == "-") this.typeofpraxisStr = "Αφαίρεση";
      if ( praxis == "/") this.typeofpraxisStr = "Διαίρεση";
      if ( praxis == "*") this.typeofpraxisStr = "Πολλαπλασιασμός";

    },
    debugAction: function (event) {
       console.log('debug here',event );
       //alert();
       this.showModal  = !this.showModal ;
       this.ModalMsg = "Σωστά!";

    }
  }
}

</script>
<style>
#app {
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.totalScore{
  font-size:20px;
  font-weight: bolder;
  padding-left :20px;
  padding-right :20px;
}
.btnActions{
display: inline-block;
}
</style>
