<template>
 <section class="score"> 

    <div class="question">
        <label for="age"> age: </label>
        <div class="button" id="age1" value="0" cat="age" selected="false" @click="incrementOnClick($event)"> &lsaquo;70 </div>
        <div class="button" id="age2" value="15" cat="age" selected="false" @click="incrementOnClick($event)">70-75</div>
        <div class="button" id="age3" value="35" cat="age" selected="false" @click="incrementOnClick($event)">75-80</div>
        <div class="button" id="age4" value="50" cat="age" selected="false" @click="incrementOnClick($event)">80-85</div>
    </div>

    <div class="question">
        <label for="sexe">sexe</label>
        <div class="button" id="sexeF" value="0" cat="sexe" selected="false" @click="incrementOnClick($event)"> femme </div>
        <div class="button" id="sexeH" value="15" cat="sexe" selected="false" @click="incrementOnClick($event)"> homme </div>
    </div>

    <div class="question">
        <label for="ann"> Ann Arbor Stage</label>
        <div class="button" id="ann1" value="0" cat="ann" selected="false"  @click="incrementOnClick($event)">I</div>
        <div class="button" id="ann2" value="5" cat="ann" selected="false"  @click="incrementOnClick($event)">II</div>
        <div class="button" id="ann3" value="10" cat="ann" selected="false"  @click="incrementOnClick($event)">III</div>
        <div class="button" id="ann4" value="20" cat="ann" selected="false"  @click="incrementOnClick($event)">IV</div>    
        <!-- <p>More Information <br>
            Stage I – Involvement of a single lymph node region (I) or of a single extralymphatic organ or site (IE) without nodal involvement. A single lymph node region can include one node or a group of adjacent nodes. <br>
            Stage II – Involvement of two or more lymph node regions on the same side of the diaphragm alone (II) or with involvement of limited, contiguous extralymphatic organ or tissue (IIE). <br>
            Stage III – Involvement of lymph node regions or lymphoid structures on both sides of the diaphragm. <br>
            Stage IV – Additional noncontiguous extralymphatic involvement, with or without associated lymphatic involvement.
        </p> -->
    </div>

    <div class="question">
        <label for="ECOG">ECOG Performance Status</label>
        <div class="button" id="ECOG1" value="0" cat="ECOG" selected="false"  @click="incrementOnClick($event)">0 or 1</div>
        <div class="button" id="ECOG2" value="20" cat="ECOG" selected="false"  @click="incrementOnClick($event)">2, 3 or 4</div>
        <!-- <p>More Information <br>
            0: Fully active, able to carry on all pre-disease performance without restriction <br>
            1 - Restricted in physically strenuous activity but ambulatory and able to carry out work of a light or sedentary nature, e.g., light house work, office work<br>
            2 - Ambulatory and capable of all selfcare but unable to carry out any work activities; up and about more than 50% of waking hours<br>
            3 - Capable of only limited selfcare; confined to bed or chair more than 50% of waking hours<br>
            4 - Completely disabled; cannot carry on any selfcare; totally confined to bed or chair
        </p> -->
    </div>

    <div  class="question">
        <label for="LDH"> LDH </label>
        <div class="button" id="LDH1" value="0" cat="LDG" selected="false"  @click="incrementOnClick($event)">&lsaquo; 0,5N</div>
        <div class="button" id="LDH2" value="15" cat="LDG" selected="false"  @click="incrementOnClick($event)">0,5-0,75N</div>
        <div class="button" id="LDH3" value="30" cat="LDG" selected="false"  @click="incrementOnClick($event)">0,75N-1N</div>
        <div class="button" id="LDH4" value="45" cat="LDG" selected="false"  @click="incrementOnClick($event)">1N-1,3N</div>
        <div class="button" id="LDH5" value="55" cat="LDG" selected="false"  @click="incrementOnClick($event)">1,3N-2N</div>
        <div class="button" id="LDH6" value="70" cat="LDG" selected="false"  @click="incrementOnClick($event)">2N-3N</div>
        <div class="button" id="LDH7" value="85" cat="LDG" selected="false"  @click="incrementOnClick($event)">3N-4N</div>
        <div class="button" id="LDH8" value="100" cat="LDG" selected="false"  @click="incrementOnClick($event)">4N-5N</div>
    </div>

    <div  class="question">
        <label for="LDHupper">LDH Upper Limit of Normal</label>
        <div class="button" id="Hup1" value="0" cat="hup" selected="false"  @click="incrementOnClick($event)"> 2 G/L</div>
        <div class="button" id="Hup2" value="15" cat="hup" selected="false"  @click="incrementOnClick($event)"> 2-1 G/L</div>
        <div class="button" id="Hup3" value="25" cat="hup" selected="false"  @click="incrementOnClick($event)"> 1-0 G/L</div>
    </div>

    <div  class="question">
        <label for="bulky"> Bulky </label>
        <div class="button" id="bulky1"  value="0" cat="bulk" selected="false"  @click="incrementOnClick($event)">&lsaquo; 10 cm</div>
        <div class="button" id="bulky2"  value="15" cat="bulk" selected="false"  @click="incrementOnClick($event)">≥10 cm</div>
    </div>

    <div class="consequence">
        <label for="result"> Results </label>
        <p>Risk of Event in First 24 Months</p>
        <p> {{ this.pourcentage }} </p>
    </div>

    <div class="link">
        <div class="link-title">
            References
        </div>

        <div class="linkUrl">
            Maurer MJ, Ghesqui&#232;res H, Jais J-P, et al. <a href="https://www.qxmd.com/r/24550425" target="_blank">Event-Free Survival at 24 Months Is a Robust End Point for Disease-Related Outcome in Diffuse Large B-Cell Lymphoma Treated With Immunochemotherapy.</a>Journal of Clinical Oncology: Official Journal of the American Society of Clinical Oncology 2014 April 1, 32 (10): 1066-73
        </div>

        <div class="linkUrl">
            Maurer MJ et al. <a href="https://www.qxmd.com/r/26492520" target="_blank">Personalized Risk Prediction for Event-free Survival at 24 months in Patients with Diffuse Large B-Cell Lymphoma.</a> American Journal of Hematology 2016, 91 (2): 179-84
        </div>

        <div class="linkUrl">
            The <a href="https://qxmd.com/calculate/calculator_293/diffuse-large-b-cell-lymphoma-prognosis-ipi24" target="_blank">Diffuse Large B-cell Lymphoma Prognosis (IPI24) </a>calculator is created by QxMD.
        </div>
    </div>
 </section>
