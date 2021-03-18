<template>
    <div>
        <h1>International Prognostic Index for Diffuse Large B-cell Lymphoma (IPI and R-IPI)</h1>

        <section>
            <label for="age"> Age </label>
            <div>
                <button id="ageOne" clicked="true" @click="incrementOnClick($event, '-', 'ageTwo')"> ≤60 years </button>
                <button id="ageTwo" clicked="false" @click="incrementOnClick($event, '+', 'ageOne')"> >60 years </button>
            </div>
        </section>

        <section>
            <label for="Arbor"> Ann Arbor stage III-IV </label>
            <p>III: Involvement on both sides of the diaphragm, IV: Involvement of extranodal sites</p>
            <div>
                <button id="AnnOne" clicked="false" @click="incrementOnClick($event, '-', 'AnnTwo')"> No 0 </button>
                <button id="AnnTwo" clicked="false" @click="incrementOnClick($event, '+', 'AnnOne')"> yes +1 </button>
            </div>
        </section>

        <section>
            <label for="ECOG"> <a href="#">ECOG performance status</a> ≥2 </label>
            <div>
                <button id="ECOGOne" clicked="false" @click="incrementOnClick($event, '-', 'ECOGTwo')"> No 0 </button>
                <button id="ECOGTwo" clicked="false" @click="incrementOnClick($event, '+', 'ECOGOne')"> yes +1 </button>
            </div>
        </section>

        <section>
            <label for="LDH"> Serum LDH level >1× normal </label>
            <div>
                <button id="LDHOne" clicked="false" @click="incrementOnClick($event, '-', 'LDHTwo')"> No 0 </button>
                <button id="LDHTwo" clicked="false" @click="incrementOnClick($event, '+', 'LDHOne')"> yes +1 </button>
            </div>
        </section>

        <section>
            <label for="extranodal">>1 extranodal site</label>
            <p>Bone marrow, GI tract, liver, lung, CNS, skin, testes, Waldeyer’s ring</p>
            <div>
                <button id="extraOne" clicked="false" @click="incrementOnClick($event, '-', 'extraTwo')"> No 0 </button>
                <button id="extraTwo" clicked="false" @click="incrementOnClick($event, '+', 'extraOne')"> yes +1 </button>
            </div>
        </section>

        <section>
            <div>
                <p>{{ this.counter }} points</p>
                <p id="rIpi"> Very good prognosis (R-IPI) </p>
                <p id="ipi"> Low risk group (IPI) </p>
            </div>
            <div>
                <p id="pourcentageRipi">94%</p>
                <p id="overSurIpi"> Overall survival (R-IPI) </p>
                <p id="overSurIpi2"> 82% overall survival (IPI) </p>
                <button> Copy Results </button>
            </div>
            <div>
                <p id="pourcentageIpi"> 94% </p>
                <p id="progSurIpi">Progression-free survival (R-IPI)</p>
                <p id="progSurIpi2">85% progression-free survival (IPI)</p>
                <button> Next Steps </button>
            </div>
        </section>
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