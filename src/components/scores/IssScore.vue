<template>
  <div>
        <div class="input1">
            <div>Serum β2 microglobulin</div>
            <div>
                <div id="microglobulin-1" class="microglobulin selected-riss" v-on:click="select(1,'microglobulin')">&lsaquo;3.5 mg/L3.5 mg/L</div>
                <div id="microglobulin-2" class="microglobulin" v-on:click="select(2,'microglobulin')">3.5-5.4 mg/L</div>
            </div>
        </div>
        <div class="input1">
            <div>Serum β2 microglobulin</div>
            <div>
                <div id="microglobulin-1" class="microglobulin selected-riss" v-on:click="select(1,'microglobulin')">&lsaquo;3.5 mg/L3.5 mg/L</div>
                <div id="microglobulin-2" class="microglobulin" v-on:click="select(2,'microglobulin')">3.5-5.4 mg/L</div>
            </div>
        </div>
        <div>Result:{{result}}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
    name: "Iss",
    data()
    {
        return {
            result: null,
            
        }
    },

    mounted()
    {

    },

    methods: {
        
    }
})
</script>

<style>
    .selected-iss{
        background-color: red;
    }
</style>