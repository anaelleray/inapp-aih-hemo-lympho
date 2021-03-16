<template>
    <div class="content-page">
        <keep-alive>
            <component v-bind:is="currentComponent"></component>
        </keep-alive>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import DataService from "@/service/DataService"
import CriteresGelfScore from "@/components/scores/CriteresGelfScore.vue"
import FlipiScore from "@/components/scores/FlipiScore.vue"
import MipiScore from "@/components/scores/MipiScore.vue"
export default Vue.extend({

    components: {
        CriteresGelfScore,
        FlipiScore,
        MipiScore
    },

    data()
    {
        return {
            currentComponent: null,
        }
    },

    mounted()
    {
        const slug = this.$route.params.slug
        DataService.load()
            .then(() => {
                const cat = this.searchBySlug(DataService.$data.tree, slug)
                
                if (cat === null) {
                    this.notFound = true
                } else {
                    this.currentComponent = cat.component
                }
            }).catch(e => {
                console.log(e)
            })
    },
    
    methods: {
        searchBySlug(dataJsonTree: Array<any>, slug: string) {
            for (let i in dataJsonTree) {
                const mainCategory = dataJsonTree[i]
                for (let j in mainCategory.children) {
                    const subCategory = mainCategory.children[j]
                    if (subCategory.slug === slug) {
                        return subCategory
                    }
                }
            }
            return null
        }
    }

})
</script>