<template>
    <title>{{title}}</title>
    <div id="left">
        
    </div>
    <div id="min"></div>
    <div id="right"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App',
    data() {
        return {
            title : "暗黑破坏神模拟器"
        }
    },
    components: {
        

    }
})
</script>

<style>
    body {
        padding: 0;
        margin: 0;
        background-color: #222;
    }
</style>
