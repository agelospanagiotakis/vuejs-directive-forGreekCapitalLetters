<template>
  <div id="app">
                    <asidebar :show="showSideMenu" @close="showSideMenu = false"   placement="left" header="Μενού" :width="350">
                            <h4> Επιλέξτε τύπο παιγνιδιού : </h4>
                             <div class="btn-group btn-group-vertical ">
                                   <a class="btn btn-lg btn-default" :class="{ 'btn-primary' : activePraxis == '+' }"  @click="setPraxis(this,'+')">Πρόσθεση</a><br />
                                   <a class="btn btn-lg btn-default" :class="{ 'btn-primary' : activePraxis == '-' }"   @click="setPraxis(this,'-')">Αφαίρεση</a><br />
                                   <a class="btn btn-lg btn-default" :class="{ 'btn-primary' : activePraxis == '*' }"   @click="setPraxis(this,'*')">Πολλαπλασιασμός</a><br />
                                   <a class="btn btn-lg btn-default" :class="{ 'btn-primary' : activePraxis == '/' }"   @click="setPraxis(this,'/')">Διαίρεση</a><br />
                              </div>
                      </asidebar>
                     <asidebar   :show="showSideMenu_Options" @close="showSideMenu_Options = false"  placement="right" header="Επιλογές" :width="350">
                                <h4> Ρύθμιση δυσκολίας: </h4>
                                    μικρότερος αριθμός: 0 <br />
                                    μέγιστος αριθμός:100 <br />
                      </asidebar>
                      <div class="progress">
                        <progressbar :now="countAnswersPercentage" type="primary"></progressbar>
                      </div>

                      <div class="pull-right">
                            <div class="totalScore pull-right">
                              Σκόρ : <span class="use-digital-font"> {{totalScore}} </span>
                            </div>


                            <div v-show="countAnswers > 0" class="ScoreCountedAnswers pull-right">
                                        {{countCorrectAnswers}} σωστές στις  {{countAnswers}}

                            </div>

                          <div class="btnActions">
                            <button  class="btn btn-danger"  v-on:click="debugAction">Debug</button>
                            <button class="btn btn-success"  @click="showMenu">Μενού</button>
                            <button class="btn btn-warning"  @click="showOptions">Ρυθμίσεις</button>
                      </div>
                    </div>
                       <h4>Τεστ Ανθρώπινης Αριθμομηχανής</h4>
                        <div class="panel panel-success">
                          <h2>{{typeofpraxisStr}}</h2>
                          <praxis :typeofpraxis="activePraxis" @answerGiven="answered($event)"></praxis>
                        </div>

  </div>
</template>

<script>
import praxis from './components/praxis.vue'
//var alert = require('vue-strap/src/alert');
var alert = require('vue-strap').alert;
var asidebar = require('vue-strap').aside;
var progressbar = require('vue-strap').progressbar;

export default {
  name: 'app',
  components: {
      praxis,
      alert,
      asidebar,
      progressbar
    },
    data () {
    return {
      typeofpraxisStr : 'Πρόσθεση',
      activePraxis: '+',
      totalScore: 0,
      countAnswers : 0,
      totalAnswersToFinish:5,
      countAnswersPercentage : 0 ,
      countCorrectAnswers : 0,
      scoreChangeIncrement : 10,
      scoreChangeDecrement : 1,
      ModalMsg : '',
      showModal: false,
      showSideMenu: false,
      showSideMenu_Options: false
    }
  },
  computed:{

    },
  // define methods under the `methods` object
  methods: {
    answered: function (isCorrect) {
      console.log("answered was callled!",isCorrect);
      this.countAnswers +=1;
      if (isCorrect) {
        this.totalScore += this.scoreChangeIncrement;
        this.countCorrectAnswers +=1;
      }else{
        this.totalScore -= this.scoreChangeDecrement;
      }

      let perc =  (this.countAnswers / this.totalAnswersToFinish) *  100;
      console.log("perc",perc);
      this.countAnswersPercentage =  perc;

  },
    showMenu(){
      this.showSideMenu =  true;
    },
    showOptions(){
      this.showSideMenu_Options =  true;
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
  font-family: 'Roboto', sans-serif;
  /* font-family: 'Roboto Condensed', sans-serif; */
  color: #2c3e50;
  margin-top: 60px;
}
.totalScore{
  font-size:20px;
  font-weight: bolder;
  padding-left :20px;
  padding-right :20px;
}
.ScoreCountedAnswers{
  font-size:20px;
  font-weight: bolder;
  padding-left :20px;
  padding-right :20px;
}
.btnActions{
display: inline-block;
}


@font-face{
 font-family:'digital-clock-font';
 src: url('/src/assets/fonts/DIGITALDREAM.ttf');
}
.use-digital-font{
font-family:'digital-clock-font';
color:white;
background-color:  black;
padding-top:5px;
padding-bottom:5px;
padding-left:5px;
padding-right:5px;
}
.btn-inline{
  display: inline-block;
}
.use-digital-font-input {
  font-family:'digital-clock-font';
  color:white;
  background-color:  grey;
  width:105%;
  display: inline-block;
padding-left: 0px;
padding-right: 0px;
}
.text-align-right {
  text-align:right;
}

.vcenter{
  vertical-align: middle;
}
</style>
