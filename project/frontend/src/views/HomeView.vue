<script setup>
import router from '../router'

// import axios from "axios"
// import { reactive, onMounted, ref, watch, computed } from "vue";
// import { useApiStore } from "../stores/ApiStore";
// const api = useApiStore()
</script>

<template>
    <div class="home-main">
        <div class="text-center">
            <h3 class="mb-5">Самые популярные авторы</h3>
            <div class="list-group">
                <button class="btn list-group-item list-group-item-action"
                    @click="router.push({ name: 'portfolio', params: { id: 1 } })">First</button>
                <button class="btn list-group-item list-group-item-action"
                    @click="router.push({ name: 'portfolio', params: { id: 2 } })">Second</button>
                <button class="btn list-group-item list-group-item-action"
                    @click="router.push({ name: 'portfolio', params: { id: 3 } })">Third</button>
                <button class="btn list-group-item list-group-item-action"
                    @click="router.push({ name: 'portfolio', params: { id: 4 } })">Fourth</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.home-main {
    height: 400px;
}
</style>
