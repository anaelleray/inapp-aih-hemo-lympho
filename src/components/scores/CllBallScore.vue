<template>
    <div class="score">
        <div class="title-red">CLL BALL Score for Relapsed/Refractory CLL</div>
        <hr style="background-color:#000;">

        <div class="question">
            <div class="question-title">B2M: Beta-2 microglobulin (B2M) ≥ 5mg/L?</div>
            <div class="response">
                <div class="button" @click="calculateScore(1,1)">≥ 5 mg/L</div>
                <div class="button" @click="calculateScore(0,1)">&lsaquo; 5 mg/L</div>
            </div>
        </div>

        <div class="question" >
            <div class="question-title">≥ Anemia: Male with Hgb &lsaquo; 120 g/L or Female with Hgb &lsaquo;110 g/L?</div>
            <div class="response">
                <div class="button" @click="calculateScore(1,2)">YES</div>
                <div class="button" @click="calculateScore(0,2)">NO</div>
            </div>
        </div>

        <div class="question">
            <div class="question-title">LDH: LDH > upper limit of normal?</div>
            <div class="response">
                <div class="button" @click="calculateScore(1,3)">Elevated</div>
                <div class="button" @click="calculateScore(0,3)"> Not Elevated</div>
            </div>
        </div>

        <div class="question">
            <div class="question-title">Last therapy: Time from initiation of last therapy &lsaquo; 24 months?</div>
            <div class="response">
                <div class="button" @click="calculateScore(1,4)">&lsaquo; 24 months</div>
                <div class="button"@click="calculateScore(0,4)">≥ 24 months </div>
            </div>
        </div>
        
        <div @click="calculateResult()"> View results </div>
        <div class="result" id="result">
            <h3>Result</h3>
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
        question1:0,
        question2:0,
        question3:0,
        question4:0,
    }
  },
  methods: {
   calculateScore(value, question){
       switch(question){
           case 1 : this.question1 = value;break
           case 2 : this.question2 = value;break
           case 3 : this.question3 = value;break
           case 4 : this.question4 = value;break
       }
        this.score = this.question1 + this.question2 + this.question3 + this.question4
    },
    calculateResult (){
        var res = document.getElementById("result")
        res.style.display = "block"
        if (this.score <= 1)  this.result ="Low Risk"
        if (this.score >= 2 && this.score <=3 ) this.result = "Intermediate Risk"
        if (this.score == 4) this.result = "High Risk"
    }
  }
})
</script>

<style>

.result {
    display:none;
}

</style>