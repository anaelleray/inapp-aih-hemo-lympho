<template>
 <section class="score">

    <div class="title-red">
        CNS International Prognostic Index in Diffuse Large B-Cell Lymphoma (CNS-IPI)    
    </div>

    <div class="sous-title">
        Estimate risk of CNS relapse/progression in diffuse large B-cell lymphoma
    </div>

    <hr style="background-color:#000;">

    <div class="question">
        <label class="question-title" for="age"> Age: </label>
        <div class="response">
            <div class="button" id="age1" cat="age" clicked="false" @click="incrementOnClick($event, '-', 'age2')"> ≤60 years</div>
            <div class="button" id="age2" cat="age" clicked="false" @click="incrementOnClick($event, '+', 'age1')">&rsaquo; 60 years</div>
        </div>
    </div>

    <div class="question">
        <label class="question-title" for="ECOG">ECOG Performance Status</label>
        <div class="response">
            <div class="button" id="ECOG1" cat="ECOG" clicked="false"  @click="incrementOnClick($event, '-', 'ECOG2')">ECOG 0 - 1</div>
            <div class="button" id="ECOG2" cat="ECOG" clicked="false"  @click="incrementOnClick($event, '+', 'ECOG1')"> ECOG ≥2 </div>
        </div>
    </div>

    <div class="question">
        <label class="question-title" for="LDH"> LDH </label>
        <div class="response">
            <div class="button" id="LDH1" cat="LDH" clicked="false"  @click="incrementOnClick($event, '-', 'LDH2')">Normal range</div>
            <div class="button" id="LDH2" cat="LDH" clicked="false"  @click="incrementOnClick($event, '+', 'LDH1')">Above normal range</div>
        </div>
    </div>

    <div class="question">
        <label class="question-title" for="Extrano">Extranodal Sites </label>
        <div class="response">
            <div  class="button" id="Extrano1" cat="Extrano" clicked="false"  @click="incrementOnClick($event, '-', 'Extrano2')"> 0-1</div>
            <div class="button" id="Extrano2" cat="Extrano" clicked="false"  @click="incrementOnClick($event, '+', 'Extrano1')"> ≥2 </div>
        </div>
    </div>

    <div class="question">
        <label class="question-title" for="stage"> Stage </label>
        <div class="response">
            <div class="button" id="stage1" cat="stage" clicked="false"  @click="incrementOnClick($event, '-', 'stage2')">Stage I/II</div>
            <div class="button" id="stage2" cat="stage" clicked="false"  @click="incrementOnClick($event, '+', 'stage1')">Stage III/IV</div>
        </div>
    </div>

    <div class="question">
        <label class="question-title" for="kiney"> Kidney and/or Adrenal involvement</label>
        <div class="response">
            <div class="button" id="knid1" cat="knidey" clicked="false"  @click="incrementOnClick($event, '-', 'knid2')"> No </div>  
            <div class="button" id="knid2" cat="knidey" clicked="false"  @click="incrementOnClick($event, '+', 'knid1')"> Yes </div>  
        </div>
    </div>

    <section class="consequence">
         Results
        <br><br>
         <div>
            <p>score</p>
            <p id="score"></p>
        </div>
        <br><br>
        <div>
            <p>Prognosis for CNS Progression</p>
            <p id="risk"></p>
        </div>
        <br>
       <div>
            <p> 2-year risk of CNS progression</p>
            <p id="year"></p>
        </div>
        <br>
        <div>
            <p id="para"></p>
        </div>
    </section>
    <div class="about">
        <div class="title-about">About</div>
        <p>
            CNS recurrence/progression in patients with DLBCL can be devastating. Although some studies suggest a decline in the occurrence of CNS relapse in the rituximab era, certain high risk groups can still be identified and should be considered for CNS-directed trials or prophylactic therapies.
        </p>
        <br>
        <p>
            The CNS-IPI was derived from a population of patients (n=2164) enrolled in the German clinical trials and subsequently validated in a population of 1597 patients treated in British Columbia, Canada. The score is based on the original IPI factors with the addition of kidney and/or adrenal involvement. The final score is able to differentiate patients into 3 distinct prognostic groups for CNS recurrence/progression.
        </p>
    </div>
    <div class="link">
            <div class="link-title">
                References
            </div>
            <div class="linkUrl">
                Schmitz, et al. <a href="https://www.qxmd.com/pubmed/27382100" class="resource" target="_blank"><span class="resource__text">CNS International Prognostic Index: A Risk Model for CNS Relapse in Patients With Diffuse Large B-Cell Lymphoma Treated With R-CHOP.</span></a>Journal of Clinical Oncology: Official Journal of the American Society of Clinical Oncology 2016 September 10, 34 (26): 3150-6
            </div>
            <div class="linkUrl">
                The <a href="https://www.qxmd.com/pubmed/27382100" class="resource" target="_blank"><span class="resource__text">CNS International Prognostic Index in Diffuse Large B-Cell Lymphoma (CNS-IPI) </span></a>calculator is created by QxMD.
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
            triggerBtn.classList.add("button-selected");
            otherBtn.classList.remove("button-selected");
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