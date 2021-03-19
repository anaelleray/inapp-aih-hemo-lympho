<template>

  <div class="score lymphome-du-malt">
    <div class="title-red">MALT Lymphoma prognosis (MALT-IPI)</div>
    <div class="sous-title">Estimate prognosis in MALT lymphoma</div>
    <hr style="background-color: #000" />

    <div class="question question1">
      <div class="question-title">1. Age ?</div>
      <div class="response">
        <div class="button" @click="calculateScore(1, 1)">≥70 years</div>
        <div class="button" @click="calculateScore(0, 1)">&lt;70 years</div>
      </div>
    </div>

    <div class="question question2">
      <div class="question-title">2. LDH ?</div>
      <div class="response">
        <div class="button" @click="calculateScore(1, 2)">Elevated</div>
        <div class="button" @click="calculateScore(0, 2)">Normal</div>
      </div>
    </div>

    <div class="question question3">
      <div class="question-title">3. Age ?</div>
      <div class="response">
        <div class="button" @click="calculateScore(1, 3)">Stage III/IV</div>
        <div class="button" @click="calculateScore(0, 3)">Stage I/II</div>
      </div>
    </div>
 
    <div>
      <div>

       <button @click="calculateResult()">View results</button>

        <div class="result" id="result">
          <div>
            <div>MALT-IPI score : {{ score }}</div>
            <br />
            <div>Prognosis : {{ result }}</div>
            <br />

          </div>
        </div>
      </div>

      <div>
        <div>
          <br> <br>
          Prognosis depends on 3 independent predictors: Age, Stage, and LDH
        </div>
        <div>
          Ref : Catherine Thieblemont, Luciano Cascione, Annarita Conconi,
          Barbara Kiesewetter, Markus Raderer, Gianluca Gaidano, Maurizio
          Martelli, Daniele Laszlo, Bertrand Coiffier, Armando Lopez Guillermo,
          Valter Torri, Franco Cavalli, Peter W Johnson, Emanuele Zucca. A MALT
          lymphoma prognostic index. Blood 2017 September 21, 130 (12):
          1409-1417
        </div>
      </div>

      <div class="sous-title">
        References <br /><br />

        Thielblemont, et al.

        <a
          href="https://read.qxmd.com/read/28720586/a-malt-lymphoma-prognostic-index"
          target="_blanlk"
          >A MALT lymphoma prognostic index.</a
        ><br />

        Blood 2017 September 21, 130 (12): 1409-1417 <br /><br />

        The
        <a
          href="https://qxmd.com/calculate/calculator_429/malt-lymphoma-prognosis-malt-ipi"
          target="_blanlk"
        >
          MALT Lymphoma prognosis (MALT-IPI)</a
        >
        calculator is created by QxMD.
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
      result: "",
      score: 0,
      question1: 0,
      question2: 0,
      question3: 0,
    };
  },
  methods: {
    calculateScore(value, question) {
      switch (question) {
        case 1:
          this.question1 = value;
          break;
        case 2:
          this.question2 = value;
          break;
        case 3:
          this.question3 = value;
          break;
      }
      this.score = this.question1 + this.question2 + this.question3;

      if (this.score === 0)
        this.result = "Risque faible (0) : OS à 5 ans 98%, EFS à 5 ans 70%";
      if (this.score === 1)
        this.result =
          "Risque intermédiaire (1) : OS à 5 ans 93%, EFS à 5 ans 56%";
      if (this.score >= 2)
        this.result = "Risque élevé (2–3) : OS à 5 ans 64%, EFS à 5 ans 29%";
    },

    calculateResult() {
      var res = document.getElementById("result");
      res.style.display = "block";
    },
  },
});
</script>

<style>
.result {
  display: none;
}
</style>