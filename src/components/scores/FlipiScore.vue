<template>
    <div class="score">
        <div class="title-red">
            Follicular Lymphoma International Prognostic Index (FLIPI)
        </div>
        <div class="sous-title">
            Estimates overall survival based on clinical information.
        </div>
        <hr style="background-color:#000;">
        <div class="question">
            <div class="question-title">Age &gt;60 years
                <div class="no-selected response">
                    <div class="button" id="ageNo" clicked="false" @click="counter($event, '-', 'ageYes')">No 0</div>
                </div>
                <div class="yes-selected response">
                    <div class="button" id="ageYes" clicked="false" @click="counter($event, '+', 'ageNo')">Yes +1</div>
                </div>
            </div>
        </div>
        <div class="question">
            <div class="question-title">&gt;4 nodal sites
                See Evidence for nodal diagram.
                <div class="no-selected response">
                    <div class="button" id="nodalNo" clicked="false" @click="counter($event, '-', 'nodalYes')">No 0</div>
                </div>
                <div class="yes-selected response">
                    <div class="button" id="nodalYes" clicked="false" @click="counter($event, '+', 'nodalNo')">Yes +1</div>
                </div>
            </div>
        </div>
        <div class="question">
            <div class="question-title">LDH elevated
                <div class="no-selected response">
                    <div class="button" id="ldhNo" clicked="false" @click="counter($event, '-', 'ldhYes')">No 0</div>
                </div>
                <div class="yes-selected response">
                    <div class="button" id="ldhYes" clicked="false"  @click="counter($event, '+', 'ldhNo')">Yes +1</div>
                </div>
            </div>
        </div>
        <div class="question">
            <div class="question-title">Hemoglobin &lt;120 g/L or 12 g/dL
                <div class="no-selected response">
                    <div class="button" id="hemoNo" clicked="false" @click="counter($event, '-', 'hemoYes')">No 0</div>
                </div>
                <div class="yes-selected response">
                    <div class="button" id="hemoYes" clicked="false" @click="counter($event, '+', 'hemoNo')">Yes +1</div>
                </div>
            </div>
        </div>
        <div class="question">
            <div class="question-title">
                Stage III-IV
                <br/>
                Stage I: disease is located in a single region, usually one lymph node and the surrounding area.
                <br/>
                Stage II: disease is located in two separate regions, an affected lymph node or organ and a second affected area. Both affected areas are confined to one side of the diaphragm. 
                <br/>
                Stage III: disease involves both sides of the diaphragm, including one organ or area near the lymph nodes or the spleen.
                <br/>
                Stage IV: diffuse or disseminated involvement of one or more extranodal organs, with or without associated lymph node involvement.
                <br/>
                <div class="no-selected response">
                    <div class="button" id="stageNo" clicked="false" @click="counter($event, '-', 'stageYes')">No 0</div>
                </div>
                <div class="yes-selected response">
                    <div class="button" id="stageYes" clicked="false" @click="counter($event, '+', 'stageNo')">Yes  +1</div>
                </div>
            </div>
        </div>
        <div class="consequence">
            <div class="consequence-points">{{this.points}} points</div>
            <div class="consequence-text">{{this.risk}}</div>
            <div class="consequence-text">{{this.survival}}</div>
        </div>
        <div class="link">
            <div class="link-title">
                Litterature
            </div>
            <div class="link-subTitle">
                Original / Primary reference
            </div>
            <div class="linkUrl">
                <a href="https://pubmed.ncbi.nlm.nih.gov/15126323/" target="_blank">Solal-Celigny et al. Follicular Lymphoma InternationalPrognostic Index. Blood 104:1258-1265. (2004)</a>
            </div>
            <div class="link-subTitle">
                Validation
            </div>
            <div class="linkUrl">
                <a href="https://www.journals.elsevier.com/annals-of-oncology" target="_blank">van de Schans SAM, et. al. Validation,revision and extension of the Follicular Lymphoma International Prognostic Index (FLIPI) in a population-based settingAnnOncol (2009) 20 (10): 1697-1702 first published online June 23, 2009 doi:10.1093/annonc/mdp053</a>
            </div>
        </div>
    </div>  
</template>

<script lang="ts">

import Vue from "vue"
export default Vue.extend({

    name: "FLIPI",
    data()
    {
        return {
            points : 0,
            risk : "Low risk",
            survival : "10-year overall survival is approximately 70%",
        }
    },
    methods: {
        counter:function(event, inc, id){

            const triggerBtn = event.target;
            const otherBtn = document.getElementById(id);
            triggerBtn.style.backgroundColor  = "red";
            otherBtn.style.backgroundColor = "#e1e1e1";
            let clickedState = triggerBtn.getAttribute("clicked");
            triggerBtn.classList.add("button-selected");
            otherBtn.classList.remove("button-selected");

            if( clickedState === "false" ) { 
                if (inc === "+"){ 
                        this.points++ 
                    } else { 
                        if(this.points > 0) this.points-- 
                    }
            }

            triggerBtn.setAttribute("clicked", "true");
            otherBtn.setAttribute("clicked", "false");
            ////////////////////////////////
            //Détermination des paramètres d'adaptation des données textuelles
            if(this.points === 1){
                this.risk = "Low risk"
                this.survival = "10-year overall survival is approximately 70%"
            }
            if(this.points === 2) {
                this.risk = "Intermediate Risk"
                this.survival = "10-year overall survival is approximately 50%"
            }
            if(this.points === 3) {
                this.risk = "High Risk"
                this.survival = "10-year overall survival is approximately 35%"
            }
            if(this.points === 4) {
                this.risk = "High Risk"
                this.survival = "10-year overall survival is approximately 35%"
            }
            if(this.points === 5) {
                this.risk = "High Risk"
                this.survival = "10-year overall survival is approximately 35%"
            }
        }
    },
    mounted()
    {
        
    },
})
</script>