</template>

<script>
export default {

    data() {
        return {
            counter: 0,
            pourcentage: 0
        }
    },
    
    methods: {
         incrementOnClick(event){

            const triggerBtn = event.target;
            const cat = triggerBtn.getAttribute("cat");
            const btnAll = document.querySelectorAll(".button");

            triggerBtn.classList.add("button-selected");
            triggerBtn.setAttribute("selected", "true");
            if( triggerBtn.getAttribute("triggered") === null ) triggerBtn.setAttribute("triggered", "1");

            btnAll.forEach( btn => {

                const value = btn.getAttribute("value")

                if( 
                    btn.getAttribute("selected") === "true" && 
                    btn !== triggerBtn && 
                    btn.getAttribute("cat") === cat 
                ) this.counter -= parseInt( value ); 
                if(
                     btn.getAttribute("selected") === "true" &&
                    triggerBtn === btn &&
                    btn.getAttribute("triggered") === "1" 
                    ) { 
                        this.counter += parseInt( value );
                        btn.setAttribute("triggered", "0")
                    }
                if( btn !== triggerBtn ) btn.removeAttribute("triggered");
                if( triggerBtn !== btn && cat === btn.getAttribute("cat")) btn.setAttribute("selected", "false");
                if( btn.getAttribute("cat") === cat && btn.getAttribute("selected") === "false") btn.classList.remove("button-selected");

            });


            if(  this.counter <= 25 ){
                this.pourcentage = "15%";
            }
            if(  this.counter > 25 && this.counter <= 50 ){
                this.pourcentage = "15-25%";
            }
            if(  this.counter > 50 && this.counter <= 75 ){
                this.pourcentage = "25-35%";
            }
            if(  this.counter > 75 && this.counter <= 100 ){
                this.pourcentage = "35-45%";
            }
            if(  this.counter > 100 && this.counter <= 125 ){
                this.pourcentage = "45-55%";
            }
            if(  this.counter > 125 && this.counter <= 150 ){
                this.pourcentage = "55-65%";
            }
            if(  this.counter > 150 && this.counter <= 200 ){
                this.pourcentage = "65-80%";
            }
            if(  this.counter > 200 && this.counter <= 250 ){
                this.pourcentage = "80-100%";
            }
        },
    }
}
</script>

<style>

</style>