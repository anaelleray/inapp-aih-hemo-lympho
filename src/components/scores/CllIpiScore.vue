  <template>
    <div class="score-cll-ipi">
        <h2>International Prognostic Index for Chronic Lymphocytic Leukemia (CLL-IPI)</h2>
        <h4>Stratifies patients with chronic lymphocytic leukemia into four risk categories. </h4>

        <div class="score-form">
            <div class="row">
                <div class="col1">
                    <div class="title">Age</div>
                </div>
                <div class="col2">
                    <button :class="changeClassIf('inputA', 'infEg65')" @click="changeInput({ inputA: 'infEg65' })"> ≤65 years</button>
                    <button :class="changeClassIf('inputA', 'sup65')" @click="changeInput({ inputA: 'sup65' })">>65 years</button>
                </div>
            </div>
            <div class="row">
                <div class="col1">Clinical stage</div>             
                    <div class="col2">
                    <button :class="changeClassIf('inputB', 'BinetA')" @click="changeInput({ inputB: 'BinetA'})">Binet A or Rai 0</button>
                    <button :class="changeClassIf('inputB', 'BinetBC')" @click="changeInput({ inputB: 'BinetBC'})">Binet B-C or Rai I-IV </button>
                </div>
            </div>
            <div class="row">
                <div class="col1">Serum β2 microglobulin, mg/L (or µg/mL)</div>             
                    <div class="col2">
                    <button :class="changeClassIf('inputC', 'infEg3.5')" @click="changeInput({ inputC: 'infEg3.5'})">≤3.5</button>
                    <button :class="changeClassIf('inputC', 'sup3.5')" @click="changeInput({ inputC: 'sup3.5'})">>3.5</button>
                </div>
            </div> 
            <div class="row">
                <div class="col1">IGHV mutational status</div>             
                    <div class="col2">
                    <button :class="changeClassIf('inputD', 'Mutated')" @click="changeInput({ inputD: 'Mutated'})">Mutated</button>
                    <button :class="changeClassIf('inputD', 'Unmutated')" @click="changeInput({ inputD: 'Unmutated'})">Unmutated</button>
                </div>
            </div>              
            <div class="row">
                <div class="col1">TP53 status</div>             
                    <div class="col2">
                    <button :class="changeClassIf('inputE', 'Tp53No')" @click="changeInput({ inputE: 'Tp53No'})">No abnormalities</button>
                    <button :class="changeClassIf('inputE', 'Tp53Del')" @click="changeInput({ inputE: 'Tp53Del'})">Deletion 17p (FISH) and/or TP53 mutation (sequencing)</button>
                </div>
            </div>  
            <div class="score-result">  
                <h3>Résultat</h3>           
                <div class="r1">{{result.points}} points</div>
                <div class="r2">{{result.risk}}</div>
                <div class="r3">{{result.rate}}</div>
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
                inputA: "",
                inputB: "",
                inputC: "",
                inputD: "",
                inputE: "",
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
                return "on"
            } else {
                return "off"
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