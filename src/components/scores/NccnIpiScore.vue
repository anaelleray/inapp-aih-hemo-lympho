<template>
 <section> 

    <div>
        <label for="age"> age: </label>
        <button id="age1" value="0" cat="age" selected="false" @click="incrementOnClick($event)"> ≤40 Years </button>
        <button id="age2" value="1" cat="age" selected="false" @click="incrementOnClick($event)"> 41-60 Years</button>
        <button id="age3" value="2" cat="age" selected="false" @click="incrementOnClick($event)"> 61-75</button>
        <button id="age4" value="3" cat="age" selected="false" @click="incrementOnClick($event)"> &lsaquo; 75</button>
    </div>

    <div>
        <label for="ECOG">ECOG Performance Status</label>
        <button id="ECOG1" value="0" cat="ECOG" selected="false"  @click="incrementOnClick($event)">ECOG 0-1</button>
        <button id="ECOG2" value="1" cat="ECOG" selected="false"  @click="incrementOnClick($event)">ECOG 2-4</button>
    </div>

    <div>
        <label for="Stage"> Stage </label>
        <button id="stage1" value="0" cat="stage" selected="false"  @click="incrementOnClick($event)"> Stage I/II </button>
        <button id="stage2" value="1" cat="stage" selected="false"  @click="incrementOnClick($event)"> Stage III/IV </button>
    </div>

    <div>
        <label for="LDHupper">LDH Upper Limit of Normal</label>
        <button id="Hup1" value="0" cat="hup" selected="false"  @click="incrementOnClick($event)"> Normal</button>
        <button id="Hup2" value="1" cat="hup" selected="false"  @click="incrementOnClick($event)"> Elevated, Up To 3x Upper Limit of Normal  </button>
        <button id="Hup3" value="2" cat="hup" selected="false"  @click="incrementOnClick($event)"> >3x Upper Limit of Normal </button>
    </div>

    <div>
        <label for="Extra"> Extranodal Sites </label>
        <button id="Extra1"  value="0" cat="Extra" selected="false"  @click="incrementOnClick($event)">No bone marrow, CNS, liver/GI tract, or lung involvement</button>
        <button id="Extra2"  value="1" cat="Extra" selected="false"  @click="incrementOnClick($event)">Bone marrow, CNS, liver/GI tract, or lung involvement </button>
    </div>

    <section>
        <div>
            <label for="score"> Score </label>
            <p id="score">{{ this.counter }}</p>
        </div>

        <div>
            <label for="prognosis"> Prognosis </label>
            <p id="prognosis"></p>
        </div>

        <div>
            <label for="progression">Estimated 5-Year Progression Free Survival</label>
            <p id="progression"></p>
        </div>
    </section>
 </section>
</template>

<script>
export default {

    data() {
        return {
            counter: 0,
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
                if( btn.getAttribute("selected") === "true" && triggerBtn === btn ) this.counter += parseInt( btn.value );
                if( triggerBtn !== btn && cat === btn.getAttribute("cat") ) btn.setAttribute("selected", "false");
                if( btn.getAttribute("cat") === cat && btn.getAttribute("selected") === "false") btn.style.backgroundColor = "#e1e1e1"; 
            });

            console.log(this.counter);

            const prognosis = document.getElementById("prognosis");
            const progression = document.getElementById("progression");

            if( this.counter <= 1 ){
                prognosis.innerText = "Low Risk";
                progression.innerText = "91%";
            }
            if( this.counter > 1 && this.counter <= 3 ){
                prognosis.innerText = "Low-Intermediate Risk";
                progression.innerText = "74%";
            }

            if ( this.counter > 3 &&  this.counter <= 5){
                prognosis.innerText = "High-Intermediate Risk";
                progression.innerText = "51%";
            }

            if ( this.counter > 5 &&  this.counter <= 8){
                prognosis.innerText = "High risk";
                progression.innerText = "30%"; 
            }
           
        },
    }
}
</script>

<style>

</style>