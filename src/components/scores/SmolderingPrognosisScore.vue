<template>
    <div class="smoldForm">
        <div class="smoldBlocText">
            <h1 class="smoldTitle">Asymptomatic Myeloma Prognosis</h1>
            <p class="smoldDescription">Predicts risk of progression of asymptomatic (smoldering) multiple myeloma to active myeloma or amyloidosis.</p>
        </div>
        <div class="smoldForm">
            <div class="smoldInput1">
                <p>Bone marrow plasmacytosis
                Average % from bone marrow aspirate and core biopsy</p>
                <button id="ie10" @click="clicked = !clicked" v-on:click="displayText">&ge;10%</button>
                <button id="s10" @click="clicked = !clicked" v-on:click="displayText" >&lt;10%</button>
            </div>
            <div class="smoldInput2">
                <p>Serum monoclonal protein, g/dL
                    On serum protein electrophoresis</p>
                <button id="ie3" @click="clicked = !clicked" v-on:click="displayText">&ge;3</button>
                <button id="s3" @click="clicked = !clicked" v-on:click="displayText">&lt;3</button>
            </div>
            <div class="smoldWindowResult">
                <div>{{this.diagnostic}}</div>
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
            diagnostic : "null",
            pourcentage: "null",
            months: "null",
            clicked : false
        } 
    },

    methods: {
        displayText: function() {

            let ie10 = document.getElementById("ie10");
            let s10 = document.getElementById("s10");
            let ie3 = document.getElementById("ie3");
            let s3 = document.getElementById("s3");

            if(this.clicked === true) {
                ie10.classList.add("true")
                ie10.classList.remove("false")
                s10.classList.add("true")
                s10.classList.remove("false")
            } else {
                ie10.classList.remove("true")
                ie10.classList.add("false")
                s10.classList.remove("true")
                s10.classList.add("false")
            }
            console.log(ie10, s10)

            
            
            
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