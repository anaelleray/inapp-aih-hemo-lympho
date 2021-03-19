<template>
    <div class="score">
        <div class="title-red">
            International Prognostic Index for Diffuse Large B-cell Lymphoma (IPI and R-IPI)
        </div>
        
        <hr style="background-color:#000;">
        
        <section class="question">
            <label class="question-title" for="age"> Age </label>
            <div class="response">
                <div class="button" id="ageOne" clicked="true" @click="incrementOnClick($event, '-', 'ageTwo')"> ≤60 years </div>
                <div class="button" id="ageTwo" clicked="false" @click="incrementOnClick($event, '+', 'ageOne')"> >60 years </div>
            </div>
        </section>

        <section class="question">
            <label class="question-title" for="Arbor"> Ann Arbor stage III-IV </label>
            <p>III: Involvement on both sides of the diaphragm, IV: Involvement of extranodal sites</p>
            <div class="response">
                <div class="button" id="AnnOne" clicked="false" @click="incrementOnClick($event, '-', 'AnnTwo')"> No 0 </div>
                <div class="button" id="AnnTwo" clicked="false" @click="incrementOnClick($event, '+', 'AnnOne')"> yes +1 </div>
            </div>
        </section>

        <section class="question">
            <label class="question-title" for="ECOG"> <a href="#">ECOG performance status</a> ≥2 </label>
            <div class="response">
                <div class="button" id="ECOGOne" clicked="false" @click="incrementOnClick($event, '-', 'ECOGTwo')"> No 0 </div>
                <div class="button" id="ECOGTwo" clicked="false" @click="incrementOnClick($event, '+', 'ECOGOne')"> yes +1 </div>
            </div>
        </section>

        <section class="question">
            <label class="question-title" for="LDH"> Serum LDH level >1× normal </label>
            <div class="response">
                <div class="button" id="LDHOne" clicked="false" @click="incrementOnClick($event, '-', 'LDHTwo')"> No 0 </div>
                <div class="button" id="LDHTwo" clicked="false" @click="incrementOnClick($event, '+', 'LDHOne')"> yes +1 </div>
            </div>
        </section>

        <section class="question">
            <label class="question-title" for="LDH"> Serum LDH level >1× normal </label>
            <label  for="extranodal">>1 extranodal site</label>
            <p>Bone marrow, GI tract, liver, lung, CNS, skin, testes, Waldeyer’s ring</p>
            <div class="response">
                <div class="button" id="extraOne" clicked="false" @click="incrementOnClick($event, '-', 'extraTwo')"> No 0 </div>
                <div class="button" id="extraTwo" clicked="false" @click="incrementOnClick($event, '+', 'extraOne')"> yes +1 </div>
            </div>
        </section>

        <section class="consequence">
            Prognosis
            <br><br>
            <div>
                <p>{{ this.counter }} points</p>
                <p id="rIpi"> Very good prognosis (R-IPI) </p>
                <p id="ipi"> Low risk group (IPI) </p>
            </div>
            <br>
            <div>
                <p id="pourcentageRipi">94%</p>
                <p id="overSurIpi"> Overall survival (R-IPI) </p>
                <p id="overSurIpi2"> 82% overall survival (IPI) </p>
            </div>
            <br>
            <div>
                <p id="pourcentageIpi"> 94% </p>
                <p id="progSurIpi">Progression-free survival (R-IPI)</p>
                <p id="progSurIpi2">85% progression-free survival (IPI)</p>
            </div>
        </section>
        <div class="link">
            <div class="link-title">
                Litterature
            </div>
            <div class="link-subTitle">
                Original / Primary reference
            </div>
            <div class="linkUrl">
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/8141877" class="resource" target="_blank"><span class="resource__text">A predictive model for aggressive non-Hodgkin's lymphoma. The International Non-Hodgkin's Lymphoma Prognostic Factors Project. N Engl J Med. 1993;329(14):987-94.</span></a>
            </div>
            <div class="linkUrl">
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/17105812 " class="resource" target="_blank"><span class="resource__text">Sehn LH, Berry B, Chhanabhai M, et al. The revised International Prognostic Index (R-IPI) is a better predictor of outcome than the standard IPI for patients with diffuse large B-cell lymphoma treated with R-CHOP. Blood. 2007;109(5):1857-61.</span></a>
            </div>
            
            <div class="link-subTitle">
                Validation
            </div>
            <div class="linkUrl">
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/26260224 " class="resource" target="_blank"><span class="resource__text">El-galaly TC, Villa D, Alzahrani M, et al. Outcome prediction by extranodal involvement, IPI, R-IPI, and NCCN-IPI in the PET/CT and rituximab era: A Danish-Canadian study of 443 patients with diffuse-large B-cell lymphoma. Am J Hematol. 2015;90(11):1041-6.</span></a>
            </div>
            <div class="linkUrl">
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/26054914 " class="resource" target="_blank"><span class="resource__text">Olszewski AJ, Winer ES, Castillo JJ. Validation of clinical prognostic indices for diffuse large B-cell lymphoma in the National Cancer Data Base. Cancer Causes Control. 2015;26(8):1163-72.</span></a>
            </div>
            <div class="linkUrl">
                <a href="https://academic.oup.com/annonc/article/21/7/1486/163863/Prognostic-models-for-diffuse-large-B-cell " class="resource" target="_blank"><span class="resource__text">Bari A, Marcheselli L, Sacchi S, et al. Prognostic models for diffuse large B-cell lymphoma in the rituximab era: a never-ending story. Ann Oncol. 2010;21(7):1486-91.</span></a>
            </div>
            <div class="linkUrl">
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/9808548 " class="resource" target="_blank"><span class="resource__text">Blay J, Gomez F, Sebban C, et al. The International Prognostic Index correlates to survival in patients with aggressive lymphoma in relapse: analysis of the PARMA trial. Parma Group. Blood. 1998;92(10):3562-8.</span></a>
            </div>
            <div class="linkUrl">
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/9489649 " class="resource" target="_blank"><span class="resource__text">Fanin R, Silvestri F, Geromin A, et al. Autologous stem cell transplantation for aggressive non-Hodgkin's lymphomas in first complete or partial remission: a retrospective analysis of the outcome of 52 patients according to the age-adjusted International Prognostic Index. Bone Marrow Transplant. 1998;21(3):263-71.</span></a>
            </div>
            <div class="linkUrl">
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/9187429 " class="resource" target="_blank"><span class="resource__text">Foussard C, Desablens B, Sensebe L, et al. Is the International Prognostic Index for aggressive lymphomas useful for low-grade lymphoma patients? Applicability to stage III-IV patients. The GOELAMS Group, France. Ann Oncol. 1997;8 Suppl 1:49-52.</span></a>
            </div>
            <div class="linkUrl">
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/7632953 " class="resource" target="_blank"><span class="resource__text">Hermans J, Krol AD, Van groningen K, et al. International Prognostic Index for aggressive non-Hodgkin's lymphoma is valid for all malignancy grades. Blood. 1995;86(4):1460-3.</span></a>
            </div>
            <div class="link-subTitle">
                Other References
            </div>
            <div class="linkUrl">
                <span class="resource__text">Armitage JO. Staging non-Hodgkin lymphoma. CA Cancer J Clin. 2005;55(6):368-76.</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
        counter: 0

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
            }

            triggerBtn.setAttribute("clicked", "true");
            otherBtn.setAttribute("clicked", "false");

            const rIpi = document.getElementById("rIpi");
            const ipi = document.getElementById("ipi");
            const pourcentageRipi = document.getElementById("pourcentageRipi");
            const overSurIpi = document.getElementById("overSurIpi");
            const overSurIpi2 = document.getElementById("overSurIpi2");
            const pourcentageIpi = document.getElementById("pourcentageIpi");
            const progSurIpi = document.getElementById("progSurIpi");
            const progSurIpi2 = document.getElementById("progSurIpi2");

            if( this.counter === 0 ){
                rIpi.innerText = "Very good prognosis (R-IPI)";
                ipi.innerText = "Low risk group (IPI)";
                pourcentageRipi.innerText = "94 %";
                overSurIpi.innerText = "Overall survival (R-IPI)";
                overSurIpi2.innerText = "82% overall survival (IPI)";
                pourcentageIpi.innerText = "94 %";
                progSurIpi.innerText = "Progression-free survival (R-IPI)";
                progSurIpi2.innerText = "85% progression-free survival (IPI)";
            }
            if( this.counter === 1) {
                rIpi.innerText = "Good prognosis (R-IPI)";
                ipi.innerText = "Low risk group (IPI)";
                pourcentageRipi.innerText = "79 %";
                overSurIpi.innerText = "Overall survival (R-IPI)";
                overSurIpi2.innerText = "82% overall survival (IPI)";
                pourcentageIpi.innerText = "80 %";
                progSurIpi.innerText = "Progression-free survival (R-IPI)";
                progSurIpi2.innerText = "85% progression-free survival (IPI)";
            }
            if( this.counter === 2) {
                rIpi.innerText = "Good prognosis (R-IPI)";
                ipi.innerText = "Low-intermediate risk group (IPI)";
                pourcentageRipi.innerText = "79 %";
                overSurIpi.innerText = "Overall survival (R-IPI)";
                overSurIpi2.innerText = "81% overall survival (IPI)";
                pourcentageIpi.innerText = "80 %";
                progSurIpi.innerText = "Progression-free survival (R-IPI)";
                progSurIpi2.innerText = "80% progression-free survival (IPI)";
            }
            if( this.counter === 3) {
                rIpi.innerText = "Poor prognosis (R-IPI)";
                ipi.innerText = "High-intermediate risk group (IPI)";
                pourcentageRipi.innerText = "55 %";
                overSurIpi.innerText = "Overall survival (R-IPI)";
                overSurIpi2.innerText = "49% overall survival (IPI)";
                pourcentageIpi.innerText = "53 %";
                progSurIpi.innerText = "Progression-free survival (R-IPI)";
                progSurIpi2.innerText = "57% progression-free survival (IPI)";
            }
            if( this.counter === 4) {
                rIpi.innerText = "Poor prognosis (R-IPI)";
                ipi.innerText = "High risk group (IPI)";
                pourcentageRipi.innerText = "55 %";
                overSurIpi.innerText = "Overall survival (R-IPI)";
                overSurIpi2.innerText = "59% overall survival (IPI)";
                pourcentageIpi.innerText = "93 %";
                progSurIpi.innerText = "Progression-free survival (R-IPI)";
                progSurIpi2.innerText = "51% progression-free survival (IPI)";
            }
            if( this.counter === 5) {
                rIpi.innerText = "Poor prognosis (R-IPI)";
                ipi.innerText = "High risk group (IPI)";
                pourcentageRipi.innerText = "55 %";
                overSurIpi.innerText = "Overall survival (R-IPI)";
                overSurIpi2.innerText = "59% overall survival (IPI)";
                pourcentageIpi.innerText = "53 %";
                progSurIpi.innerText = "Progression-free survival (R-IPI)";
                progSurIpi2.innerText = "51% progression-free survival (IPI)";
            }
        },
    }
}
</script>

<style>

</style>