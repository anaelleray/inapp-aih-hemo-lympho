<template>
  <div>

        <div class="input1">
            <div>Age</div>
            <div class="input2">
                <input type="text" v-on:change="calcul" v-model="years">
                <div>years</div>
            </div>
        </div>

        <div class="input1">
            <div>ECOG</div>
            <div class="input2">
                <div id="ecog-1" class="ecog-selected" v-on:click="select(1)"><div class="" >0-1</div></div>
                <div id="ecog-2" class="" v-on:click="select(2)"><div class="" >2-4</div></div>
            </div>
        </div>

        <div class="input1">
            <div>Serum LDH</div>
            <div class="input2">
                <input type="text" v-on:change="calcul" v-model="serumLDH">
                <div>U/L</div>
            </div>
        </div>

        <div class="input1">
            <div>
                <div>Upper limit of normal for serum LDH</div>
                <div>According to your lab's normal values</div>
            </div>
            <div class="input2">
                <input type="text" value="160"  v-on:change="calcul" v-model="upperLimitLDH">
                <div>U/L</div>
            </div>
        </div>

        <div class="input1">
            <div>WBC</div>
            <div class="input2">
                <input type="text" v-on:change="calcul" v-model="wbc">
                <div>
                    <div>× 10⁹ cells/L</div>
                    <div hidden>× 10³ cells/µL</div>
                </div>
            </div>
        </div>

        <div class="input1">
            <div>
                <div>Ki-67</div>
                <div>Optional, for MIPIb</div>
            </div>
            <div class="input2">
                <input id="ki" type="text" v-on:change="calcul">
                <div>%</div>
            </div>
        </div>

        <div>Result:{{result}}</div>

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
            wbc: null
        }
    },

    mounted()
    {

    },

    methods: {

        select : function(value){
            this.ecog = value
            let b = document.getElementsByClassName('ecog-selected');
            let ecog1 = document.getElementById('ecog-'+value);
            if(b){
                if( b[0] != ecog1 ){
                    b[0].classList.remove("ecog-selected");
                    ecog1.classList.add("ecog-selected");
                }
            }
        },

        calcul : function(){
            let ki = document.getElementById('ki')
            let valueKi = parseFloat((<HTMLInputElement>ki).value)
            if(valueKi ){
                if(this.isNumeric(valueKi) && this.numInInterval(valueKi,0,100)){
                    this.formulKi();
                }else{
                    this.formul();
                }
            }else{
                this.formul();
            }
        },

        isNumeric: function (value){
            if(!isNaN(value)){
                return true
            }else{
                return false
            }
        },

        numInInterval:function(value,min,max){
            if(value >= min && value <= max){
                return true
            }else{
                return false
            }
        },

        formul : function (){
            this.result  =  (0.3535 * this.years) + 0.6978
            if(this.ecog > 1){
                 this.result += (1.367 * Math.log10(this.serumLDH / this.upperLimitLDH ) + 0.9393 * Math.log10(this.wbc))
            }
        },

        formulKi : function (){

        },
   }
})
</script>

<style>

    .input1{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .input2{
        display: flex;
        justify-content: space-between;
    }

</style>