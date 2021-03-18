<template>
  <div class="score-2">
    <h2>Hodgkin's Disease | Prognosis</h2>
    <h3>Estimate prognosis in Hodgkin's disease.</h3>
    <br />
    <div>
      <div class="question1">
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
        <div>7. Lymphopenia: Lymphs &lsaquo;600/mm³ OR &lsaquo;8% of WBC count?</div>
        <button @click="calculateScore(1, 7)">Oui</button>
        <button @click="calculateScore(0, 7)">No</button>
      </div>
      <button @click="calculateResult(), resultFinal()">View results</button>
      <div class="result" id="result">
        <h3>Result: {{ result }}</h3>
        <br />

        <div>
          <div>Hassenclever IPS Score: {{ hassenclever }}</div>
          <br />

          <div>
            Predicted 5-year Rate of Freedom from Progression of Disease:
            {{ predicted }}
          </div>
          <div>---</div>
        </div>
      </div>

      <!-- old code -->
      <!-- <table>
        <tr>
          <td>1. Age ?</td>
          <td>
            <button style="background: #c2f0c2">
              >45 years
            </button>
          </td>
          <td>
            <button style="background: #c2f0c2">
              ≥45 Years
            </button>
          </td>
        </tr>
        <tr>
          <td>2. Gender?</td>
          <td>
            <button style="background: #c2f0c2">Male</button>
          </td>
          <td>
            <button style="background: #c2f0c2">Female</button>
          </td>
        </tr>
        <tr>
          <td>3. Albumin?</td>
          <td>
            <button style="background: #c2f0c2">Normal</button>
          </td>
          <td>
            <button style="background: #c2f0c2"><40 g/L</button>
          </td>
        </tr>
        <tr>
          <td>4. Hemoglobin?</td>
          <td>
            <button style="background: #c2f0c2">
              <span>≥105 g/L</span><br />
              <span>≥105 g/dL</span>
            </button>
          </td>
          <td>
            <button style="background: #c2f0c2">
              <span><105 g/L</span> <br />
              <span><105 g/dL</span>
            </button>
          </td>
        </tr>
        <tr>
          <td>5. Stage?</td>
          <td>
            <button style="background: #c2f0c2">Stage III</button>
          </td>
          <td>
            <button style="background: #c2f0c2">Stage IV</button>
          </td>
        </tr>
        <tr>
          <td>6. Leukocytosis: WBC = 15,000mm³ or more?</td>
          <td>
            <button style="background: #c2f0c2">No</button>
          </td>
          <td>
            <button style="background: #c2f0c2">Oui</button>
          </td>
        </tr>
        <tr>
          <td>7. Lymphopenia: Lymphs <600/mm³ OR <8% of WBC count?</td>
          <td>
            <button style="background: #c2f0c2">No</button>
          </td>
          <td>
            <button style="background: #c2f0c2">Oui</button>
          </td>
        </tr>
      </table> -->
    </div>
    <input type="text" :value="result" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Lymphome de Hodgkin",
  data() {
    return {
      result: 0,
      hassenclever: [0, 1, 2, 3, 4, 5],
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
    },
    calculateResult() {
      var res = document.getElementById("result");
      res.style.display = "block";
      if (this.result <= 1) this.result = "Low Risk";
      if (this.result >= 2 && this.result <= 3)
        this.result = "Intermediate Risk";
      if (this.result == 4) this.result = "High Risk";
    },

    resultFinal() {
      if (this.result = 0) {
        alert('0');
      }
      if (this.result = 1) {
        alert('1');
      }
      if (this.result = 2) {
        alert('2');
      }
      if (this.result = 3) {
        alert('3');
      }
      if (this.result = 4) {
        alert('4');
      }
      if (this.result >= 5) {
        alert('5');
      }
    },
  },
});
</script>

<style>
.result {
  display: none;
}
</style>