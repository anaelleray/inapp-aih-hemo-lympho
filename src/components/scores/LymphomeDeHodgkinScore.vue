<template>
  <div class="score-1">
    <h2>Hodgkin's Disease | Prognosis</h2>
    <h3>Estimate prognosis in Hodgkin's disease.</h3>
    <br />
    <div>
      <table>
        <tr>
          <td>1. Age ?</td>
          <td>
            <button style="background: #c2f0c2">>45 years</button>
          </td>
          <td>
            <button style="background: #c2f0c2">≥45 Years</button>
          </td>
        </tr>
        <tr>
          <td>2. Gender?</td>
          <td>
            <button style="background: #c2f0c2">Male</button>
          </td>
          <td>
            <button style="background: #c2f0c2">Female</button>
          </td>
        </tr>
        <tr>
          <td>3. Albumin?</td>
          <td>
            <button style="background: #c2f0c2">Normal</button>
          </td>
          <td>
            <button style="background: #c2f0c2"><40 g/L</button>
          </td>
        </tr>
        <tr>
          <td>4. Hemoglobin?</td>
          <td>
            <button style="background: #c2f0c2">
              <span>≥105 g/L</span><br />
              <span>≥105 g/dL</span>
            </button>
          </td>
          <td>
            <button style="background: #c2f0c2">
              <span><105 g/L</span> <br />
              <span><105 g/dL</span>
            </button>
          </td>
        </tr>
        <tr>
          <td>5. Stage?</td>
          <td>
            <button style="background: #c2f0c2">Stage III</button>
          </td>
          <td>
            <button style="background: #c2f0c2">Stage IV</button>
          </td>
        </tr>
        <tr>
          <td>6. Leukocytosis: WBC = 15,000mm³ or more?</td>
          <td>
            <button style="background: #c2f0c2">No</button>
          </td>
          <td>
            <button style="background: #c2f0c2">Oui</button>
          </td>
        </tr>
        <tr>
          <td>7. Lymphopenia: Lymphs <600/mm³ OR <8% of WBC count?</td>
          <td>
            <button style="background: #c2f0c2">No</button>
          </td>
          <td>
            <button style="background: #c2f0c2">Oui</button>
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
  name: "Lymphome de Hodgkin",
  data() {
    return {};
  },

  mounted() {},
});
</script>

<style>
</style>