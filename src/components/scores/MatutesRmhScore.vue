  <template>
    <div class="score-matutes-rmh">
        <h2>CLL immunophenotypic score (Matutes score) </h2>
      
        <div class="score-form">
            <div class="row">
                <div class="col1">
                    <div>CD79b (or CD22)</div>
                </div>
                <div class="col2">                    
                    <button :class="changeClassIf('inputA', 'Strong')" @click="changeInput({ inputA: 'Strong' })">Strong</button>
                    <button :class="changeClassIf('inputA', 'Weak')" @click="changeInput({ inputA: 'Weak' })">Weak</button>
                </div>
            </div>
            <div class="row">
                <div class="col1">
                    <div>CD23</div>
                </div>
                <div class="col2">                    
                    <button :class="changeClassIf('inputB', 'Negative')" @click="changeInput({ inputB: 'Negative' })">Negative</button>
                    <button :class="changeClassIf('inputB', 'Positive')" @click="changeInput({ inputB: 'Positive' })">Positive</button>
                </div>
            </div>  
            <div class="row">
                <div class="col1">
                    <div>CD5</div>
                </div>
                <div class="col2">                    
                    <button :class="changeClassIf('inputC', 'Negative')" @click="changeInput({ inputC: 'Negative' })">Negative</button>
                    <button :class="changeClassIf('inputC', 'Positive')" @click="changeInput({ inputC: 'Positive' })">Positive</button>
                </div>
            </div> 
            <div class="row">
                <div class="col1">
                    <div>FMC7 </div>
                </div>
                <div class="col2">                    
                    <button :class="changeClassIf('inputD', 'Negative')" @click="changeInput({ inputD: 'Negative' })">Negative</button>
                    <button :class="changeClassIf('inputD', 'Positive')" @click="changeInput({ inputD: 'Positive' })">Positive</button>
                </div>
            </div>  
            <div class="row">
                <div class="col1">
                    <div>SmIg </div>
                </div>
                <div class="col2">                    
                    <button :class="changeClassIf('inputE', 'Strong')" @click="changeInput({ inputE: 'Strong' })">Strong</button>
                    <button :class="changeClassIf('inputE', 'Weak')" @click="changeInput({ inputE: 'Weak' })">Weak</button>
                </div>
            </div>   

            <div class="score-result">
                <div class="info">Un score > ou = 4 indique une LLC. Un score 	&lt; ou = 3 doit inciter à envisager un diagnostic alternatif </div>
                <h3>Sum of Diagnosis</h3>
                <div class="r1"> {{score}}</div>
                <div class="r1"> {{info}}</div>
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
            console.log(this.score)

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
                return "on"
            } else {
                return "off"
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
