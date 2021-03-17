<template>
  <div>
        <div class="input1">
            <div>Serum β2 microglobulin</div>
            <div>
                <div id="microglobulin-1" class="microglobulin selected-iss" v-on:click="select(1,'microglobulin')">&lsaquo;3.5 mg/L3.5 mg/L</div>
                <div id="microglobulin-2" class="microglobulin" v-on:click="select(2,'microglobulin')">3.5-5.4 mg/L</div>
                <div id="microglobulin-3" class="microglobulin" v-on:click="select(3,'microglobulin')">>5.4 mg/L</div>
            </div>
        </div>
        <div class="input1">
            <div>Serum albumin</div>
            <div>
                <div id="albumin-1" class="albumin selected-iss" v-on:click="select(1,'albumin')">≥3.5 g/dL</div>
                <div id="albumin-2"  class="albumin" v-on:click="select(2,'albumin')" >&lsaquo;3.5 g/dL</div>
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
            microglobulin: 1,
            albumin: 1,
        }
    },

    mounted()
    {

    },

    methods: {
        select : function(value, input){
            let holdSelec= document.getElementsByClassName( input+' selected-iss')
            let newSelec = document.getElementById(input+'-'+value)
            if(holdSelec){
                if(holdSelec[0] != newSelec){
                    holdSelec[0].classList.remove("selected-iss");
                    newSelec.classList.add("selected-iss");
                    switch(input)
                    {
                        case 'microglobulin':
                            this.microglobulin = value;
                            break

                        case 'albumin':
                            this.albumin = value;
                            break
                    }
                }
            }
            this.calcul()
        },

        calcul: function (){
            if(this.microglobulin == 1 && this.albumin == 2){
                this.result = 2
            }else{
                this.result = this.microglobulin 
            }
        },
    }
})
</script>

<style>
    .selected-iss{
        background-color: red;
    }
</style>