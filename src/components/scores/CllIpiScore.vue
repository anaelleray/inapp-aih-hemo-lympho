  <template>
    <div class="score">
        <div class="title-red">
            International Prognostic Index for Chronic Lymphocytic Leukemia (CLL-IPI)
        </div>
        <div class="sous-title">
            Stratifies patients with chronic lymphocytic leukemia into four risk categories. 
        </div>
        <hr style="background-color:#000;">
        <div>
            <div class="question">
                <div class="question-title">Age</div>
                <div class="response">
                    <div :class="changeClassIf('inputA', 'infEg65')" @click="changeInput({ inputA: 'infEg65' })"> ≤65 years</div>
                    <div :class="changeClassIf('inputA', 'sup65')" @click="changeInput({ inputA: 'sup65' })">>65 years</div>
                </div>
            </div>
            <div class="question">
                <div class="question-title">Clinical stage</div>             
                <div class="response">
                    <div :class="changeClassIf('inputB', 'BinetA')" @click="changeInput({ inputB: 'BinetA'})">Binet A or Rai 0</div>
                    <div :class="changeClassIf('inputB', 'BinetBC')" @click="changeInput({ inputB: 'BinetBC'})">Binet B-C or Rai I-IV </div>
                </div>
            </div>
            <div class="question">
                <div class="question-title">Serum β2 microglobulin, mg/L (or µg/mL)</div>             
                    <div class="response">
                    <div :class="changeClassIf('inputC', 'infEg3.5')" @click="changeInput({ inputC: 'infEg3.5'})">≤3.5</div>
                    <div :class="changeClassIf('inputC', 'sup3.5')" @click="changeInput({ inputC: 'sup3.5'})">>3.5</div>
                </div>
            </div> 
            <div class="question">
                <div class="question-title">IGHV mutational status</div>             
                    <div class="response">
                    <div :class="changeClassIf('inputD', 'Mutated')" @click="changeInput({ inputD: 'Mutated'})">Mutated</div>
                    <div :class="changeClassIf('inputD', 'Unmutated')" @click="changeInput({ inputD: 'Unmutated'})">Unmutated</div>
                </div>
            </div>              
            <div class="question">
                <div class="question-title">TP53 status</div>             
                    <div class="response">
                    <div :class="changeClassIf('inputE', 'Tp53No')" @click="changeInput({ inputE: 'Tp53No'})">No abnormalities</div>
                    <div :class="changeClassIf('inputE', 'Tp53Del')" @click="changeInput({ inputE: 'Tp53Del'})">Deletion 17p (FISH) and/or TP53 mutation (sequencing)</div>
                </div>
            </div>  
            <div v-if="input.inputA != null && input.inputB != null && input.inputC != null && input.inputD != null && input.inputE != null" >
                <div class="consequence">
                    Prognosis
                    <br><br>
                    <div>
                        <div class="r1">{{result.points}} points</div>
                        <div class="r2">{{result.risk}}</div>
                        <div class="r2">{{result.rate}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="link">
            <div class="link-title">
                Litterature
            </div>
            <div class="link-subTitle">
                Original / Primary reference
            </div>
            <div class="linkUrl">
                <a href="https://pubmed.ncbi.nlm.nih.gov/27185642/" target="_blank">An international prognostic index for patients with chronic lymphocytic leukaemia (CLL-IPI): a meta-analysis of individual patient data. Lancet Oncol. 2016;17(6):779-90.</a>
            </div>
            <div class="link-subTitle">
                Validation
            </div>
            <div class="linkUrl">
                <a href="https://pubmed.ncbi.nlm.nih.gov/27549308/" target="_blank">1. Gentile M, Shanafelt TD, Rossi D, et al. Validation of the CLL-IPI and comparison with the MDACC prognostic index in newly diagnosed patients. Blood. 2016;128(16):2093-2095.</a>
            </div>
            <div class="linkUrl">
                <a href="https://pubmed.ncbi.nlm.nih.gov/27465919/" target="_blank">2. Molica S, Shanafelt TD, Giannarelli D, et al. The chronic lymphocytic leukemia international prognostic index predicts time to first treatment in early CLL: Independent validation in a prospective cohort of early stage patients. Am J Hematol. 2016;91(11):1090-1095.</a>
            </div>
            <div class="linkUrl">
                 <a href="https://pubmed.ncbi.nlm.nih.gov/27605511/" target="_blank">3. Da Cunha-Bang C, Christiansen I, Niemann CU. The CLL-IPI applied in a population-based cohort. Blood. 2016;128(17):2181-2183.</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({  
   name: "CllIpiScore",
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
            result: {
                points: "", 
                risk: "",
                rate:"",
            }
        } as any
    },
    methods: {
        calculateResult(value) {
            this.reponse1 = value.inputA ==="sup65" ? 1 : 0;  
            this.reponse2 = value.inputB ==="BinetBC" ? 1 : 0 ;  
            this.reponse3 = value.inputC ==="sup3.5" ? 2 : 0;  
            this.reponse4 = value.inputD ==="Unmutated" ? 2 : 0;  
            this.reponse5 = value.inputE ==="Tp53Del" ? 4 : 0;        
    
            this.score = this.reponse1 + this.reponse2 + this.reponse3 + this.reponse4 + this.reponse5
            this.displayResult()
        },
        changeInput(value: any) {
            this.input = {...this.input, ...value}
            this.calculateResult(this.input)
          
        },
        displayResult(){
            this.result.points = this.score;
            if(this.score < 2){
                this.result.risk = "Faible risque";
                this.result.rate = "93,20% 5 year survival";
            }
            if(this.score == 2 || this.score == 3){
                this.result.risk = "Risque intermédiaire";
                this.result.rate = "79,30% 5 year survival";
            }
            if(this.score > 3 && this.score < 7){
                this.result.risk = "Risque élevé";
                this.result.rate = "63,30% 5 year survival";
            }
            if(this.score > 7 && this.score <= 10){
                this.result.risk = "Risque très élevé";
                this.result.rate = "23,30% 5 year survival";
            }
        }, 
        changeClassIf(whichInput: string, value: string) {
            if (value === this.input[whichInput]) {
                return "button button-selected"
            } else {
                return "button "
            }
        }       
    },
})
</script>

<style >
button[class~="on"]{
    background-color: green; 
}
</style>