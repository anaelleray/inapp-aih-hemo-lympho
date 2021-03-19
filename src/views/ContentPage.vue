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
import LymphomeDuMaltScore from "@/components/scores/LymphomeDuMaltScore.vue";

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
    LymphomeDuMaltScore
  },

  data() {
    return {
        notFound: false,
        currentComponent: null,
    };
  },

  mounted() {
    const slug = this.$route.params.slug;
    DataService.load()
      .then(() => {
        const cat = this.searchBySlug(DataService.$data.tree, slug);
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
<style>

.content-page{
    overflow-y: scroll;
    position: absolute;
    height: 100%;
    width: 100%; 
    margin-bottom: 100px; 
}

.button-selected{
    color:#fff  !important;
    background-color: #ee3343 !important;
  }

  .buttonOld{
    text-align: center;
    color: #707070;
    background-color:#f1f1f6;
    margin:20px;
    border-bottom: 0px solid #1C6EA4;
    border-radius: 0px 0px 20px 20px;
    -webkit-box-shadow: 0px 6px 13px -1px rgba(0,0,0,0.75);
    border-radius: 15px 15px 15px 15px;
    box-shadow: 0px 6px 15px -12px rgba(0,0,0,0.75);  
    padding:20px;  
  }

  .title-red{
    text-align: left;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 30px;
    margin-bottom:  30px ;
    font-size:25px;
    color: #ee3343
  }

  .title-about{
    font-size:20px;
    margin-bottom:  30px ;
    color:#69669b;
  }

  .about{
    margin: 20px;
    font-size:10px;
    text-align: left;
    color:#8b8b8e;
    background-color:#f4f4fd;
    border-radius: 0px 0px 20px 20px;
    -webkit-box-shadow: 0px 6px 13px -1px rgba(0,0,0,0.75);
    border-radius: 15px 15px 15px 15px;
    box-shadow: 0px 6px 15px -12px rgba(0,0,0,0.75);  
    padding:20px;    
  }
  .about-text{
    color:#8b8b8e;
    font-size: 15px
  }

  .button-info{
    color:#aaa2a2 !important; 
    font-size:10px !important;
  }

  .consequence{ 
    text-align: left;
    color: #fff;
    background-color:#ee3343;
    margin:20px;
    border-bottom: 0px solid #1C6EA4;
    border-radius: 0px 0px 20px 20px;
    -webkit-box-shadow: 0px 6px 13px -1px rgba(0,0,0,0.75);
    border-radius: 15px 15px 15px 15px;
    box-shadow: 0px 6px 15px -12px rgba(0,0,0,0.75);  
    padding:20px;    
  }
  .consequence .consequence-points {
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .consequence .consequence-text {
    margin-top: 10px;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
  }
  .consequence-risk{
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .sous-title{
    margin: 10px;
    text-align: left;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 30px;
    margin-bottom:  30px ;
  }

  .title-purple{
    text-align: left;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 30px;
    margin-bottom:  30px ;
    font-size:20px;
    color: #69669b
  }

  .question{
    text-align: left;
    margin:20px;
    margin-top:40px;
  }
  
  .response{
    display: flex;
    flex-direction:column;
    justify-content:center;
    margin: 10px;
  }
  .button-selected .button-info{
    color : #f1f1f6 !important;
  }

  .button{
    text-align: center;
    color: #707070;
    background-color:#f1f1f6;
    margin:20px;
    border-bottom: 0px solid #1C6EA4;
    border-radius: 0px 0px 20px 20px;
    -webkit-box-shadow: 0px 6px 13px -1px rgba(0,0,0,0.75);
    border-radius: 15px 15px 15px 15px;
    box-shadow: 0px 6px 15px -12px rgba(0,0,0,0.75);  
    padding:20px;    
  }

  .question-title{
    font-size:15px;
  }

  .score{
    font-weight: bold;
    margin: 20px;
    margin-bottom: 100px;
  }

  .link{
    margin: 10px;
    font-size:15px;
    text-align: left;
    color:#8b8b8e;
    background-color:#f4f4fd;
    border-radius: 0px 0px 20px 20px;
    -webkit-box-shadow: 0px 6px 13px -1px rgba(0,0,0,0.75);
    border-radius: 15px 15px 15px 15px;
    box-shadow: 0px 6px 15px -12px rgba(0,0,0,0.75);  
    padding:20px;   
  }
  .link-title{
    margin: 5px;
    text-align: left;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 10px;
    margin-bottom: 40px ;
    color:#69669b;
    font-weight: bold;
    font-size : 30px;
  }
  .link-subTitle{
    margin: 5px;
    text-align: left;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 30px;
    margin-bottom: 15px ;
    color:#69669b;
    font-size : 15px;
  }
  .linkUrl a {
    color:#8b8b8e;
    text-decoration: underline;
    font-size: 15px
  }
  .linkUrl  {
    margin-bottom: 10px;
  }

</style>

