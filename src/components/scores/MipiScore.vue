<template>
  <div>

        <div class="input1">
            <div>Age</div>
            <div class="input2">
                <input type="text">
                <div>years</div>
            </div>
        </div>

        <div class="input1">
            <div>ECOG</div>
            <div class="input2">
                <div class="" ><div class="" >0-1</div></div>
                <div class="" ><div class="" >2-4</div></div>
            </div>
        </div>

        <div class="input1">
            <div>Serum LDH</div>
            <div class="input2">
                <input type="text" >
                <div>U/L</div>
            </div>
        </div>

        <div class="input1">
            <div>
                <div>Upper limit of normal for serum LDH</div>
                <div>According to your lab's normal values</div>
            </div>
            <div class="input2">
                <input type="text" value="160" >
                <div>U/L</div>
            </div>
        </div>

        <div class="input1">
            <div>WBC</div>
            <div class="input2">
                <input type="text">
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
                <input type="text">
                <div>%</div>
            </div>
        </div>

        <div>Result:</div>

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
        }
    },
    mounted()
    {

    },
    methods: {

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