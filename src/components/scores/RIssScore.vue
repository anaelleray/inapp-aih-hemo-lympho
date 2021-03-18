<template>
  <div class="score">
        <div class="input1">
            <div>Serum β2 microglobulin</div>
            <div>
                <div id="microglobulin-1" class="microglobulin selected-riss" v-on:click="select(1,'microglobulin')">&lsaquo;3.5 mg/L3.5 mg/L</div>
                <div id="microglobulin-2" class="microglobulin" v-on:click="select(2,'microglobulin')">3.5-5.4 mg/L</div>
                <div id="microglobulin-3" class="microglobulin" v-on:click="select(3,'microglobulin')">>5.4 mg/L</div>
            </div>
        </div>
        <div class="input1">
            <div>Serum albumin</div>
            <div>
                <div id="albumin-1" class="albumin selected-riss" v-on:click="select(1,'albumin')">≥3.5 g/dL</div>
                <div id="albumin-2"  class="albumin" v-on:click="select(2,'albumin')" >&lsaquo;3.5 g/dL</div>
            </div>
        </div>
        <div class="input1">
            <div>
                <p>CA by iFISH</p>
                <p>High risk defined as: presence of del(17p) and/or translocation t(4;14) and/or translocation t(14;16)</p>
            </div>
            <div>
                <div id="ifish-1" class="ifish selected-riss"  v-on:click="select(1,'ifish')"  >Standard risk</div>
                <div id="ifish-2" class="ifish" v-on:click="select(2,'ifish')">High risk</div>
            </div>
        </div>
        <div class="input1">
            <div>LDH</div>
            <div>
                <div id="ldh-1" class="ldh selected-riss" v-on:click="select(1,'ldh')">Normal (&lsaquo; upper limit of normal)</div>
                <div id="ldh-2" class="ldh" v-on:click="select(2,'ldh')">High (> upper limit of normal)</div>
            </div>
        </div>
        <div>R-ISS STAGE {{result}}</div>
        <div>{{mounth[result-1]}} months median progression-free survival</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
    name: "Riss",
    data()
    {
        return {
            mounth: [66,42,29],
            result: 1,
            microglobulin: 1,
            albumin: 1,
            ifish: 1,
            ldh: 1,
        }
    },

    mounted()
    {
    },

    methods: {
        select : function(value, input){
            let holdSelec= document.getElementsByClassName( input+' selected-riss')
            let newSelec = document.getElementById(input+'-'+value)
            if(holdSelec){
                if(holdSelec[0] != newSelec){
                    holdSelec[0].classList.remove("selected-riss");
                    newSelec.classList.add("selected-riss");
                    switch(input)
                    {
                        case 'microglobulin':
                            this.microglobulin = value;
                            break

                        case 'albumin':
                            this.albumin = value;
                            break

                        case 'ifish':
                            this.ifish = value;
                            break

                        case 'ldh':
                            this.ldh = value;
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

            switch(this.result)
            {
                case 1:
                    if(this.ifish == 1  && this.ldh == 1){
                        this.result = 1
                    }else{
                        this.result = 2
                    }
                    break
                case 2:
                    this.result = 2
                    break
                case 3:
                    if(this.ifish == 1  && this.ldh == 1){
                        this.result = 2
                    }else{
                        this.result = 3
                    }
                    break
            }
        },
    }
})
</script>

<style>
    .selected-riss{
        background-color: red;
    }
</style>