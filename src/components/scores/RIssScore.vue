<template>
  <div class="score">

        <div class="title-red">
            Revised Multiple Myeloma International Staging System (R-ISS)
        </div>

        <div class ="sous-title">
            Prognostication tool for myeloma patients based on the genetics and other routinely used lab values in conjunction with the original ISS Staging System.
        </div>

        <hr style="background-color:#000;">

        <div class ="title-purple">
            Use only in patients recently diagnosed with multiple myeloma. Do not use in patients with relapsed myeloma, smoldering myeloma or MGUS.
        </div>

        <div class="question">
            <div class="question-title" >Serum β2 microglobulin</div>
            <div>
                <div id="microglobulin-1" class="button microglobulin" v-on:click="select(1,'microglobulin')">&lsaquo;3.5 mg/L3.5 mg/L</div>
                <div id="microglobulin-2" class="button microglobulin" v-on:click="select(2,'microglobulin')">3.5-5.4 mg/L</div>
                <div id="microglobulin-3" class="button microglobulin" v-on:click="select(3,'microglobulin')">>5.4 mg/L</div>
            </div>
        </div>
        <div class="question">
            <div class="question-title" >Serum albumin</div>
            <div>
                <div id="albumin-1" class="button albumin" v-on:click="select(1,'albumin')">≥3.5 g/dL</div>
                <div id="albumin-2"  class="button albumin" v-on:click="select(2,'albumin')" >&lsaquo;3.5 g/dL</div>
            </div>
        </div>
        <div class="question">
            <div>
                <p class="question-title">CA by iFISH</p>
                <p class="info">High risk defined as: presence of del(17p) and/or translocation t(4;14) and/or translocation t(14;16)</p>
            </div>
            <div>
                <div id="ifish-1" class=" button ifish"  v-on:click="select(1,'ifish')"  >Standard risk</div>
                <div id="ifish-2" class=" button ifish" v-on:click="select(2,'ifish')">High risk</div>
            </div>
        </div>
        <div class="question">
            <div class="question-title">LDH</div>
            <div>
                <div  id="ldh-1" class="button ldh" v-on:click="select(1,'ldh')">Normal (&lsaquo; upper limit of normal)</div>
                <div id="ldh-2" class="button ldh" v-on:click="select(2,'ldh')">High (> upper limit of normal)</div>
            </div>
        </div>

        <div v-if="microglobulin != null && albumin != null && ifish != null && ldh != null" >
            <div class="consequence">
                <div>R-ISS STAGE {{result}}</div>
                <br><br>
                <div>{{mounth[result-1]}} months median progression-free survival</div>
            </div>
        </div>

        <div class="link">
            <div class="link-title">
                Litterature
            </div>
            <div class="link-subTitle">
                Original / Primary reference
            </div>
            <div class="linkUrl">
                <a href="http://jco.ascopubs.org/content/33/26/2863" target="_blank">Palumbo A, et. al. Revised International Staging System for Multiple Myeloma: a Report From International Myeloma Working Group. JCO 2015; 33: 2863-2869.</a>
            </div>
            <div class="linkUrl">
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/15809451" target="_blank">Greipp PR, et. al. International Staging System for Multiple Myeloma. JCO 2005; 23:3412-3420.</a>
            </div>
            
            <div class="link-subTitle">
                Validation
            </div>
            <div class="linkUrl">
                 <a href="https://www.myeloma.org/publications" target="_blank">International Myeloma Foundation. International Staging System. April 2002.</a>
            </div>
        </div>
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
            result: 0,
            microglobulin: null,
            albumin: null,
            ifish: null,
            ldh: null,
        }
    },

    mounted()
    {
    },

    methods: {
        select : function(value, input){
            let holdSelec= document.getElementsByClassName( input +' button-selected')
            let newSelec = document.getElementById(input+'-'+value)
            if(holdSelec.length > 0){
                if(holdSelec[0] != newSelec){
                    holdSelec[0].classList.remove("button-selected");
                    newSelec.classList.add("button-selected");
                }
            }else{
                newSelec.classList.add("button-selected");
            }
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
</style>