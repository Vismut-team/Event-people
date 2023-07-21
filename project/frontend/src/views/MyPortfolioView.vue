<script setup>
// import { ref, watch, computed } from "vue"
// import router from '../router'
import { useApiStore } from '@/stores/ApiStore'
const api = useApiStore()


</script>
<template>
    <div class="portfolio-main">
        <h1 class="text-center">Мой профиль</h1>
    </div>
</template>

<style scoped>
.portfolio-main{
    height: 400px;
}
</style>