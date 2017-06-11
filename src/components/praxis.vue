<template>
  <div>
    <!--
    <a href="#">a red link</a>
  -->
  <div class='row'>
          <div class='col-xs-5'>
              <div class='row'>
                  <div class='col-xs-5 pull-left'>Αριθμός 1 :</div>
                  <div class='col-xs-7 pull-right'>{{this.arithmos1}}</div>
              </div>
              <div class='row'>
                  <div class='col-xs-5 pull-left'>Αριθμός2:</div>
                  <div class='col-xs-7 pull-right'>{{this.typeofpraxis}} {{this.arithmos2}}</div>
              </div>
              <div class='row'>
              <div class='col-xs-5 pull-left'><label>Δώσε μαντεψιά </label></div>
              <div class='col-xs-5 pull-left'><input  class="form-control" type="'number" v-model="userValue" /></div>
              <button class="vue-btn" @click="doPraxis">Πες μου αν είναι σωστό!</button>
              </div>
            </div>
            <div class='col-xs-7'>
                  Παλιές πράξεις
                  <div  v-html="this.oldcalcs"></div>
            </div>
          </div> <!-- end  row -->
    <div class='row'>
        <div class='col-xs-12'>

          <div v-if="isCorrect">
                  <div class="bg-success">Σωστός!</div>
          </div>
          <div v-else>
              <div class="bg-warning"   >Λάθος!</div>
          </div>


        </div>
    </div> <!-- end  row -->

</div>

</template>
<script>

export default {
    props: {
    typeofpraxis: {
      type: String,
      default: "+"
    }
   },
    data() {
      return {
        arithmos1: 0,
        arithmos2: 0,
        userValue:0,
        isCorrect:false,
        oldcalcs:''
      }
    },
    created: function () {
      //do something after mounting vue instance
      this.arithmos1 =  this.getRandom();
      this.arithmos2 =  this.getRandom();
      console.log("mounted changed number1",this.arithmos1);
      console.log("mounted changed number2",this.arithmos2);
    },
    computed: {
      UserInputIsInValid(){
        return !this.UserInputIsValid();
      },
      retValue() {
        console.log("this.typeofpraxis",this.typeofpraxis);
        if (this.typeofpraxis =='+') {
          return this.arithmos2 + this.arithmos1;
        }
        else if (this.typeofpraxis == '-') {
        return this.arithmos1 - this.arithmos2;
        }
      }
    },
    methods: {
      UserInputIsValid() {
        return (this.userValue == this.retValue);
      },
       getRandom(){
         let min = 0;
         let max = 100;
         return Math.floor(Math.random() * (max - min + 1)) + min;
       },
      doPraxis() {
        this.isCorrect = false;
        if (this.userValue === this.retValue){
          this.isCorrect = true;
        }
        console.log("  this.retValue ",  this.retValue );
        console.log("  this.userValue ",  this.userValue );

        console.log("  this.isCorrect ",  this.isCorrect );

        let class1 = 'alert alert-danger';
        if (this.isCorrect){
          class1 = 'alert alert-success';
        }

        this.oldcalcs += "<div class='row " + class1 + " ' >";
        this.oldcalcs += "<div class='col-xs-12'>";
        this.oldcalcs += "<div class='pull-left'>";
        if (this.isCorrect){
          this.oldcalcs += "Σωστό! <i class='fa  fa-check-square-o '></i>";
      }else {
          this.oldcalcs += "Λάθος! <i class='fa  fa-remove '></i>";
      }
        this.oldcalcs += "</div>";

        if (this.isCorrect){
          this.oldcalcs += this.arithmos1 + " " + this.typeofpraxis + " " + this.arithmos2 + "   = " +    this.userValue ;
        } else {
          this.oldcalcs += this.arithmos1 + " " + this.typeofpraxis + " " + this.arithmos2 + "   = " +    this.retValue + " όχι "  + this.userValue ;
        }
        this.oldcalcs += "</div>";
        this.oldcalcs += "</div>";
        this.oldcalcs += "</div>";
        console.log("  this.oldcalcs ",  this.oldcalcs );

        this.arithmos1 =  this.getRandom();
        this.arithmos2 =  this.getRandom();
    }
  }
}
</script>
<style>
  a {
    color:red
  }

</style>
