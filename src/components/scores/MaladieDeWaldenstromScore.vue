<template>
  <div class="score-1">
    <h2>
      International Prognostic Scoring System for Waldenstrom Macroglobulinemia
    </h2>
    <h3>Estimate prognosis with the IPPSWM</h3>
    <br />
    <div>
      <table>
        <tr>
          <td>1. Age</td>
          <td>
            <button style="background: #c2f0c2">≤65 years</button>
          </td>
          <td>
            <button style="background: #c2f0c2">>65 years</button>
          </td>
        </tr>
        <tr>
          <td>2. Hemoglobin</td>
          <td>
            <button style="background: #c2f0c2">
              <span>>115 g/L</span><br />
              <span>>11.5 g/dL</span>
            </button>
          </td>
          <td>
            <button style="background: #c2f0c2">
              <span>≤115 g/L</span> <br />
              <span>≤11.5 g/dL</span>
            </button>
          </td>
        </tr>
        <tr>
          <td>3. Platelets</td>
          <td>
            <button style="background: #c2f0c2">>100 x10⁹/L</button>
          </td>
          <td>
            <button style="background: #c2f0c2">≤100 x10⁹/L</button>
          </td>
        </tr>
        <tr>
          <td>4. Beta-2-microglobulin</td>
          <td>
            <button style="background: #c2f0c2">≤3 mg/L</button>
          </td>
          <td>
            <button style="background: #c2f0c2">>3 mg/L</button>
          </td>
        </tr>
        <tr>
          <td>5. IgM</td>
          <td>
            <button style="background: #c2f0c2">≤7 g/dL</button>
          </td>
          <td>
            <button style="background: #c2f0c2">>7 g/dL</button>
          </td>
        </tr>
      </table>
    </div>
    <input type="text" value="0" />
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