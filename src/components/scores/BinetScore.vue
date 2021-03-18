<template>
    <div class="score">

        <div class="title-red">
            Binet Staging System for Chronic Lymphocytic Leukemia (CLL)
        </div>
        <div class ="sous-title">
            Système de stadification Binet pour la leucémie lymphoïde chronique
        </div>
        <hr style="background-color:#000;">
        <div class ="title-purple">
            Stades de la leucémie lymphoïde chronique, similaire au système de stadification Rai .
        </div>
        <div>
            <div class="question">
                <div >
                    <div class="question-title">Areas of lymphadenopathy</div>
                    <div class="info">Cervical, axillary, inguinal, spleen, and liver</div>
                </div>
                <div class="response">
                    <div :class="changeClassIf('inputA', 'inf3')" @click="changeInput({ inputA: 'inf3' })">&lsaquo; 3</div>
                    <div :class="changeClassIf('inputA', 'supEgal3')" @click="changeInput({ inputA: 'supEgal3' })">≥ 3</div>
                </div>
            </div>
            <div class="question">
                <div class="question-title">
                    Anemia Hgb &lsaquo;10 g/dL
                </div>
                <div class="response">
                    <div :class="changeClassIf('inputB', 'No')" @click="changeInput({ inputB: 'No'})">No</div>
                    <div :class="changeClassIf('inputB', 'Yes')" @click="changeInput({ inputB: 'Yes'})">Yes</div>
                </div>
            </div>
            <div class="question">
                <div class="question-title">
                    ThrombocytopeniaPlatelets &lsaquo;100,000/mm
                </div>
                <div class="response">
                    <div :class="changeClassIf('inputC', 'No')" @click="changeInput({ inputC: 'No'})">No</div>
                    <div :class="changeClassIf('inputC', 'Yes')" @click="changeInput({ inputC: 'Yes'})">Yes</div>
                </div>
            </div>

            <div v-if="input.inputA != null && input.inputB != null && input.inputC != null " >
                <div class="consequence">
                    Prognosis
                    <br><br>
                    <div>
                        <div class="r1">Binet Stage : {{result.stage}}</div>
                        <div class="r2">Risk : {{result.risk}}</div>
                        <div class="r2">Overall survival : {{result.survival}}</div>
                    </div>
                </div>
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
                inputA: null,
                inputB: null,
                inputC: null,
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
            if(this.input.inputA == "inf3" && this.input.inputB=="No" && this.input.inputC=="No"){
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
