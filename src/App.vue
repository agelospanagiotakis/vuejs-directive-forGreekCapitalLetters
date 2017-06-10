<template>
  <div id="app">
    <h3> a vuejs directive for removing accent from Greek Capital Letters</h3>
    <img src="./assets/logo.png">
    <h4>Now ... lets clean the following  paragraph from accented greek capital letters</h4>
    <div class=''  >
      <span style="font-weight:bold">original paragraph : </span><br />
       ΜΊΑ  ΠΑΡΆΓΡΑΦΟς ΜΕ ΚΕΦΑΛΑΊΑ ΣΤΑ ΟΠΟΊΑ ΟΙ ΤΌΝΟΙ ΘΑ ΠΡΈΠΕΙ ΝΑ ΑΦΑΙΡΕΘΟΎΝ
     </div>
        <div class=''  >
            <span style="font-weight:bold"> paragraph using this directive : </span>
            <br />
              <div  v-removegreekaccent>
              ΜΊΑ ΠΑΡΆΓΡΑΦΟΣ ΜΕ ΚΕΦΑΛΑΊΑ ΣΤΑ ΟΠΟΊΑ ΟΙ ΤΌΝΟΙ ΘΑ ΠΡΈΠΕΙ ΝΑ ΑΦΑΙΡΕΘΟΎΝ
            </div>
          </div>
<br />
          ps1 : notice ς converted to Σ <br />
          ps2: now you can safelly css this damn thing!
<!--
<div class=''  v-removegreekaccent>
        Ά  &rarr;  Α<br />
      Έ  &rarr;  Ε<br />
      έ  &rarr;  ε<br />
      Ή  &rarr;  Η<br />
      ή  &rarr;  η<br />
      Ί  &rarr;  Ι<br />
      ί  &rarr;  ι<br />
      ΐ  &rarr;  ϊ<br />
      Ό  &rarr;  Ο<br />
      ό  &rarr;  ο<br />
      Ύ  &rarr;  Υ<br />
      ύ  &rarr;  υ<br />
      ΰ  &rarr;  ϋ<br />
      Ώ  &rarr;  Ω<br />
      ώ  &rarr;   ω<br />
      ς  &rarr;  Σ<br />
    </div>
-->

      </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'a vuejs directive for removing accent from Greek Capital Letters'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
