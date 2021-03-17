<template>
  <div class="score-1">
    <h2>MALT Lymphoma prognosisAAA (MALT-IPI)</h2>
    <div>
      <table>
        <tr>
          <td>Estimate prognosis in MALT lymphoma</td>

          <td>1. Age?</td>
          <td>
            <button style="background: green">Need Change 70 years</button>
          </td>
          <td>
            <button style="background: green">≥70 years</button>
          </td>
        </tr>

        <td>2. LDH?</td>
        <td>
          <button style="background: green">Normal</button>
        </td>
        <td>
          <button style="background: green">Elevated</button>
        </td>

        <td>3. Stage?</td>
        <td>
          <button style="background: green">Stage I/II</button>
        </td>
        <td>
          <button style="background: green">Stage III/IV</button>
        </td>
      </table>
    </div>
    <input type="text" value="0" />
  </div>


</template>

<script lang="ts" >
import Vue from "vue";
export default Vue.extend({
  name: "Maladie de WaldenstromAAA",
  data() {
    return {
      result: null,
    };
  },
  mounted() {},
});
</script>

<style>
</style>
