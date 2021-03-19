  <template>
    <div class="score">
        <div class="title-red">
            Score immunophénotypique CLL (score de Matutes)
        </div>
        <hr style="background-color:#000;">
        <div class="question">
            <div class="question-title">
                <div>CD79b (or CD22)</div>
            </div>
            <div class="response">                    
                <div :class="changeClassIf('inputA', 'Strong')" @click="changeInput({ inputA: 'Strong' })">Strong</div>
                <div :class="changeClassIf('inputA', 'Weak')" @click="changeInput({ inputA: 'Weak' })">Weak</div>
            </div>
        </div>
        <div class="question">
            <div class="question-title">
                <div>CD23</div>
            </div>
            <div class="response">                    
                <div :class="changeClassIf('inputB', 'Negative')" @click="changeInput({ inputB: 'Negative' })">Negative</div>
                <div :class="changeClassIf('inputB', 'Positive')" @click="changeInput({ inputB: 'Positive' })">Positive</div>
            </div>
        </div>  
        <div class="question">
            <div class="question-title">
                <div>CD5</div>
            </div>
            <div class="response">                    
                <div :class="changeClassIf('inputC', 'Negative')" @click="changeInput({ inputC: 'Negative' })">Negative</div>
                <div :class="changeClassIf('inputC', 'Positive')" @click="changeInput({ inputC: 'Positive' })">Positive</div>
            </div>
        </div> 
        <div class="question">
            <div class="question-title">
                <div>FMC7 </div>
            </div>
            <div class="response">                    
                <div :class="changeClassIf('inputD', 'Negative')" @click="changeInput({ inputD: 'Negative' })">Negative</div>
                <div :class="changeClassIf('inputD', 'Positive')" @click="changeInput({ inputD: 'Positive' })">Positive</div>
            </div>
        </div>  
        <div class="question">
            <div class="question-title">
                <div>SmIg </div>
            </div>
            <div class="response">                    
                <div :class="changeClassIf('inputE', 'Strong')" @click="changeInput({ inputE: 'Strong' })">Strong</div>
                <div :class="changeClassIf('inputE', 'Weak')" @click="changeInput({ inputE: 'Weak' })">Weak</div>
            </div>
        </div>  

        <div v-if="input.inputA != null && input.inputB != null && input.inputC != null && input.inputD != null && input.inputE != null " >
            <div class="consequence">
                Prognosis
                <br><br>
                <div>
                    <div class="consequence-text">Sum of score :</div>
                    <div class="consequence-points">{{score}}</div>
                    <div class="consequence-text">Diagnosis :</div>
                    <div class="consequence-text">{{info}}</div>
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
                <a href="https://pubmed.ncbi.nlm.nih.gov/7523797/" target="_blank">1. Matutes E, Owusu-Ankomah K, Morilla R, Garcia Marco J, Houlihan A, Que TH et al. The immunological profile of B-cell disorders and proposal of a scoring system for the diagnosis of CLL. Leukemia 1994; 8: 1640-5.</a>
            </div>
            <div class="linkUrl">
                 <a href="https://pubmed.ncbi.nlm.nih.gov/9322589/" target="_blank">2. Moreau EJ, Matutes E, A’Hern RP, Morilla AM, Morilla RM, Owusu-Ankomah KA et al. Improvement of the chronic lymphocytic leukemia scoring system with the monoclonal antibody SN8 (CD79b). Am J Clin Pathol 1997; 108: 378-382.</a>
            </div>
        </div>     



    </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({  
   name: "MatutesRmhScore",
    data()
    {
        return {
            input: {
                inputA: null,
                inputB: null,
                inputC: null,
                inputD: null,
                inputE: null,
            },
            reponse1:0,
            reponse2:0,
            reponse3:0,
            reponse4:0,
            reponse5:0,
            score: 0,
            info:"", 

        } as any
    },
    methods: {
        calculateResult(value) {
            this.reponse1 = value.inputA ==="Weak" ? 1 : 0;  
            this.reponse2 = value.inputB ==="Positive" ? 1 : 0 ;  
            this.reponse3 = value.inputC ==="Positive" ? 1 : 0;  
            this.reponse4 = value.inputD ==="Negative" ? 1 : 0;  
            this.reponse5 = value.inputE ==="Weak" ? 1 : 0;        
    
            this.score = this.reponse1 + this.reponse2 + this.reponse3 + this.reponse4 + this.reponse5

            if(this.score >= 4){
                this.info = "CLL"
            }else{
                this.info = "Consider an alternative diagnosis"
            }
        }, 
        changeInput(value: any) {
            this.input = {...this.input, ...value}
            this.calculateResult(this.input)

        },
        changeClassIf(whichInput: string, value: string) {
            if (value === this.input[whichInput]) {
                return "button button-selected"
            } else {
                return "button "
            }
        }       
        
    },
    mounted()
    {
        
    },
})
</script>
<style >
button[class~="on"]{
    background-color: green; 
}

</style>
