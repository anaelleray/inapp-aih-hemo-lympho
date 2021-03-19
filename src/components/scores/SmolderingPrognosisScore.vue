<template>
    <div class="score">
        <div class="title-red">Asymptomatic Myeloma Prognosis</div>
        <div class="sous-title">Predicts risk of progression of asymptomatic (smoldering) multiplemyeloma to     active myeloma or amyloidosis.</div>
        <div class="question">
            <div class="question-title">Bone marrow plasmacytosis
            Average % from bone marrow aspirate and core biopsy</div>
            <button class="btn" id="ie10" v-on:click="switchValue">&ge;10%</button>
            <button class="btn" id="s10" v-on:click="switchValue">&lt;10%</button>
        </div>
        <div class="question">
            <div class="question-title">Serum monoclonal protein, g/dL
                On serum protein electrophoresis</div>
            <button class="btn" id="ie3" v-on:click="switchValue">&ge;3</button>
            <button class="btn" id="s3" v-on:click="switchValue">&lt;3</button>
        </div>
        <div class="consequence">
            <div id="start">{{this.result}}{{this.warning}}</div>
            <div id="diagnostic">{{this.diagnostic}}</div>
            <div id="pourcentage">{{this.pourcentage}}</div>
            <div id="months">{{this.months}}</div>
            <div id="singleView">{{this.singleView}}</div>
        </div>
        <div class="link">
            <div class="link-title">
                Litterature
            </div>
            <div class="link-subTitle">
                Original / Primary reference
            </div>
            <div class="linkUrl">
                <a href="https://pubmed.ncbi.nlm.nih.gov/17582068/" target="_blank">Kyle RA, Remstein ED, Therneau TM, Dispenzieri A, Kurtin PJ, Hodnefield JM, Larson DR, Plevak MF, Jelinek DF, Fonseca R, Melton LJ 3rd, Rajkumar SV. Clinical course and prognosis of smoldering (asymptomatic) multiple myeloma. N Engl J Med. 2007 Jun 21;356(25):2582-90. PMID:17582068.</a>
            </div>
            <div class="link-subTitle">
                Validation
            </div>
            <div class="linkUrl">
                <a href="https://ashpublications.org/blood/article/126/23/4251/135691/Validation-of-the-Novel-Criteria-for-the" target="_blank">Kastritis E, Terpos E, et al. Validation of the Novel Criteria for the Definition of Symptomatic Myeloma: A Single Center Experience in 216 Patients with the Previous Diagnosis of Asymptomatic Disease. Blood 2015 126:4251</a>
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