<template>
    <div class="subList"></div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header.vue"
import DataService from "@/service/DataService"


export default Vue.extend({
    components: {Header, /*ListPage*/}
    data() {
    },
    methods: {
        getSubList()
    },
    mounted()
    {
        DataService.load()
            .then(() => {
                //getSubList => for id list => get children list
            }).catch(e => {
                console.log(e)
            })
    }
})
</script>

<style>
    /*style*/
</style>