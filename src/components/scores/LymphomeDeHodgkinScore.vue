<template>

  <div class="score">

    <div class="title-red">Hodgkin's Disease | Prognosis</div>
    <div class="sous-title">Estimate prognosis in Hodgkin's disease</div>
    <hr style="background-color: #000" />

      <div class="question">
        <div class="question-title">1. Age ?</div>
        <div class="response">
          <div id="question1-1" class="button question1" @click="calculateScore(1, 1)"> >= 45 years</div>
          <div id="question1-0" class="button question1" @click="calculateScore(0, 1)"> 	&lt; 45 years</div>
        </div>
      </div>
      <div class="question">
        <div class="question-title">2. Gender?</div>
        <div class="response">
          <div id="question2-1" class="button question2" @click="calculateScore(1, 2)">Male</div>
          <div id="question2-0" class="button question2" @click="calculateScore(0, 2)">Female</div>
        </div>
      </div>
      <div class="question">
        <div class="question-title">3. Albumin?</div>
        <div class="response">
          <div id="question3-1" class="button question3" @click="calculateScore(1, 3)">&lsaquo;40 g/L</div>
          <div id="question3-0" class="button question3" @click="calculateScore(0, 3)">Normal</div>
        </div>
      </div>
      <div class="question">
        <div class="question-title">4. Hemoglobin?</div>
        <div class="response">
          <div id="question4-1" class="button question4" @click="calculateScore(1, 4)">&lsaquo;105 g/L</div>
          <div id="question4-0" class="button question4" @click="calculateScore(0, 4)">≥105 g/L</div>
        </div>
      </div>
      <div class="question">
        <div class="question-title">5. Stage?</div>
        <div class="response">
          <div id="question5-1" class="button question5" @click="calculateScore(1, 5)">Stage IV</div>
          <div id="question5-0" class="button question5" @click="calculateScore(0, 5)">Stage III</div>
        </div>
      </div>
      <div class="question">
        <div class="question-title">6. Leukocytosis: WBC = 15,000mm³ or more?</div>
        <div class="response">
          <div id="question6-1" class="button question6" @click="calculateScore(1, 6)">Oui</div>
          <div id="question6-0" class="button question6" @click="calculateScore(0, 6)">No</div>
        </div>
      </div>
      <div class="question">
        <div class="question-title">7. Lymphopenia: Lymphs &lsaquo;600/mm³ OR &lsaquo;8% of WBC count?</div>
        <div class="response">
          <div id="question7-1" class="button question7" @click="calculateScore(1, 7)">Oui</div>
          <div id="question7-0" class="button question7" @click="calculateScore(0, 7)">No</div>
        </div>
      </div>
    <div>
      <div class="result" id="result">
        <h3>Result: {{ result }}</h3>
        <br />

        <div class="consequence">
          <div class="consequence-points">Hassenclever IPS Score: {{ result }}</div>
          <br />
          <div class="consequence-points">
            Predicted 5-year Rate of Freedom from Progression of Disease:
            {{ predicted[resultPred] }} %
          </div>
          <div class="consequence-points">Estimated Overall Survival Rate
            {{ estimated[resultPred]  }} %
          </div>
        </div>
      </div>

    </div>
    <div class="link">
      <div class="link-title">
          Litterature
      </div>
      <div class="link-subTitle">
        References
      </div>
      <div class="linkUrl">
        Hasenclever D, Diehl V <br/>
        <a href="https://read.qxmd.com/read/9819449/a-prognostic-score-for-advanced-hodgkin-s-disease-international-prognostic-factors-project-on-advanced-hodgkin-s-disease" target="_blank">A prognostic score for advanced Hodgkin's disease. International Prognostic Factors Project on Advanced Hodgkin's Disease.</a>
        New England Journal of Medicine 1998 November 19, 339 (21): 1506-14
      </div>
      <div class="linkUrl">
        <a href="https://qxmd.com/calculate/calculator_107/hodgkin-s-disease-prognosis" target="_blank">The Hodgkin's Disease | Prognosis calculator is created by QxMD.</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Lymphome de Hodgkin",
  data() {
    return {
      result: 0,
      resultPred: 0,
      predicted: [84, 77, 67, 60, 51, 42],
      estimated: [89, 90, 81, 78, 61, 56],
      question1: null,
      question2: null,
      question3: null,
      question4: null,
      question5: null,
      question6: null,
      question7: null,
    };
  },
  methods: {
    calculateScore(value, question) {
        let holdSelec= document.getElementsByClassName( 'question'+ question + ' button-selected')
        let newSelec = document.getElementById('question' + question +  '-' + value)

        if(holdSelec[0]){
            if(holdSelec[0] != newSelec){
                holdSelec[0].classList.remove("button-selected");
                newSelec.classList.add("button-selected");
            }
        }else{
            newSelec.classList.add("button-selected");
        }
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
        case 4:
          this.question4 = value;
          break;
        case 5:
          this.question5 = value;
          break;
        case 6:
          this.question6 = value;
          break;
        case 7:
          this.question7 = value;
          break;
      }
      this.result =
        this.question1 +
        this.question2 +
        this.question3 +
        this.question4 +
        this.question5 +
        this.question6 +
        this.question7;
      if (this.result > 5) {
        this.resultPred = 5;
      } else {
        this.resultPred = this.result;
      }
      this.calculateResult()
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