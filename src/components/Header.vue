<template>
    <div class="header">
        <div>
            <a v-if="this.url" href="cmd://webview-close"><font-awsome-icon class="close" :icon="['far','times-circle']"/></a> 
            <a v-if="!this.url" href=""><font-awsome-icon class="close" :icon="['fas','chevron-left']"/></a>
        </div>
        <div>
            <img class="AIH-logo" src="../assets/AIH-logo.png"  alt="Association des Internes en Hématologie">
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({

    data: () => ({
        url: Boolean ,
    }),

    methods:{
    },

    watch: {
        '$route'(to, from){
            to.path.includes("score") ? this.url = false: this.url = true;
        }
    },

    beforeMount()
    {
        window.location.href.includes('score') ? this.url = false : this.url = true;    
    }
})

</script>

<style>

.close{
    color:#d50c48;
    font-size:20px;
}

.AIH-logo{
    height: 40px;
    width: auto;
}

.header {
    padding-right: 50px;
    padding-left: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    background-color:#f1f1f6;
    border-bottom: 0px solid #1C6EA4;
    border-radius: 0px 0px 20px 20px;
    -webkit-box-shadow: 0px 6px 13px -1px rgba(0,0,0,0.75);
    border-radius: 0px 0px 15px 15px;
    box-shadow: 0px 6px 15px -12px rgba(0,0,0,0.75);       
}
</style>
