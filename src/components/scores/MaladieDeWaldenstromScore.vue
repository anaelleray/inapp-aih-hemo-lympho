<template>
  <div class="score-1">
    <h2>MALT Lymphoma prognosis (MALT-IPI)</h2>
    <div>
      <table>
        <tr>
          <td>Estimate prognosis in MALT lymphoma</td>
          <td>
            <button style="background: green">>3</button>
          </td>
          <td>
            <button style="background: green">inf3</button>
          </td>
        </tr>
        <tr>
          <td>Anemia, Hgb inf10 g/dL</td>
          <td>
            <button style="background: green">No</button>
          </td>
          <td>
            <button style="background: green">Yes</button>
          </td>
        </tr>
        <tr>
          <td>Thrombocytopenia, Platelets inf100,000/mm³</td>
          <td>
            <button style="background: green">No</button>
          </td>
          <td>
            <button style="background: green">Yes</button>
          </td>
        </tr>
      </table>
    </div>
    <input type="text" value="0" />
  </div>
</template>

<script lang="ts" >
import Vue from "vue";
export default Vue.extend({
  name: "AAAAAA",
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
