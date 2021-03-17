<template>
  <div class="score-1">
      <h2>MALT Lymphoma prognosis (MALT-IPI)</h2>
      <h3>Estimate prognosis in MALT lymphoma</h3>
      <br>
      <div>
          <table>
            <tr>
                <td>1. Age?</td>
                  <td>
                    <button style="background:#c2f0c2"><70 years</button>
                </td>
                <td>
                    <button style="background:#c2f0c2">≥70 years</button>
                </td>
            </tr>
            <tr>
                <td>2. LDH?</td>
                  <td>
                    <button style="background:#c2f0c2">Normal</button>
                </td>
                <td>
                    <button style="background:#c2f0c2">Elevated</button>
                </td>
            </tr>
            <tr>
                <td>3. Stage?</td>
                  <td>
                    <button style="background:#c2f0c2">Stage I/II</button>
                </td>
                <td>
                    <button style="background:#c2f0c2">Stage III/IV</button>
                </td>
            </tr>
        </table>
    </div>
    <input type="text" value="0">
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Maladie de Waldenstrom",
  data() {
    return {};
  },

  mounted() {},
});
</script>

<style>
</style>