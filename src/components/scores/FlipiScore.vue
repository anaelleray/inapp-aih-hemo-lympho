<template>
    <div class="flipiForm">
        <div class="flipiBlocText">
            <h1 class="flipiTitle">Follicular Lymphoma International Prognostic Index (FLIPI)</h1>
            <p class="flipiDescription">Estimates overall survival based on clinical information.</p>
        </div>
        <div class="flipiForm">
            <div class="flipiInput1">
                <p>Age &gt;	 60 years</p>
                <div class="no-selected">
                    <button id="ageNo" @click="counter">No 0</button>
                </div>
                <div class="yes-selected">
                    <button id="ageYes" @click="counter">Yes +1</button>
                </div>
            </div>
            <div class="flipiInput2">
                <p>&gt;4 nodal sites
                    See Evidence for nodal diagram.</p>
                    <div class="no-selected">
                    <button id="nodalNo" @click="counter">No 0</button>
                </div>
                <div class="yes-selected">
                    <button id="nodalYes" @click="counter">Yes +1</button>
                </div>
            </div>
            <div class="flipiInput3">
                <p>LDH elevated</p>
                <div class="no-selected">
                    <button id="ldhNo" @click="counter">No 0</button>
                </div>
                <div class="yes-selected">
                    <button id="ldhYes" @click="counter">Yes +1</button>
                </div>
            </div>
            <div class="flipiInput4">
                <p>Hemoglobin &lt;120 g/L or 12 g/dL</p>
                <div class="no-selected">
                    <button id="hemoNo" @click="counter">No 0</button>
                </div>
                <div class="yes-selected">
                    <button id="hemoYes" @click="counter">Yes +1</button>
                </div>
            </div>
            <div class="flipiInput5">
                <p>Stage III-IV
                    Stage I: disease is located in a single region, usually one lymph node and the surrounding area.
                    Stage II: disease is located in two separate regions, an affected lymph node or organ and a second affected area. Both affected areas are confined to one side of the diaphragm. 
                    Stage III: disease involves both sides of the diaphragm, including one organ or area near the lymph nodes or the spleen.
                    Stage IV: diffuse or disseminated involvement of one or more extranodal organs, with or without associated lymph node involvement.
                    See Evidence for stage diagram.
                </p>
                <div class="no-selected">
                    <button id="stageNo" @click="counter">No 0</button>
                </div>
                <div class="yes-selected">
                    <button id="stageYes" @click="counter">Yes +1</button>
                </div>
            </div>
            <div class="flipiWindowResult">
            <div>{{this.points}} points</div>
            <div>{{this.risk}}</div>
            <div>{{this.survival}}</div>
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
            noSelect : [],
            yesSelect: []
        }
    },
    methods: {
        counter:function(event, id){
            // let ageN = document.getElementById('ageNo');
            // let ageY = document.getElementById('ageY');
            // let nodalN = document.getElementById('nodalNo');
            // let nodalY = document.getElementById('nodalY');
            // let ldhN = document.getElementById('ldhNo');
            // let ldhY = document.getElementById('ldhY');
            // let hemoN = document.getElementById('hemoNo');
            // let hemoY = document.getElementById('hemoY');
            // let stageN = document.getElementById('stageNo');
            // let stageY = document.getElementById('stageY');

            console.log(event.type, event.target.id)
            
            this.noSelect = document.getElementsByClassName('no-selected')
            this.yesSelect = document.getElementsByClassName('yes-selected')

            for (var childNo in this.noSelect) {
                if ( this.noSelect.hasOwnProperty(childNo) ) {
                let children = this.noSelect[childNo].children
                console.log('child ->', children)
                }
            }
            for (var childYes in this.yesSelect) {
                if ( this.yesSelect.hasOwnProperty(childYes) ) {
                let children = this.yesSelect[childYes].children
                console.log('child ->', children)
                }
            }
            

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
                this.risk = "Low risk"
                this.survival = "10-year overall survival is approximately 35%"
            }
            if(this.points === 5) {
                this.risk = "Low risk"
                this.survival = "10-year overall survival is approximately 35%"
            }
        }
    },
    mounted()
    {
        
    },
})
</script>
<style>
.flipiWindowResult {
    background-color: #0FFF00
}
.no-selected{
    border: red 1px solid
}
.yes-selected{
    border: green 1px solid
}
</style>