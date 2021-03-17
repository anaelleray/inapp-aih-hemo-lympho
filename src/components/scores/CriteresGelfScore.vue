<template>
    <div class="gelfRoot">
        <div class="gelfBlocText">
            <h1 class="gelfTitle">Groupe d'Etude des Lymphomes Folliculaires (GELF) Criteria</h1>
            <p class="gelfDescription">Determines if immediate therapy for follicular lymphoma is required.</p>
        </div>
        <div class="gelfForm">
            <div class="gelfInput1">
                <p>Any nodal or extranodal tumor mass &gt;7 cm diameter</p>
                <button id="gelfNo1" v-on:click="decrement">No</button>
                <button id="gelfYes1"v-on:click="increment">Yes</button>
            </div>
            <div class="gelfInput2">
                <p>Involvement of at least 3 nodal sites, each with diameter &gt;3 cm
                    View more nodal site information in the More Info section.</p>
                <button id="gelfNo2" v-on:click="decrement">No</button>
                <button id="gelfYes2"v-on:click="increment">Yes</button>
            </div>
            <div class="gelfInput3">
                <p>Presence of any systemic or B symptoms</p>
                <button id="gelfNo3" v-on:click="decrement">No</button>
                <button id="gelfYes3"v-on:click="increment">Yes</button>
            </div>
            <div class="gelfInput4">
                <p>Splenic enlargement with inferior margin below the umbilical line</p>
                <button id="gelfNo4" v-on:click="decrement">No</button>
                <button id="gelfYes4"v-on:click="increment">Yes</button>
            </div>
            <div class="gelfInput5">
                <p>Compression syndrome (ureteral, orbital, gastrointestinal)</p>
                <button id="gelfNo5" v-on:click="decrement">No</button>
                <button id="gelfYes5"v-on:click="increment">Yes</button>
            </div>
            <div class="gelfInput6">
                <p>Pleural or peritoneal serous effusion (irrespective of cell content)</p>
                <button id="gelfNo6" v-on:click="decrement">No</button>
                <button id="gelfYes6"v-on:click="increment">Yes</button>
            </div>
            <div class="gelfInput7">
                <p>Leukemic phase (&gt;5.0 x10⁹/L circulating malignant cells)</p>
                <button id="gelfNo7" v-on:click="decrement">No</button>
                <button id="gelfYes7"v-on:click="increment">Yes</button>
            </div>
            <div class="gelfInput8">
                <p>Cytopenia (granulocyte count &lt; 1.0x10⁹/L and/or platelets &lt; 100x10⁹/L)</p>
                <button id="gelfNo8" v-on:click="decrement">No</button>
                <button id="gelfYes8"v-on:click="increment">Yes</button>
            </div>
        </div>
        <div class="gelfWindowResult">
            <div>{{this.counter}} Criteria</div>
            <div>Dynamique text 1</div>
            <div>Dynamique text 1</div>
        </div>
    </div>
</template>

<script lang="ts">

import Vue from "vue"
export default Vue.extend({
    name: "Critères Gelf",
    data(){
        return {
            counter : 0
        } 
    },

    methods: {
        
        
        // increment:function() {
        //     this.counter += 1;
        //     console.log('Inc ->',this.counter);
        // },
        // decrement: function() {
        //     this.counter -= 1;
        //     console.log('Dec ->',this.counter);
        // }
    },

    mounted()
    {
        
    },
})

</script>
<style>
    .gelfBlocText {
        border : blue solid 2px
    }
    .gelfForm {
        border : red solid 2px
    }
    .gelfWindowResult {
        background-color: #0FFF00
    }
</style>