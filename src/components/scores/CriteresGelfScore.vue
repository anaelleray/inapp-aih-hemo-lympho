<template>
    <div class="gelfRoot">
        <div class="gelfBlocText">
            <h1 class="gelfTitle">Groupe d'Etude des Lymphomes Folliculaires (GELF) Criteria</h1>
            <p class="gelfDescription">Determines if immediate therapy for follicular lymphoma is required.</p>
        </div>
        <div class="gelfForm">
            <div class="gelfInput1">
                <p>Any nodal or extranodal tumor mass >7 cm diameter</p>
                <button>No</button>
                <button>Yes</button>
            </div>
            <div class="gelfInput2">
                <p>Involvement of at least 3 nodal sites, each with diameter >3 cm
                    // View more nodal site information in the More Info section. //</p>
                <button>No</button>
                <button>Yes</button>
            </div>
            <div class="gelfInput3">
                <p>Presence of any systemic or B symptoms</p>
                <button>No</button>
                <button>Yes</button>
            </div>
            <div class="gelfInput4">
                <p>Splenic enlargement with inferior margin below the umbilical line</p>
                <button>No</button>
                <button>Yes</button>
            </div>
            <div class="gelfInput5">
                <p>Compression syndrome (ureteral, orbital, gastrointestinal)</p>
                <button>No</button>
                <button>Yes</button>
            </div>
            <div class="gelfInput6">
                <p>Pleural or peritoneal serous effusion (irrespective of cell content)</p>
                <button>No</button>
                <button>Yes</button>
            </div>
            <div class="gelfInput7">
                <p>Leukemic phase (>5.0 x10⁹/L circulating malignant cells)</p>
                <button>No</button>
                <button>Yes</button>
            </div>
            <div class="gelfInput8">
                <p>Cytopenia (granulocyte count < 1.0x10⁹/L and/or platelets < 100x10⁹/L)</p>
                <button>No</button>
                <button>Yes</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import Vue from "vue"
export default Vue.extend({

    name: "Critères Gelf",
    data()
    {
        return {
            result: null,
        }
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
</style>