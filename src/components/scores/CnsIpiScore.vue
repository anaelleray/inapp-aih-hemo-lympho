<template>
 <section> 

    <div>
        <label for="age"> age: </label>
        <button id="age1" cat="age" clicked="false" @click="incrementOnClick($event, '-', 'age2')"> ≤60 years</button>
        <button id="age2" cat="age" clicked="false" @click="incrementOnClick($event, '+', 'age1')">&rsaquo; 60 years</button>
    </div>

    <div>
        <label for="ECOG">ECOG Performance Status</label>
        <button id="ECOG1" cat="ECOG" clicked="false"  @click="incrementOnClick($event, '-', 'ECOG2')">ECOG 0 - 1</button>
        <button id="ECOG2" cat="ECOG" clicked="false"  @click="incrementOnClick($event, '+', 'ECOG1')"> ECOG ≥2 </button>
    </div>

    <div>
        <label for="LDH"> LDH </label>
        <button id="LDH1" cat="LDH" clicked="false"  @click="incrementOnClick($event, '-', 'LDH2')">Normal range</button>
        <button id="LDH2" cat="LDH" clicked="false"  @click="incrementOnClick($event, '+', 'LDH1')">Above normal range</button>
    </div>

    <div>
        <label for="Extrano">Extranodal Sites </label>
        <button id="Extrano1" cat="Extrano" clicked="false"  @click="incrementOnClick($event, '-', 'Extrano2')"> 0-1</button>
        <button id="Extrano2" cat="Extrano" clicked="false"  @click="incrementOnClick($event, '+', 'Extrano1')"> ≥2 </button>
    </div>

    <div>
        <label for="stage"> Stage </label>
        <button id="stage1" cat="stage" clicked="false"  @click="incrementOnClick($event, '-', 'stage2')">Stage I/II</button>
        <button id="stage2" cat="stage" clicked="false"  @click="incrementOnClick($event, '+', 'stage1')">Stage III/IV</button>
    </div>

    <div>
        <label for="kiney"> Kidney and/or Adrenal involvement</label>
        <button id="knid1" cat="knidey" clicked="false"  @click="incrementOnClick($event, '-', 'knid2')"> No </button>  
        <button id="knid2" cat="knidey" clicked="false"  @click="incrementOnClick($event, '+', 'knid1')"> Yes </button>  
    </div>

    <div>
        <label for="result"> Results </label>
        
        <div>
            <p>score</p>
            <p id="score"></p>
        </div>

        <div>
            <p>Prognosis for CNS Progression</p>
            <p id="risk"></p>
        </div>

        <div>
            <p> 2-year risk of CNS progression</p>
            <p id="year"></p>
        </div>

        <div>
            <p id="para"></p>
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
         incrementOnClick(event, inc, id){

            const triggerBtn = event.target;
            const otherBtn = document.getElementById(id);
            triggerBtn.style.backgroundColor  = "red";
            otherBtn.style.backgroundColor = "#e1e1e1";
            let clickedState = triggerBtn.getAttribute("clicked");

            if( clickedState === "false" ) { 
                if (inc === "+"){ 
                        this.counter++ 
                    } else { 
                        if(this.counter > 0) this.counter-- 
                    }
            };

            triggerBtn.setAttribute("clicked", "true");
            otherBtn.setAttribute("clicked", "false");

            const score = document.getElementById("score");
            const risk = document.getElementById("risk");
            const year = document.getElementById("year");
            const para = document.getElementById("para");

            if( this.counter === 0 ){
                score.innerText = 0;
                risk.innerText = "Low Risk";
                year.innerText = "0.6%";
                para.innerText = "Prognosis depends on the original IPI factors in addition to involvement of kidneys and/or adrenal glands. The CNS-IPI divides DLBCL patients into three risk groups for occurrence of relapse/progression in the central nervous system.";
            }
            if( this.counter === 1) {
                score.innerText = 1;
                risk.innerText = "Low Risk";
                year.innerText = "0.6%";
                para.innerText = "Prognosis depends on the original IPI factors in addition to involvement of kidneys and/or adrenal glands. The CNS-IPI divides DLBCL patients into three risk groups for occurrence of relapse/progression in the central nervous system.";
            }
            if( this.counter === 2) {
                score.innerText = 2;
                risk.innerText = "Intermediate Risk";
                year.innerText = "3.4%";
                para.innerText = "Prognosis depends on the original IPI factors in addition to involvement of kidneys and/or adrenal glands. The CNS-IPI divides DLBCL patients into three risk groups for occurrence of relapse/progression in the central nervous system.";
            }
            if( this.counter === 3) {
                score.innerText = 3;
                risk.innerText = "Intermediate Risk";
                year.innerText = "3.4%";
                para.innerText = "Prognosis depends on the original IPI factors in addition to involvement of kidneys and/or adrenal glands. The CNS-IPI divides DLBCL patients into three risk groups for occurrence of relapse/progression in the central nervous system.";
            }
            if( this.counter === 4) {
                score.innerText = 4;
                risk.innerText = "High Risk";
                year.innerText = "10.2%";
                para.innerText = "Prognosis depends on the original IPI factors in addition to involvement of kidneys and/or adrenal glands. The CNS-IPI divides DLBCL patients into three risk groups for occurrence of relapse/progression in the central nervous system.";
            }
            if( this.counter === 5) {
                score.innerText = 5;
                risk.innerText = "High Risk";
                year.innerText = "10.2%";
                para.innerText = "Prognosis depends on the original IPI factors in addition to involvement of kidneys and/or adrenal glands. The CNS-IPI divides DLBCL patients into three risk groups for occurrence of relapse/progression in the central nervous system.";
            }
            if( this.counter === 6 ) {
                score.innerText = 6;
                risk.innerText = "High Risk";
                year.innerText = "10.2%";
                para.innerText = "Prognosis depends on the original IPI factors in addition to involvement of kidneys and/or adrenal glands. The CNS-IPI divides DLBCL patients into three risk groups for occurrence of relapse/progression in the central nervous system.";
            }
            
        },
    }
}
</script>

<style>

</style>