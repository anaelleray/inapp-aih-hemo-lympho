<template>
  <div class="lymphome-du-malt score">
    <div class="title-red">
      MALT Lymphoma prognosis (MALT-IPI)
    </div>
    <div class="sous-title">
      Estimate prognosis in MALT lymphoma
    </div>
    <hr style="background-color:#000;">
    <div class="question">
        <div class="question-title">1. Age ?
          <div class="response">
            <div id="question1-0" class="button question1" @click="calculateScore(0,1)">&lt;70 years</div>
            <div id="question1-1" class="button question1" @click="calculateScore(1,1)">≥70 years</div>
          </div>
        </div>
    </div>
    <div class="question">
        <div class="question-title">2. LDH ?
          <div class="response">
            <div id="question2-0" class="button question2" @click="calculateScore(0,2)">Normal</div>
            <div id="question2-1" class="button question2" @click="calculateScore(1,2)">Elevated</div>
          </div>
        </div>
    </div>
    <div class="question">
        <div class="question-title">3. Stage ?
          <div class="response">
            <div id="question3-0" class="button question3" @click="calculateScore(0,3)">Stage I/II</div>
            <div id="question3-1" class="button question3" @click="calculateScore(1,3)">Stage III/IV</div>
          </div>
        </div>
    </div>
    <div class="consequence">
      <div class="consequence-points"> {{score}} MALT-IPI score </div>
      <div class="consequence-text">Prognosis : {{result}}</div>
      <div class="consequence-text">Prognosis depends on 3 independent predictors: Age, Stage, and LDH</div>
    </div>
    <div class="link">
            <div class="link-title">
                References
            </div>
            <div class="link-subTitle">
                Ref : Catherine Thieblemont, Luciano Cascione, Annarita Conconi, Barbara Kiesewetter, Markus Raderer, Gianluca Gaidano, Maurizio Martelli, Daniele Laszlo, Bertrand Coiffier, Armando Lopez Guillermo, Valter Torri, Franco Cavalli, Peter W Johnson, Emanuele Zucca. A MALT lymphoma prognostic index. Blood 2017 September 21, 130 (12): 1409-1417
            </div>
            <div class="linkUrl">
                <a href="https://read.qxmd.com/read/28720586/a-malt-lymphoma-prognostic-index" target="_blank">Thielblemont, et al. A MALT lymphoma prognostic index. Blood 2017 September 21,130 (12): 1409-1417</a>
            </div>
            <div class="linkUrl">
                <a href="https://qxmd.com/calculate/calculator_429/malt-lymphoma-prognosis-malt-ipi" target="_blank">The MALT Lymphoma prognosis (MALT-IPI) calculator is created by QxMD.</a>
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
        let holdSelec= document.getElementsByClassName( 'question'+ question + ' button-selected')
        let newSelec = document.getElementById('question' + question +  '-' + value)

        if(holdSelec[0]){
            if(holdSelec[0] != newSelec){
              holdSelec[0].classList.remove("button-selected");
              newSelec.classList.add("button-selected");
            }
        } else {
          newSelec.classList.add("button-selected");
        }
        switch(question){
            case 1 : this.question1 = value
            break;
            case 2 : this.question2 = value
            break;
            case 3 : this.question3 = value
            break;
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