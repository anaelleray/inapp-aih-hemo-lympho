<template>
  <div class="score-2">
      <h2>CLL BALL Score for Relapsed/Refractory CLL</h2>
      <p>The Relapsed CLL BALL Score risk model was derived in a population of previously treated CLL patients who received protocol-based therapy in ibrutinib phase 3 trials, and was externally validated in three independent cohorts including a pooled dataset from idelalisib phase 3 trials, a venetoclax phase 3 trial, and the Mayo Clinic CLL Database.</p>
      <p>The Relapsed CLL BALL Score consists of four factors, each assigned 1 point:<br/>

        B2M: B2M >5mg/L<br/>
        Anemia: Hemoglobin &#8249; 110 g/L<br/>
        LDH: LDH > upper limit of normal<br/>
        Last therapy: Time from initiation of last therapy &#8249; 24 months<br/>
        The Relapsed CLL BALL Score identifies three prognostic groups (low risk, score 0-1; intermediate risk, score 2-3; high risk, score 4) with significantly different overall survival. Application of this risk model to patients with relapsed/refractory CLL reliably identifies patients at increased risk of death, and is validated for patients treated with all currently approved targeted therapies: ibrutinib, idelalisib, and venetoclax.
        By applying the Relapsed CLL BALL Score to individual patients, treating physicians can identify patients at increased risk of death despite targeted therapies. We propose that high and intermediate risk patients should be evaluated for consideration in clinical trials, as their expected survival with modern targeted therapies remains suboptimal.
        Investigators can address this unmet need by designing prospective trials targeting these higher risk patients.</p>
       
        <div class="question1">
            <div>B2M: Beta-2 microglobulin (B2M) ≥ 5mg/L?</div>
            <button @click="incrementScore()">>= 5 mg/L </button>
            <button>&#8249;5 mg/L </button>
        </div>
        <div class="question2" >
            <div>≥ Anemia: Male with Hgb &lsaquo; 120 g/L or Female with Hgb &lsaquo;110 g/L?</div>
            <button @click="incrementScore()">YES</button>
            <button>NO</button>
        </div>
        <div class="question3">
            <div>LDH: LDH > upper limit of normal?</div>
            <button @click="incrementScore()">Elevated</button>
            <button> Not Elevated</button>
        </div>
        <div class="question4">
            <div>Last therapy: Time from initiation of last therapy &lsaquo; 24 months?</div>
            <button @click="incrementScore()">&lsaquo; 24 months</button>
            <button> >= 24 months </button>
        </div>
        <button @click="calculateResult()"> View results </button>
        <div class="results">
            <h3>Results</h3>
            <div>Risk</div>
            <div>{{result}}</div>
            <div>
                <h3>Interpretation</h3>
                <div>The Relapsed CLL BALL Score identifies three prognostic groups with significantly different overall survival. Application of this risk model to patients with relapsed/refractory CLL reliably identifies patients at increased risk of death, and is validated for patients treated with all currently approved targeted therapies: ibrutinib, idelalisib, and venetoclax.
<br/>By applying the Relapsed CLL BALL Score to individual patients, treating physicians can identify patients at increased risk of death despite targeted therapies. We propose that high and intermediate risk patients should be evaluated for consideration in clinical trials, as their expected survival with modern targeted therapies remains suboptimal.
<br/>Investigators can address this unmet need by designing prospective trials targeting these higher risk patients.</div>
            </div>


        </div>
        
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: "CllBallScore",
  data()
  {
    return {
        result :"", 
        score: 0,
    }
  },
  mounted()
  {
      
  },
  methods: {
   incrementScore(){
        this.score ++
        console.log(this.score)
    },

    displayQuestion(question){
        question.display
    }, 

    isClicked(){

    }, 
    calculateResult (){
      if (this.score <= 1)  this.result ="Low Risk"
      if (this.score >= 2 && this.score <=3 ) this.result = "Intermediate Risk"
      if (this.score == 4) this.result = "High Risk"
      console.log(this.result)
    }
  }

})
</script>

<style>
.question2{
    display: none;
}
.question3{
    display: none;
}
.question4{
    display: none;
}
</style>