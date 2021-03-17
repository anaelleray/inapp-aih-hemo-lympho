<template>
  <div class="content-page">
    <keep-alive>
      <component v-bind:is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import DataService from "@/service/DataService";
import CriteresGelfScore from "@/components/scores/CriteresGelfScore.vue";
import FlipiScore from "@/components/scores/FlipiScore.vue";
import MipiScore from "@/components/scores/MipiScore.vue";
import CllBallScore from "@/components/scores/CllBallScore.vue";
import BinetScore from "@/components/scores/BinetScore.vue";
import MaladieDeWaldenstromScore from "@/components/scores/MaladieDeWaldenstromScore.vue";
import MatutesRmhScore from "@/components/scores/MatutesRmhScore.vue";
import NccnIpiScore from "@/components/scores/NccnIpiScore.vue";
import SmolderingPrognosisScore from "@/components/scores/SmolderingPrognosisScore.vue";
import CllIpiScore from "@/components/scores/CllIpiScore.vue";
import CnsIpiScore from "@/components/scores/CnsIpiScore.vue";
import RIpiScore from "@/components/scores/RIpiScore.vue";
import RIssScore from "@/components/scores/RIssScore.vue";
import Ipi24Score from "@/components/scores/Ipi24Score.vue";
import IssScore from "@/components/scores/IssScore.vue";
import LymphomeDeHodgkinScore from "@/components/scores/LymphomeDeHodgkinScore.vue";

export default Vue.extend({
  components: {
    CriteresGelfScore,
    FlipiScore,
    MipiScore,
    CllBallScore,
    BinetScore,
    MaladieDeWaldenstromScore,
    MatutesRmhScore,
    NccnIpiScore,
    SmolderingPrognosisScore,
    CllIpiScore,
    CnsIpiScore,
    RIpiScore,
    RIssScore,
    Ipi24Score,
    IssScore,
    LymphomeDeHodgkinScore,
  },

  data() {
    return {
      currentComponent: null,
    };
  },

  mounted() {
    const slug = this.$route.params.slug;
    DataService.load()
      .then(() => {
        const cat = this.searchBySlug(DataService.$data.tree, slug);
        console.log(cat);

        if (cat === null) {
          this.notFound = true;
        } else {
          this.currentComponent = cat.component;
        }
      })
      .catch((e) => {
        console.log(e);
      });
  },

  methods: {
    searchBySlug(dataJsonTree: Array<any>, slug: string) {
      for (let i in dataJsonTree) {
        const mainCategory = dataJsonTree[i];

        if (mainCategory.children.length>0) {
          for (let j in mainCategory.children) {
            const subCategory = mainCategory.children[j];
            if (subCategory.slug === slug) {
              return subCategory;
            }
          }
        }else {
            if (mainCategory.slug === slug) {
              return mainCategory;
            }
        }
      }
      return null;
    },
  },
});
</script>