<template>
    <div class="gelfRoot">
        <div class="gelfBlocText">
            <h1 class="gelfTitle">Groupe d'Etude des Lymphomes Folliculaires (GELF) Criteria</h1>
            <p class="gelfDescription">Determines if immediate therapy for follicular lymphoma is required.</p>
        </div>
        <div class="gelfForm">
            <div class="gelfInput1">
                <p>Any nodal or extranodal tumor mass &gt;7 cm diameter</p>
                <button id="gelfNo1" clicked="false" @click="counter($event, '-', 'gelfYes1')">No</button>
                <button id="gelfYes1" clicked="false" @click="counter($event, '+', 'gelfNo1')">Yes</button>
            </div>
            <div class="gelfInput2">
                <p>Involvement of at least 3 nodal sites, each with diameter &gt;3 cm
                    View more nodal site information in the More Info section.</p>
                <button id="gelfNo2" clicked="false" @click="counter($event, '-', 'gelfYes2')">No</button>
                <button id="gelfYes2" clicked="false" @click="counter($event, '+', 'gelfNo2')">Yes</button>
            </div>
            <div class="gelfInput3">
                <p>Presence of any systemic or B symptoms</p>
                <button id="gelfNo3" clicked="false" @click="counter($event, '-', 'gelfYes3')">No</button>
                <button id="gelfYes3" clicked="false" @click="counter($event, '+', 'gelfNo3')">Yes</button>
            </div>
            <div class="gelfInput4">
                <p>Splenic enlargement with inferior margin below the umbilical line</p>
                <button id="gelfNo4" clicked="false" @click="counter($event, '-', 'gelfYes4')">No</button>
                <button id="gelfYes4" clicked="false" @click="counter($event, '+', 'gelfNo4')">Yes</button>
            </div>
            <div class="gelfInput5">
                <p>Compression syndrome (ureteral, orbital, gastrointestinal)</p>
                <button id="gelfNo5" clicked="false" @click="counter($event, '-', 'gelfYes5')">No</button>
                <button id="gelfYes5" clicked="false" @click="counter($event, '+', 'gelfNo5')">Yes</button>
            </div>
            <div class="gelfInput6">
                <p>Pleural or peritoneal serous effusion (irrespective of cell content)</p>
                <button id="gelfNo6" clicked="false" @click="counter($event, '-', 'gelfYes6')">No</button>
                <button id="gelfYes6" clicked="false" @click="counter($event, '+', 'gelfNo6')">Yes</button>
            </div>
            <div class="gelfInput7">
                <p>Leukemic phase (&gt;5.0 x10⁹/L circulating malignant cells)</p>
                <button id="gelfNo7" clicked="false" @click="counter($event, '-', 'gelfYes7')">No</button>
                <button id="gelfYes7" clicked="false" @click="counter($event, '+', 'gelfNo7')">Yes</button>
            </div>
            <div class="gelfInput8">
                <p>Cytopenia (granulocyte count &lt; 1.0x10⁹/L and/or platelets &lt; 100x10⁹/L)</p>
                <button id="gelfNo8" clicked="false" @click="counter($event, '-', 'gelfYes8')">No</button>
                <button id="gelfYes8" clicked="false" @click="counter($event, '+', 'gelfNo8')">Yes</button>
            </div>
        </div>
        <div class="gelfWindowResult">
            <div>{{this.criteria}} Criteria</div>
            <div>{{this.prognosis}}</div>
            <div>{{this.result}}</div>
            <div>{{this.notes}}</div>
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