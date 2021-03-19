<template>
    <div class="score">
        <div class="title-red"> 
            Mantle Cell Lymphoma International Prognostic Index (MIPI)
        </div>
        <div class ="sous-title">
            Predicts survival in patients with mantle cell lymphoma.        
        </div>    
        <hr style="background-color:#000;">

        <div class="question">
            <div class="question-title">Age</div>
            <div class="response-input">
                <input class="input" type="text" v-on:change="calcul" v-model="years">
                <div class="button-input">years</div>
            </div>
        </div>

        <div class="question">
            <div class="question-title">ECOG</div>
            <div class="response">
                <div id="ecog-1" class="button button-selected" v-on:click="select(1)"><div class="" >0-1</div></div>
                <div id="ecog-2" class="button " v-on:click="select(2)"><div class="" >2-4</div></div>
            </div>
        </div>

        <div class="question">
            <div class="question-title">Serum LDH</div>
            <div class="response-input">
                <input class="input" type="text" v-on:change="calcul" v-model="serumLDH">
                <div class="button-input">U/L</div>
            </div>
        </div>

        <div class="question">
            <div>
                <div class="question-title">Upper limit of normal for serum LDH</div>
                <div class="info">According to your lab's normal values</div>
            </div>
            <div class="response-input">
                <input class="input" type="text" value="160"  v-on:change="calcul" v-model="upperLimitLDH">
                <div class="button-input">U/L</div>
            </div>
        </div>

        <div class="question">
            <div class="question-title">WBC</div>
            <div class="response-input">
                <input class="input" type="text" v-on:change="calcul" v-model="wbc">
                <div>
                    <div class="button-input">× 10⁹ cells/L</div>
                    <div class="button-input" hidden>× 10³ cells/µL</div>
                </div>
            </div>
        </div>

        <div class="question">
            <div>
                <div class="question-title">Ki-67</div>
                <div class="info">Optional, for MIPIb</div>
            </div>
            <div class="response-input">
                <input class="input" v-model="ki" id="ki" type="text" v-on:change="calcul">
                <div class="button-input">%</div>
            </div>
        </div>

        <div v-if="years != null && serumLDH != null && upperLimitLDH != null && wbc != null " >
            <div class="consequence">
                Prognosis
                <br><br>
                
                <div>Result:{{result}}</div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
    name: "Mipi",
    data()
    {
        return {
            result: null,
            years: null,
            ecog: 1,
            serumLDH: null,
            upperLimitLDH: null,
            wbc: null,
            ki: null,
        }
    },

    mounted()
    {

    },

    methods: {

        select : function(value){
            this.ecog = value
            let b = document.getElementsByClassName('button-selected');
            let ecog1 = document.getElementById('ecog-'+value);
            if(b){
                if( b[0] != ecog1 ){
                    b[0].classList.remove("button-selected");
                    ecog1.classList.add("button-selected");
                }
            }
        },

        calcul : function(){
            if(this.ki ){
                this.formulKi();
            }else{
                this.formul();
            }
        },

        formul : function (){
            this.result  =  (0.03535 * this.years) + 0.6978
            if(this.ecog > 1){
                this.result += ( 1.367 * Math.log10( this.serumLDH / this.upperLimitLDH - Math.log10(9) ) + 0.9393 * Math.log10(this.wbc) )
            }
        },

        formulKi : function (){
            this.result  =  (0.03535 * this.years) + 0.6978 + 0.02142 * this.ki
            if(this.ecog > 1){
                this.result += ( 1.367 * Math.log10( this.serumLDH / this.upperLimitLDH ) + 0.9393 * Math.log10(this.wbc) )
            }
            
        },
   }
})
</script>

<style>

.response-input{
    margin-top:20px;
    display: flex;
    justify-content: center;
    flex-direction: row;
}

.input{
    color:#595959;
    text-align: center;
    border-bottom: 0px solid #1c6ea4;
    border-radius: 0px 0px 20px 20px;
    -webkit-box-shadow: 0px 6px 13px -1px rgba(0, 0, 0, 0.75);
    border-radius: 15px 0px 0px 15px;
    box-shadow: 0px 6px 15px -12px rgba(0, 0, 0, 0.75);
    padding: 20px;
    width: 100%;
}

.button-input{
    color:#595959;
    background-color: #f1f1f6;
    text-align: center;
    border-bottom: 0px solid #1c6ea4;
    border-radius: 0px 0px 20px 20px;
    -webkit-box-shadow: 0px 6px 13px -1px rgba(0, 0, 0, 0.75);
    border-radius: 0px 15px 15px 0px;
    box-shadow: 0px 6px 15px -12px rgba(0, 0, 0, 0.75);
    padding: 20px;
}

</style>