<template>
    <div id="start">
        <audio src="src/assets/introedit.wav" class="af"></audio>
    </div>
</template>

<script setup>
import { onMounted, } from 'vue'

onMounted(function () {
    let bgm = document.querySelector("#start").querySelector("audio")
    bgm.play()
    console.log(this);
})
</script>

<style>
    
</style>