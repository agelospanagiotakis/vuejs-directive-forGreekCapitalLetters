<template>
  <div>
    <!--
    <a href="#">a red link</a>
  -->
  <div class='row'>
          <div class='col-xs-5'>
                  <div class='row'>
                        <div class='col-xs-5 pull-left'></div>
                        <div class='col-xs-7 pull-right text-align-right use-digital-font'>{{this.arithmos1}}</div>
                  </div>
                      <div class='row'>
                          <div class='col-xs-5 pull-left'></div>
                          <div class='col-xs-7 pull-right use-digital-font text-align-right'>{{this.typeofpraxis}} {{this.arithmos2}}</div>
                      </div>
                        <div class='row vcenter'>
                            <div class='col-xs-5 vcenter'><label class="vcenter text-align-right">Δώστε εκτίμηση :</label></div>
                            <div class='col-xs-7'>
                              <input  class="pull-left form-control text-align-right use-digital-font-input" type="'number" v-model="userValue" />
                              <button class="pull-right  btn btn-sm btn-warning btn-inline" @click="doPraxis"><i class="fa fa-check"></i> &nbsp; Ελεγχος</button>
                            </div>
                          </div>
                          <div class='row'>
                            <div class='col-xs-5'>
                            </div>
                            <div class='col-xs-7'>
                              <div show="showHint" class="pull-right text-align-right use-digital-font" style="display:inline-block">{{Hint}}</div>
                              </div>
                          </div>
            </div> <!-- col-xs-5 -->
            <div class='col-xs-7' v-show="this.oldcalcs.length > 0">
                  Παλιές πράξεις
                  <div  v-html="this.oldcalcsStr"></div>
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
        oldcalcsStr:'',
        oldcalcs : []
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
        else if (this.typeofpraxis == '*') {
            res =  this.arithmos1 * this.arithmos2;
          }
        else if (this.typeofpraxis == '/') {
              res =  this.arithmos1 / this.arithmos2;
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

        let class1 = 'alert-danger';
        if (this.isCorrect){
          class1 = 'alert-success';
        }
        this.oldcalcs.push({
          arithmos1 : this.arithmos1,
          typeofpraxis : this.typeofpraxis ,
          arithmos2: this.arithmos2 ,
          isCorrent: this.isCorrect
        });


        this.oldcalcsStr += "<div class='row " + class1 + " ' >";
        this.oldcalcsStr += "<div class='col-xs-12'>";
        this.oldcalcsStr += "<div class='pull-left'>";
        if (this.isCorrect){
          this.oldcalcsStr += "<i class='fa  fa-check-square-o '></i> &nbsp; Σωστό!";
      }else {
          this.oldcalcsStr += "<i class='fa  fa-remove '></i>  &nbsp;  Λάθος!";
      }
        this.oldcalcsStr += "</div>";

this.oldcalcsStr += "<span class='use-digital-font'>";
        if (this.isCorrect){
          this.oldcalcsStr += "&nbsp;  "  + this.arithmos1 + " " + this.typeofpraxis + " " + this.arithmos2 + "   = " +    this.userValue ;
        } else {
          this.oldcalcsStr +=  "&nbsp;  "  + this.arithmos1 + " " + this.typeofpraxis + " " + this.arithmos2 + "   = " +  this.retValue() + " και όχι "  + this.userValue ;
        }
        this.oldcalcsStr += "</span>";

        this.oldcalcsStr += "</div>";
        this.oldcalcsStr += "</div>";
        this.oldcalcsStr += "</div>";
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
