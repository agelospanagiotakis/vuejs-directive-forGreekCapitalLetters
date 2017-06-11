<template>
  <div>
    <!--
    <a href="#">a red link</a>
  -->
  <div class='row'>
          <div class='col-xs-5'>
                  <div class='row'>
                        <div class='col-xs-5 pull-left'></div>
                        <div class='col-xs-7 pull-right'>{{this.arithmos1}}</div>
                  </div>
                      <div class='row'>
                          <div class='col-xs-5 pull-left'></div>
                          <div class='col-xs-7 pull-right'>{{this.typeofpraxis}} {{this.arithmos2}}</div>
                      </div>
                        <div class='row'>
                            <div class='col-xs-5 pull-left'><label>Δώστε εκτίμηση </label></div>
                            <div class='col-xs-2'>
                              <input  class="form-control" type="'number" v-model="userValue" />
                            </div>
                            <div class='col-xs-2 '>
                              <div show="showHint"> {{Hint}}</div>
                            </div>
                            <div class='col-xs-3'>
                            <button class="btn btn-sm btn-warning" @click="doPraxis">Σωστό;</button>
                            </div>
                          </div>
            </div> <!-- col-xs-5 -->
            <div class='col-xs-7'>
                  Παλιές πράξεις
                  <div  v-html="this.oldcalcs"></div>
            </div>
          </div> <!-- end  row -->

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
        showHint:true,
        Hint: 0,
        userValue:0,
        isCorrect:false,
        oldcalcs:''
      }
    },
    created: function () {
      //do something after mounting vue instance
      this.arithmos1 =  this.getRandom();
      this.arithmos2 =  this.getRandom();
      this.Hint =  this.retValue();
      console.log("mounted changed number1",this.arithmos1);
      console.log("mounted changed number2",this.arithmos2);
    },
    computed: {
      UserInputIsInValid(){
        return !this.UserInputIsValid();
      }
    },
    methods: {
      retValue() {
        console.log("this.typeofpraxis",this.typeofpraxis);
        let res = 0;
        if (this.typeofpraxis =='+') {
          res = this.arithmos2 + this.arithmos1;
        }
        else if (this.typeofpraxis == '-') {
        res =  this.arithmos1 - this.arithmos2;
        }
        this.Hint =  res;
        return res;
      },
      UserInputIsValid() {
        return (this.userValue === this.retValue());
      },
       getRandom(){
         let min = 0;
         let max = 100;
         return Math.floor(Math.random() * (max - min + 1)) + min;
       },
      doPraxis() {
        this.isCorrect = false;
        if (this.userValue == this.retValue()){
          this.isCorrect = true;
        }

        //notify other components that score changed!
        this.$emit('answerGiven', this.isCorrect);

        console.log("  this.retValue ",  this.retValue() );
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
          this.oldcalcs += this.arithmos1 + " " + this.typeofpraxis + " " + this.arithmos2 + "   = " +  this.retValue() + " και όχι "  + this.userValue ;
        }
        this.oldcalcs += "</div>";
        this.oldcalcs += "</div>";
        this.oldcalcs += "</div>";
        console.log("  this.oldcalcs ",  this.oldcalcs );

        this.arithmos1 =  this.getRandom();
        this.arithmos2 =  this.getRandom();
        this.Hint =  this.retValue();
    }
  }
}
</script>
<style>
  a {
    color:red
  }

</style>
