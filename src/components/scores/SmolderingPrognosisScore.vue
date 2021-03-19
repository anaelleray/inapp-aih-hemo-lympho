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
                <div id="start">{{this.result}}{{this.warning}}</div>
                <div id="diagnostic">{{this.diagnostic}}</div>
                <div id="pourcentage">{{this.pourcentage}}</div>
                <div id="months">{{this.months}}</div>
                <div id="singleView">{{this.singleView}}</div>
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
            result: "result:",
            warning: "Please fill out required fields.",
            diagnostic : "",
            pourcentage: "",
            months: "",
            singleView : "Patient does not meet criteria for asymptomatic myeloma (see Pearls/Pitfalls for criteria)"
        } 
    },

    methods: {
        switchValue:function(event){

            let ie10 = document.getElementById("ie10");
            let s10 = document.getElementById("s10");
            let ie3 = document.getElementById("ie3");
            let s3 = document.getElementById("s3");

            let d = document.getElementById("diagnostic");
            let p = document.getElementById("pourcentage");
            let m = document.getElementById("months");
            let s = document.getElementById("singleView");
            let r = document.getElementById("start");

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
////////////////////////////////////////////////////////////////////////////////////////////////

            if(ie10.classList.contains("is-selected") && ie3.classList.contains("is-selected")) {
                this.diagnostic = "High risk"
                this.pourcentage = "69% Risk of progression at 5 years - 77% at 10 years - 87% at 15 years"
                this.months = "27 months - Median time to progression"
                d.style.display = "block"
                p.style.display = "block"
                m.style.display = "block"
                s.style.display = "none"
                r.style.display = "none"
            }
            if(ie10.classList.contains("is-selected") && s3.classList.contains("is-selected")) {
                this.diagnostic = "Intermediate risk"
                this.pourcentage = " 43% Risk of progression at 5 years - 64% at 10 years - 70% at 15 years"
                this.months = " 93 months - Median time to progression"
                d.style.display = "block"
                p.style.display = "block"
                m.style.display = "block"
                s.style.display = "none"
                r.style.display = "none"
            }
            if(s10.classList.contains("is-selected") && ie3.classList.contains("is-selected")) {
                this.diagnostic = "Low risk"
                this.pourcentage = "15% Risk of progression at 5 years - 33% at 10 years - 39% at 15 years"
                this.months = "228 months - Median time to progression"
                d.style.display = "block"
                p.style.display = "block"
                m.style.display = "block"
                s.style.display = "none"
                r.style.display = "none"
            }
            if(s10.classList.contains("is-selected") && ie3.classList.contains("is-selected")) {
                this.diagnostic = "Low risk"
                this.pourcentage = "15% Risk of progression at 5 years - 33% at 10 years - 39% at 15 years"
                this.months = "228 months - Median time to progression"
                d.style.display = "block"
                p.style.display = "block"
                m.style.display = "block"
                s.style.display = "none"
                r.style.display = "none"
            }
            if(s10.classList.contains("is-selected") && s3.classList.contains("is-selected")) {
                d.style.display = "none"
                p.style.display = "none"
                m.style.display = "none"
                s.style.display = "block"
                r.style.display = "none"
            }
        }
    },

    mounted()
    {
        
    },
})
</script>