  <template>
    <div class="score-binet-1">
        <h2>Binet Staging System for Chronic Lymphocytic Leukemia (CLL)</h2>

        <div class="score-form">
            <div class="row">
                <div class="col1">
                    <div class="title">Areas of lymphadenopathy</div>
                    <div class="info">Cervical, axillary, inguinal, spleen, and liver</div>
                </div>
                <div class="col2">
                    <button @click="changeInput({ inputA: 'inf3' })">&lsaquo; 3</button>
                    <button @click="changeInput({ inputA: 'supEgal3' })">≥ 3</button>
                </div>
            </div>
            <div class="row">
                <div class="col1">
                    Anemia Hgb &lsaquo;10 g/dL
                </div>
                <div class="col2">
                    <button @click="changeInput({ inputB: 'No'})">No</button>
                    <button @click="changeInput({ inputB: 'Yes'})">Yes</button>
                </div>
            </div>
            <div class="row">
                <div class="col1">
                    ThrombocytopeniaPlatelets &lsaquo;100,000/mm
                </div>
                <div class="col2">
                    <button @click="changeInput({ inputC: 'No'})">No</button>
                    <button @click="changeInput({ inputC: 'Yes'})">Yes</button>
                </div>
            </div>

            <h3>Résultat</h3>
            <div class="score-result">
                <div class="r1">Binet Stage : {{result.stage}}</div>
                <div class="r2">Risk : {{result.risk}}</div>
                <div class="r2">Overall survival : {{result.survival}}</div>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({  
   name: "BinetScore",
    components: {

    },
    data()
    {
        return {
            input: {
                inputA: "inf3",
                inputB: "No",
                inputC: "No",
            },
            result: {
                stage: "",
                risk: "",
                survival: "",
            }
        } as any
    },
    methods: {
        calculateResult() {
            if(this.input.inputA=="inf3" && this.input.inputB=="No" && this.input.inputC=="No"){
                this.result = {
                    stage: "Stage A",
                    risk: "Low",
                    survival: "12 years"
                }
            }
            if(this.input.inputA=="supEgal3" && this.input.inputB=="No" && this.input.inputC=="No"){
                this.result = {
                    stage: "Stage B",
                    risk: "Intermediate",
                    survival: "7 years"
                }
            }
            if(this.input.inputC=="Yes" || this.input.inputB=="Yes"){
                this.result = {
                    stage: "Stage C",
                    risk: "High",
                    survival: "2-4 years"
                }
            }
        },
        changeInput(value: any) {
            this.input = {...this.input, ...value}
            this.calculateResult()

        },
        
    },
    mounted()
    {
        
    },
})
</script>
