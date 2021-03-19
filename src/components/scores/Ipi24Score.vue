<template>
 <section> 

    <div>
        <label for="age"> age: </label>
        <button id="age1" value="0" cat="age" selected="false" @click="incrementOnClick($event)"> &lsaquo;70 </button>
        <button id="age2" value="15" cat="age" selected="false" @click="incrementOnClick($event)">70-75</button>
        <button id="age3" value="35" cat="age" selected="false" @click="incrementOnClick($event)">75-80</button>
        <button id="age4" value="50" cat="age" selected="false" @click="incrementOnClick($event)">80-85</button>
    </div>

    <div>
        <label for="sexe">sexe</label>
        <button id="sexeF" value="0" cat="sexe" selected="false" @click="incrementOnClick($event)"> femme </button>
        <button id="sexeH" value="15" cat="sexe" selected="false" @click="incrementOnClick($event)"> homme </button>
    </div>

    <div>
        <label for="ann"> Ann Arbor Stage</label>
        <button id="ann1" value="0" cat="ann" selected="false"  @click="incrementOnClick($event)">I</button>
        <button id="ann2" value="5" cat="ann" selected="false"  @click="incrementOnClick($event)">II</button>
        <button id="ann3" value="10" cat="ann" selected="false"  @click="incrementOnClick($event)">III</button>
        <button id="ann4" value="20" cat="ann" selected="false"  @click="incrementOnClick($event)">IV</button>    
        <!-- <p>More Information <br>
            Stage I – Involvement of a single lymph node region (I) or of a single extralymphatic organ or site (IE) without nodal involvement. A single lymph node region can include one node or a group of adjacent nodes. <br>
            Stage II – Involvement of two or more lymph node regions on the same side of the diaphragm alone (II) or with involvement of limited, contiguous extralymphatic organ or tissue (IIE). <br>
            Stage III – Involvement of lymph node regions or lymphoid structures on both sides of the diaphragm. <br>
            Stage IV – Additional noncontiguous extralymphatic involvement, with or without associated lymphatic involvement.
        </p> -->
    </div>

    <div>
        <label for="ECOG">ECOG Performance Status</label>
        <button id="ECOG1" value="0" cat="ECOG" selected="false"  @click="incrementOnClick($event)">0 or 1</button>
        <button id="ECOG2" value="20" cat="ECOG" selected="false"  @click="incrementOnClick($event)">2, 3 or 4</button>
        <!-- <p>More Information <br>
            0: Fully active, able to carry on all pre-disease performance without restriction <br>
            1 - Restricted in physically strenuous activity but ambulatory and able to carry out work of a light or sedentary nature, e.g., light house work, office work<br>
            2 - Ambulatory and capable of all selfcare but unable to carry out any work activities; up and about more than 50% of waking hours<br>
            3 - Capable of only limited selfcare; confined to bed or chair more than 50% of waking hours<br>
            4 - Completely disabled; cannot carry on any selfcare; totally confined to bed or chair
        </p> -->
    </div>

    <div>
        <label for="LDH"> LDH </label>
        <button id="LDH1" value="0" cat="LDG" selected="false"  @click="incrementOnClick($event)">&lsaquo; 0,5N</button>
        <button id="LDH2" value="15" cat="LDG" selected="false"  @click="incrementOnClick($event)">0,5-0,75N</button>
        <button id="LDH3" value="30" cat="LDG" selected="false"  @click="incrementOnClick($event)">0,75N-1N</button>
        <button id="LDH4" value="45" cat="LDG" selected="false"  @click="incrementOnClick($event)">1N-1,3N</button>
        <button id="LDH5" value="55" cat="LDG" selected="false"  @click="incrementOnClick($event)">1,3N-2N</button>
        <button id="LDH6" value="70" cat="LDG" selected="false"  @click="incrementOnClick($event)">2N-3N</button>
        <button id="LDH7" value="85" cat="LDG" selected="false"  @click="incrementOnClick($event)">3N-4N</button>
        <button id="LDH8" value="100" cat="LDG" selected="false"  @click="incrementOnClick($event)">4N-5N</button>
    </div>

    <div>
        <label for="LDHupper">LDH Upper Limit of Normal</label>
        <button id="Hup1" value="0" cat="hup" selected="false"  @click="incrementOnClick($event)"> 2 G/L</button>
        <button id="Hup2" value="15" cat="hup" selected="false"  @click="incrementOnClick($event)"> 2-1 G/L</button>
        <button id="Hup3" value="25" cat="hup" selected="false"  @click="incrementOnClick($event)"> 1-0 G/L</button>
    </div>

    <div>
        <label for="bulky"> Bulky </label>
        <button id="bulky1"  value="0" cat="bulk" selected="false"  @click="incrementOnClick($event)">&lsaquo; 10 cm</button>
        <button id="bulky2"  value="15" cat="bulk" selected="false"  @click="incrementOnClick($event)">≥10 cm</button>
    </div>

    <div>
        <label for="result"> Results </label>
        <p>Risk of Event in First 24 Months</p>
        <p> {{ this.pourcentage }} </p>
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
            const btnAll = document.querySelectorAll("button");

            triggerBtn.style.backgroundColor  = "red";
            triggerBtn.setAttribute("selected", "true");

            btnAll.forEach( btn => {
                if( btn.getAttribute("selected") === "true" && btn !== triggerBtn && btn.getAttribute("cat") === cat ) this.counter -= parseInt( btn.value ); 
                if( triggerBtn !== btn ) btn.setAttribute("selected", "false");
                if( btn.getAttribute("cat") === cat && btn.getAttribute("selected") === "false") btn.style.backgroundColor = "#e1e1e1"; 
            });

            btnAll.forEach( btn => {

                if(btn.getAttribute("selected") === "true"){
                    this.counter += parseInt( btn.value );
                }
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