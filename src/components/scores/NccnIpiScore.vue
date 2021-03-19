<template>
 <section class="score"> 
    <div class="question">
        <label for="age"> age: </label>
        <div class="button" id="age1" value="0" cat="age" selected="false" @click="incrementOnClick($event)"> ≤40 Years </div>
        <div class="button" id="age2" value="1" cat="age" selected="false" @click="incrementOnClick($event)"> 41-60 Years</div>
        <div class="button" id="age3" value="2" cat="age" selected="false" @click="incrementOnClick($event)"> 61-75</div>
        <div class="button" id="age4" value="3" cat="age" selected="false" @click="incrementOnClick($event)"> &lsaquo; 75</div>
    </div>

    <div class="question">
        <label for="ECOG">ECOG Performance Status</label>
        <div class="button" id="ECOG1" value="0" cat="ECOG" selected="false"  @click="incrementOnClick($event)">ECOG 0-1</div>
        <div class="button" id="ECOG2" value="1" cat="ECOG" selected="false"  @click="incrementOnClick($event)">ECOG 2-4</div>
    </div>

    <div class="question">
        <label for="Stage"> Stage </label>
        <div class="button" id="stage1" value="0" cat="stage" selected="false"  @click="incrementOnClick($event)"> Stage I/II </div>
        <div class="button" id="stage2" value="1" cat="stage" selected="false"  @click="incrementOnClick($event)"> Stage III/IV </div>
    </div>

    <div class="question">
        <label for="LDHupper">LDH Upper Limit of Normal</label>
        <div class="button" id="Hup1" value="0" cat="hup" selected="false"  @click="incrementOnClick($event)"> Normal</div>
        <div class="button" id="Hup2" value="1" cat="hup" selected="false"  @click="incrementOnClick($event)"> Elevated, Up To 3x Upper Limit of Normal  </div>
        <div class="button" id="Hup3" value="2" cat="hup" selected="false"  @click="incrementOnClick($event)"> >3x Upper Limit of Normal </div>
    </div>

    <div class="question">
        <label for="Extra"> Extranodal Sites </label>
        <div class="button" id="Extra1"  value="0" cat="Extra" selected="false"  @click="incrementOnClick($event)">No bone marrow, CNS, liver/GI tract, or lung involvement</div>
        <div class="button" id="Extra2"  value="1" cat="Extra" selected="false"  @click="incrementOnClick($event)">Bone marrow, CNS, liver/GI tract, or lung involvement </div>
    </div>

    <section class="consequence">
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

    <div class="link">
        <div class="link-title">
            References
        </div>
        <div class="link-subTitle">
            <div class="About__Reference-imz9p2-2 dRlGBU"><p>Shipp et al.</p>
            <p><a href="https://www.qxmd.com/pubmed/8141877" target="_blank"> A predictive model for aggressive non-Hodgkin’s lymphoma.</a></p>
            <p>New England Journal of Medicine 1993 September 30, 329 (14): 987-94</p></div><div class="About__Reference-imz9p2-2 dRlGBU"><p>Zhou et al.</p>
            <p><a href="https://www.qxmd.com/pubmed/24264230" target="_blank">An enhanced International Prognostic Index (NCCN-IPI) for patients with diffuse large B-cell lymphoma treated in the rituximab era.</a></p><p>Blood 2014 February 6, 123 (6): 837-42</p></div><div class="About__Reference-imz9p2-2 dRlGBU"><p></p><p>The <a href="https://qxmd.com/calculate/calculator_311/diffuse-large-b-cell-lymphoma-prognosis-nccn-ipi" target="_blank">Diffuse Large B-cell Lymphoma Prognosis (NCCN-IPI)</a> calculator is created by QxMD.</p><p></p></div><div class="About__SpaceEater-imz9p2-4 iSdtLd"></div>
        </div>

    </div>

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
    a {
        text-decoration: underline;
    }
</style>