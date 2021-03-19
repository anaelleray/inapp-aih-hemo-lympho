<template>
    <div class="score">
        <div class="title-red">Score pronostique de survie globale pour LLC en rechute/réfractaire préalablement traitée par Ibrutinib/Venetoclax/Idelalisib</div>
        <hr style="background-color:#000;">

        <div class="question">
            <div class="question-title">B2M: Beta-2 microglobulin (B2M) ≥ 5mg/L?</div>
            <div class="response">
                <div id="question1-1" class="button question1" @click="calculateScore(1,1)">≥ 5 mg/L</div>
                <div id="question1-0" class="button question1" @click="calculateScore(0,1)">&lsaquo; 5 mg/L</div>
            </div>
        </div>

        <div class="question" >
            <div class="question-title">≥ Anemia: Male with Hgb &lsaquo; 120 g/L or Female with Hgb &lsaquo;110 g/L?</div>
            <div class="response">
                <div id="question2-1" class="button question2" @click="calculateScore(1,2)">YES</div>
                <div id="question2-0" class="button question2" @click="calculateScore(0,2)">NO</div>
            </div>
        </div>

        <div class="question">
            <div class="question-title">LDH: LDH > upper limit of normal?</div>
            <div class="response">
                <div id="question3-1" class="button question3" @click="calculateScore(1,3)">Elevated</div>
                <div id="question3-0" class="button question3" @click="calculateScore(0,3)"> Not Elevated</div>
            </div>
        </div>

        <div class="question">
            <div class="question-title">Last therapy: Time from initiation of last therapy &lsaquo; 24 months?</div>
            <div class="response">
                <div id="question4-1" class="button question4" @click="calculateScore(1,4)">&lsaquo; 24 months</div>
                <div id="question4-0" class="button question4" @click="calculateScore(0,4)">≥ 24 months </div>
            </div>
        </div>
        
        <div v-if="question1 != null && question2 != null && question3 != null &&  question4 != null" >
            <div class="consequence">
                Prognosis
                <br><br>
                <div class="consequence-text">{{result}}</div>
            </div>
        </div>

        <div class="about">
            <div class="title-about">EVIDENCE APPRAISAL</div>
            <div>The Relapsed CLL BALL Score identifies three prognostic groups with significantly different overall survival. Application of this risk model to patients with relapsed/refractory CLL reliably identifies patients at increased risk of death, and is validated for patients treated with all currently approved targeted therapies: ibrutinib, idelalisib, and venetoclax. By applying the Relapsed CLL BALL Score to individual patients, treating physicians can identify patients at increased risk of death despite targeted therapies. We propose that high and intermediate risk patients should be evaluated for consideration in clinical trials, as their expected survival with modern targeted therapies remains suboptimal. Investigators can address this unmet need by designing prospective trials targeting these higher risk patients.</div>
        </div>

        <div class="link">
            <div class="link-title">
                Litterature
            </div>
            <div class="link-subTitle">
                REFERENCES
            </div>
            <div class="linkUrl">
                <div>Soumerai JD, Ni A, Darif M, et al.</div>
                <a href="https://read.qxmd.com/read/31109827/prognostic-risk-score-for-patients-with-relapsed-or-refractory-chronic-lymphocytic-leukaemia-treated-with-targeted-therapies-or-chemoimmunotherapy-a-retrospective-pooled-cohort-study-with-external-validations" target="_blank">Prognostic risk score for patients with relapsed or refractory chronic lymphocytic leukaemia treated with targeted therapies or chemoimmunotherapy: a retrospective, pooled cohort study with external validations.</a><br/>
                <div>Lancet Haematology 2019, 6 (7): e366-e374</div>
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
        result : "", 
        score: 0,
        question1:null,
        question2:null,
        question3:null,
        question4:null,
    }
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
        }else{
            newSelec.classList.add("button-selected");
        }

       switch(question){
           case 1 : this.question1 = value;break
           case 2 : this.question2 = value;break
           case 3 : this.question3 = value;break
           case 4 : this.question4 = value;break
       }
        this.score = this.question1 + this.question2 + this.question3 + this.question4
        this.calculateResult()
    },
    
    calculateResult (){
        if (this.score <= 1)  this.result ="Risque faible"
        if (this.score >= 2 && this.score <=3 ) this.result = "Risque intermédiaire"
        if (this.score == 4) this.result = "Risque élevé"
    }
  }
})
</script>

<style>

.result {
    display:none;
}

</style>