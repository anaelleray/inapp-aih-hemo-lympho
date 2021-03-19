<template>
  <div class="score">
    <div class="title-red">Hodgkin's Disease | Prognosis</div>
    <div class="sous-title">Estimate prognosis in Hodgkin's disease</div>

    <hr style="background-color: #000" />

    <div class="question question1">
      <div class="question-title">1. Age ?</div>
      <div class="response">
        <div class="button" @click="calculateScore(1, 1)">≥45 years</div>
        <div class="button" @click="calculateScore(0, 1)">>45 years</div>
      </div>
    </div>

    <div class="question question2">
      <div class="question-title">2. Gender?</div>
      <div class="response">
        <div class="button" @click="calculateScore(1, 2)">Male</div>
        <div class="button" @click="calculateScore(0, 2)">Female</div>
      </div>
    </div>

    <div class="question question3">
      <div class="question-title">3. Albumin?</div>
      <div class="response">
        <div class="button" @click="calculateScore(1, 3)">&lsaquo;40 g/L</div>
        <div class="button" @click="calculateScore(0, 3)">Normal</div>
      </div>
    </div>

    <div class="question question4">
      <div class="question-title">4. Hemoglobin?</div>
      <div class="response">
        <div class="button" @click="calculateScore(1, 4)">&lsaquo;105 g/L</div>
        <div class="button" @click="calculateScore(0, 4)">≥105 g/L</div>
      </div>
    </div>

    <div class="question question5">
      <div class="question-title">5. Stage?</div>
      <div class="response">
        <div class="button" @click="calculateScore(1, 5)">Stage IV</div>
        <div class="button" @click="calculateScore(0, 5)">Stage III</div>
      </div>
    </div>

    <div class="question question6">
      <div class="question-title">
        6. Leukocytosis: WBC = 15,000mm³ or more?
      </div>
      <div class="response">
        <div class="button" @click="calculateScore(1, 6)">Oui</div>
        <div class="button" @click="calculateScore(0, 6)">No</div>
      </div>
    </div>

    <div class="question question7">
      <div class="question-title">
        7. Lymphopenia: Lymphs &lsaquo;600/mm³ OR &lsaquo;8% of WBC count?
      </div>
      <div class="response">
        <div class="button" @click="calculateScore(1, 7)">Oui</div>
        <div class="button" @click="calculateScore(0, 7)">No</div>
      </div>
    </div>

    <!-- old but still need-->
    <div>
      <!-- <div class="question1">
        <div>1. Age ?</div>
        <button @click="calculateScore(1, 1)">≥45 Years</button>
        <button @click="calculateScore(0, 1)">>45 years</button>
      </div>

      <div class="question2">
        <div>2. Gender?</div>
        <button @click="calculateScore(1, 2)">Male</button>
        <button @click="calculateScore(0, 2)">Female</button>
      </div>
      <div class="question3">
        <div>3. Albumin?</div>
        <button @click="calculateScore(1, 3)">&lsaquo;40 g/L</button>
        <button @click="calculateScore(0, 3)">Normal</button>
      </div>
      <div class="question4">
        <div>4. Hemoglobin?</div>
        <button @click="calculateScore(1, 4)">&lsaquo;105 g/L</button>
        <button @click="calculateScore(0, 4)">≥105 g/L</button>
      </div>
      <div class="question5">
        <div>5. Stage?</div>
        <button @click="calculateScore(1, 5)">Stage IV</button>
        <button @click="calculateScore(0, 5)">Stage III</button>
      </div>
      <div class="question6">
        <div>6. Leukocytosis: WBC = 15,000mm³ or more?</div>
        <button @click="calculateScore(1, 6)">Oui</button>
        <button @click="calculateScore(0, 6)">No</button>
      </div>
      <div class="question7">
        <div>
          7. Lymphopenia: Lymphs &lsaquo;600/mm³ OR &lsaquo;8% of WBC count?
        </div>
        <button @click="calculateScore(1, 7)">Oui</button>
        <button @click="calculateScore(0, 7)">No</button>
      </div> -->

      <button @click="calculateResult()">View results</button>
      <div class="result" id="result">
        <h3>Result: {{ result }}</h3>
        <br />

        <div>
          <div>Hassenclever IPS Score: {{ result }}</div>
          <br />

          <div>
            Predicted 5-year Rate of Freedom from Progression of Disease:
            {{ predicted[resultPred] }} %
          </div>
          <div>---</div>

          <div class="sous-title">
            References <br /><br />
            Hasenclever D, Diehl V
            <a
              href="https://read.qxmd.com/read/9819449/a-prognostic-score-for-advanced-hodgkin-s-disease-international-prognostic-factors-project-on-advanced-hodgkin-s-disease"
              target="_blank"
            >
              A prognostic score for advanced Hodgkin's disease. International
              Prognostic Factors Project on Advanced Hodgkin's Disease.</a
            ><br />
            New England Journal of Medicine 1998 November 19, 339 (21): 1506-14
            <br /><br />

            The
            <a
              href="https://qxmd.com/calculate/calculator_107/hodgkin-s-disease-prognosis"
              target="_blank"
            >
              Hodgkin's Disease | Prognosis calculator</a
            >
            is created by QxMD.
          </div>
          
        </div>
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
      question1: 0,
      question2: 0,
      question3: 0,
      question4: 0,
      question5: 0,
      question6: 0,
      question7: 0,
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