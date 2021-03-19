<template>
    <div class="score">
        <div class="title-red">
            Groupe d'Etude des Lymphomes Folliculaires (GELF) Criteria
        </div>
        <div class="sous-title">
            Determines if immediate therapy for follicular lymphoma is required.
        </div>
        <hr style="background-color:#000;">
        <div class="question">
            <div class="question-title"> Any nodal or extranodal tumor mass &gt;7 cm diameter
                <div class="response">
                    <div class="button" id="gelfNo1" clicked="false" @click="counter($event, '-', 'gelfYes1')">No</div>
                    <div class="button" id="gelfYes1" clicked="false" @click="counter($event, '+', 'gelfNo1')">Yes</div>
                </div>
            </div>
        </div>
        <div class="question">
            <div class="question-title">Involvement of at least 3 nodal sites, each with diameter &gt;3 cm
                View more nodal site information in the More Info section.
                <div class="response">
                    <div class="button" id="gelfNo2" clicked="false" @click="counter($event, '-', 'gelfYes2')">No</div>
                    <div class="button" id="gelfYes2" clicked="false" @click="counter($event, '+', 'gelfNo2')">Yes</div>
                </div>
            </div>
        </div>
        <div class="question">
            <div class="question-title">Presence of any systemic or B symptoms
                <div class="response">
                    <div class="button" id="gelfNo3" clicked="false" @click="counter($event, '-', 'gelfYes3')">No</div>
                    <div class="button" id="gelfYes3" clicked="false" @click="counter($event, '+', 'gelfNo3')">Yes</div>
                </div>
            </div>
        </div>
        <div class="question">
            <div class="question-title">Splenic enlargement with inferior margin below the umbilical line
                <div class="response">
                    <div class="button" id="gelfNo4" clicked="false" @click="counter($event, '-', 'gelfYes4')">No</div>
                    <div class="button" id="gelfYes4" clicked="false" @click="counter($event, '+', 'gelfNo4')">Yes</div>
                </div>
            </div>
        </div>
        <div class="question">
            <div class="question-title">Compression syndrome (ureteral, orbital, gastrointestinal)
                <div class="response">
                    <div class="button" id="gelfNo5" clicked="false" @click="counter($event, '-', 'gelfYes5')">No</div>
                    <div class="button" id="gelfYes5" clicked="false" @click="counter($event, '+', 'gelfNo5')">Yes</div>
                </div>
            </div>
            
        </div>
        <div class="question">
            <div class="question-title">Pleural or peritoneal serous effusion (irrespective of cell content)
                <div class="response">
                    <div class="button" id="gelfNo6" clicked="false" @click="counter($event, '-', 'gelfYes6')">No</div>
                    <div class="button" id="gelfYes6" clicked="false" @click="counter($event, '+', 'gelfNo6')">Yes</div>
                </div>
            </div>
            
        </div>
        <div class="question">
            <div class="question-title">Leukemic phase (&gt;5.0 x10⁹/L circulating malignant cells)
                <div class="response">
                <div class="button" id="gelfNo7" clicked="false" @click="counter($event, '-', 'gelfYes7')">No</div>
                <div class="button" id="gelfYes7" clicked="false" @click="counter($event, '+', 'gelfNo7')">Yes</div>
                </div>
            </div>
        </div>
        <div class="question">
            <div class="question-title">Cytopenia (granulocyte count &lt; 1.0x10⁹/L and/or platelets &lt; 100x10⁹/L)
                <div class="response">
                <div class="button" id="gelfNo8" clicked="false" @click="counter($event, '-', 'gelfYes8')">No</div>
                <div class="button" id="gelfYes8" clicked="false" @click="counter($event, '+', 'gelfNo8')">Yes</div>
                </div>
            </div>
        </div>
        <div class="consequence">
            <div class="consequence-points">{{this.criteria}} Criteria</div>
            <div class="consequence-text">{{this.prognosis}}</div>
            <div class="consequence-text">{{this.result}}</div>
            <div class="consequence-text">{{this.notes}}</div>
        </div>
        <div class="link">
            <div class="link-title">
                Litterature
            </div>
            <div class="link-subTitle">
                Original / Primary reference
            </div>
            <div class="linkUrl">
                <a href="https://pubmed.ncbi.nlm.nih.gov/9060552/" target="_blank">Brice P, Bastion Y,Lepage E, et al. Comparison in low-tumor-burden follicular lymphomas between an initialno-treatment policy, prednimustine, or interferon alfa: a randomized study from the Grouped'Etude des Lymphomes Folliculaires. J Clin Oncol. 1997. 15:1110-7.</a>
            </div>
            <div class="link-subTitle">
                Validation
            </div>
            <div class="linkUrl">
                <a href="https://pubmed.ncbi.nlm.nih.gov/9667247/" target="_blank">Solal-Céligny P, LepageE,   Brousse N, Tendler CL, Brice P, Haïoun C, Gabarre J, Pignon B, Tertian G,Bouabdallah R,Rossi JF,     Doyen C, Coiffier B. DOXOrubicin-containing regimen with or without interferonalfa-2b for advanced     follicular lymphomas: final analysis of survival and toxicity inthe Groupe d'Etude des Lymphomes   Folliculaires 86 Trial. J Clin Oncol. 1998 Jul;16(7:2332-8.</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import Vue from "vue"
export default Vue.extend({
    name: "Critères Gelf",
    data(){
        return {
            criteria : 0,
            prognosis : "Negative for GELF Criteria",
            result : "Immediate therapy is NOT indicated.",
            notes : ""
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
                    this.criteria++
                } else { 
                    if(this.criteria > 0) this.criteria--
                }
            }

            triggerBtn.setAttribute("clicked", "true");
            otherBtn.setAttribute("clicked", "false");

            if(this.criteria > 0) {
                this.prognosis = "Positive for GELF Criteria"
                this.result = "Immediate therapy is indicated."
                this.notes = "Note: When a patient has ≥1 criteria, this is considered “high” tumor burden."
            }
            if(this.criteria === 0) {
                this.prognosis = "Negative for GELF Criteria"
                this.result = "Immediate therapy is NOT indicated."
                this.notes = ""
            }
        }
    },

    mounted()
    {
        
    },
})
</script>