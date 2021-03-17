<template>
    <div class="smoldForm">
        <div class="smoldBlocText">
            <h1 class="smoldTitle">Asymptomatic Myeloma Prognosis</h1>
            <p class="smoldDescription">Predicts risk of progression of asymptomatic (smoldering) multiple myeloma to active myeloma or amyloidosis.</p>
        </div>
        <div class="smoldForm">
            <div class="input1">
                <p>Bone marrow plasmacytosis
                Average % from bone marrow aspirate and core biopsy</p>
                <button class="btn" id="ie10" v-on:click="switchValue">&ge;10%</button>
                <button class="btn" id="s10" v-on:click="switchValue">&lt;10%</button>
            </div>
            <div class="input2">
                <p>Serum monoclonal protein, g/dL
                    On serum protein electrophoresis</p>
                <button class="btn" id="ie3" v-on:click="switchValue">&ge;3</button>
                <button class="btn" id="s3" v-on:click="switchValue">&lt;3</button>
            </div>
            <div class="smoldWindowResult">
                <div>tt</div>
                <div>{{this.pourcentage}}</div>
                <div>{{this.months}}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import Vue from "vue"
export default Vue.extend({
    name: "Smoldering Prognosis",
    data(){
        return {
            diagnostic : ["High risk","Intermediate risk","Low risk"],
            pourcentage: "null",
            months: "null",
            singleView : "Patient does not meet criteria for asymptomatic myeloma (see Pearls/Pitfalls for criteria)"
        } 
    },

    methods: {
        switchValue:function(event){
            console.log(event.type, event.target.id)

            let ie10 = document.getElementById("ie10");
            let s10 = document.getElementById("s10");
            let ie3 = document.getElementById("ie3");
            let s3 = document.getElementById("s3");

            if(event.type == "click" && event.target.id == "ie10"){
                ie10.classList.add("is-selected")
                s10.classList.remove("is-selected")
            
            } else if(event.type == "click" && event.target.id == "s10"){
                s10.classList.add("is-selected")
                ie10.classList.remove("is-selected")

            } else if(event.type == "click" && event.target.id == "ie3"){
                ie3.classList.add("is-selected")
                s3.classList.remove("is-selected")

            } else if(event.type == "click" && event.target.id == "s3"){
                s3.classList.add("is-selected")
                ie3.classList.remove("is-selected")
            }
        }
    },

    mounted()
    {
        
    },
})
</script>
<style>
.smoldWindowResult{
    background-color: #0FFF00
}
</style>