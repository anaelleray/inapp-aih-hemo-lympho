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
                <div class="consequence-points">{{result}} points</div>
                <div class="consequence-text">
                    <div v-if="resultMounth == 1">
                        Faible
                    </div>
                    <div v-else-if="resultMounth == 2">
                        Intermédiaire
                    </div>
                    <div v-else>
                        Haut
                    </div>
                </div>
                <div class="consequence-text">
                    {{mounth[resultMounth-1]}}
                </div>
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
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/17962512" target="_blank">Hoster E, Dreyling M, Klapper W, et al. A new prognostic index (MIPI) for patients with advanced-stage mantle cell lymphoma. Blood. 2008;111(2):558-65.</a>
            </div>
            
            <div class="link-subTitle">
                Validation
            </div>
            <div class="linkUrl">
                 <a href="https://www.ncbi.nlm.nih.gov/pubmed/24687837" target="_blank">Hoster E, Klapper W, Hermine O, et al. Confirmation of the mantle-cell lymphoma International Prognostic Index in randomized trials of the European Mantle-Cell Lymphoma Network. J Clin Oncol. 2014;32(13):1338-46.</a>
            </div>
             <div class="linkUrl">
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/20032504" target="_blank">Geisler CH, Kolstad A, Laurell A, et al. The Mantle Cell Lymphoma International Prognostic Index (MIPI) is superior to the International Prognostic Index (IPI) in predicting survival following intensive first-line immunochemotherapy and autologous stem cell transplantation (ASCT). Blood. 2010;115(8):1530-3.</a>
            </div>

            <div class="link-subTitle">
                Other References
            </div>
            <div class="linkUrl">
                 <a href="https://www.ncbi.nlm.nih.gov/pubmed/26926679" target="_blank">Hoster E, Rosenwald A, Berger F, et al. Prognostic Value of Ki-67 Index, Cytology, and Growth Pattern in Mantle-Cell Lymphoma: Results From Randomized Trials of the European Mantle Cell Lymphoma Network. J Clin Oncol. 2016;34(12):1386-94.</a>
            </div>
            <div class="linkUrl">
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3436357/" target="_blank">Lim SY, Horsman JM, Hancock BW. The Mantle Cell Lymphoma International Prognostic Index: Does it work in routine practice?. Oncol Lett. 2010;1(1):187-188.</a>
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
            mounthMIPI:[
                "Non atteint (survie à 5 ans 60%)",
                "51 mois",
                "29 mois",
            ],
            mounthMIPIb:[
                "Non atteint",
                "58 mois",
                "37 mois"
            ],
            mounth:[],
            resultMounth: null,
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
            if(this.result < 5.7){
                this.resultMounth=1
            }else{
                if(this.result < 6.2){
                    this.resultMounth=2
                }else{
                    this.resultMounth=3
                }
            }
            this.mounth= this.mounthMIPI
        },

        formulKi : function (){
            this.result  =  (0.03535 * this.years) + 0.6978 + 0.02142 * this.ki
            if(this.ecog > 1){
                this.result += ( 1.367 * Math.log10( this.serumLDH / this.upperLimitLDH ) + 0.9393 * Math.log10(this.wbc) )
            }

            if(this.result < 5.7){
                this.resultMounth=1
            }else{
                if(this.result < 6.5){
                    this.resultMounth=2
                }else{
                    this.resultMounth=3
                }
            }
            this.mounth= this.mounthMIPIb
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