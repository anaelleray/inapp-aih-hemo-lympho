


<template>
  <div class="lymphome-du-malt">
    <h2>MALT Lymphoma prognosis (MALT-IPI)</h2>
    <h3>Estimate prognosis in MALT lymphoma</h3><br>

    <div>
      <table>
        <tr>
            <td>1. Age?</td>
              <td>
                <button @click="calculateScore(0,1)" style="background:#c2f0c2">	&lt;70 years</button>
            </td>
            <td>
                <button @click="calculateScore(1,1)" style="background:#c2f0c2">≥70 years</button>
            </td>
        </tr>
        <tr>
            <td>2. LDH?</td>
              <td>
                <button @click="calculateScore(0,2)" style="background:#c2f0c2">Normal</button>
            </td>
            <td>
                <button @click="calculateScore(1,2)" style="background:#c2f0c2">Elevated</button>
            </td>
        </tr>
        <tr>
            <td>3. Stage?</td>
              <td>
                <button @click="calculateScore(0,3)" style="background:#c2f0c2">Stage I/II</button>
            </td>
            <td>
                <button @click="calculateScore(1,3)" style="background:#c2f0c2">Stage III/IV</button>
            </td>
        </tr>
      </table>
      <div>
        <h3>MALT-IPI score</h3>
        <div>{{score}}</div>
        <div >Prognosis : {{result}}</div>
        <div>Prognosis depends on 3 independent predictors: Age, Stage, and LDH</div>
        <div>Ref : Catherine Thieblemont, Luciano Cascione, Annarita Conconi, Barbara Kiesewetter, Markus Raderer, Gianluca Gaidano, Maurizio Martelli, Daniele Laszlo, Bertrand Coiffier, Armando Lopez Guillermo, Valter Torri, Franco Cavalli, Peter W Johnson, Emanuele Zucca. A MALT lymphoma prognostic index. Blood 2017 September 21, 130 (12): 1409-1417</div>
      </div>

    </div>
  
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Lymphome du MALT",
  data() {
    return {
        result :"", 
        score: 0,
        question1:0,
        question2:0,
        question3:0,
    };
  },
  methods: {
      calculateScore(value, question){
       switch(question){
           case 1 : this.question1 = value;break
           case 2 : this.question2 = value;break
           case 3 : this.question3 = value;break
       }
        this.score = this.question1 + this.question2 + this.question3 

        if (this.score === 0)  this.result = "Risque faible (0) : OS à 5 ans 98%, EFS à 5 ans 70%"
        if (this.score === 1) this.result = "Risque intermédiaire (1) : OS à 5 ans 93%, EFS à 5 ans 56%"
        if (this.score >= 2 ) this.result = "Risque élevé (2–3) : OS à 5 ans 64%, EFS à 5 ans 29%"
    },

  },
  mounted() {

  },
});
</script>

<style>
</style>