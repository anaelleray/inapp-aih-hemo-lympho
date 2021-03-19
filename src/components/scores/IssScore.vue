<template>
  <div class="score">
      <div class="title-red">
            Multiple Myeloma International Staging System (ISS) 
        </div>
        <div class ="sous-title">
            Prognosticates the severity of multiple myeloma based on routinely obtained lab values.        
        </div>

        <hr style="background-color:#000;">

        <div class ="title-purple">
            Use only in patients recently diagnosed with multiple myeloma. Do not use in patients with relapsed myeloma, smoldering myeloma or MGUS.
        </div>

        <div class="question">
            <div class="question-title">Serum β2 microglobulin</div>
            <div>
                <div id="microglobulin-1" class="button microglobulin" v-on:click="select(1,'microglobulin')">&lsaquo;3.5 mg/L3.5 mg/L</div>
                <div id="microglobulin-2" class="button microglobulin" v-on:click="select(2,'microglobulin')">3.5-5.4 mg/L</div>
                <div id="microglobulin-3" class="button microglobulin" v-on:click="select(3,'microglobulin')">>5.4 mg/L</div>
            </div>
        </div>
        <div class="question">
            <div class="question-title">Serum albumin</div>
            <div>
                <div id="albumin-1" class="button albumin " v-on:click="select(1,'albumin')">≥3.5 g/dL</div>
                <div id="albumin-2"  class="button albumin" v-on:click="select(2,'albumin')" >&lsaquo;3.5 g/dL</div>
            </div>
        </div>
         <div v-if="microglobulin != null && albumin != null " >
            <div class="consequence">
                <div>STAGE {{result}}</div>
                <br><br>
                <div>Median survival is {{mounth[result-1]}} months</div>
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
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/1182674" target="_blank">Durie BGM, Salmon SE. A clinical staging system for multiple myeloma. Cancer 1975; 36:842-854.</a>
            </div>
            <div class="linkUrl">
                <a href="http://www.ncbi.nlm.nih.gov/pubmed/15809451" target="_blank">Greipp PR, et. al. International Staging System for Multiple Myeloma. JCO 2005; 23:3412-3420.</a>
            </div>
            
            <div class="link-subTitle">
                Other References
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
    name: "Iss",
    data()
    {
        return {
            mounth: [66,42,29],
            result: 1,
            microglobulin: null,
            albumin: null,
        }
    },

    mounted()
    {
    },

    methods: {
        select : function(value, input){
            let holdSelec= document.getElementsByClassName( input+' button-selected')
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
</style>