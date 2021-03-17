<template>
    <div class="flipiRoot">
        <div class="flipiBlocText">
            <h1 class="flipiTitle">Follicular Lymphoma International Prognostic Index (FLIPI)</h1>
            <p class="flipiDescription">Estimates overall survival based on clinical information.</p>
        </div>
        <div class="flipiForm">
            <div class="flipiInput1">
                <p>Age > 60 years</p>
                <button>No ::0</button>
                <button>Yes ::+1</button>
            </div>
            <div class="flipiInput2">
                <p>>4 nodal sites // See Evidence for nodal diagram. //</p>
                <button>No ::0</button>
                <button>Yes ::+1</button>
            </div>
            <div class="flipiInput3">
                <p>LDH elevated</p>
                <button>No ::0</button>
                <button>Yes ::+1</button>
            </div>
            <div class="flipiInput4">
                <p>Hemoglobin &lsaquo; 120 g/L or 12 g/dL</p>
                <button>No ::0</button>
                <button>Yes ::+1</button>
            </div>
            <div class="flipiInput5">
                <p>Stage III-IV
Stage I: disease is located in a single region, usually one lymph node and the surrounding area.
Stage II: disease is located in two separate regions, an affected lymph node or organ and a second affected area. Both affected areas are confined to one side of the diaphragm. 
Stage III: disease involves both sides of the diaphragm, including one organ or area near the lymph nodes or the spleen.
Stage IV: diffuse or disseminated involvement of one or more extranodal organs, with or without associated lymph node involvement.
// See Evidence for stage diagram. //</p>
                <button>No ::0</button>
                <button>Yes ::+1</button>
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
            result: null,
        }
    },
    mounted()
    {
        
    },
})

</script>
<style>
    .flipiBlocText {
        border : blue solid 2px
    }
    .flipiForm {
        border : red solid 2px
    }
</style>