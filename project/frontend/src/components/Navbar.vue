<script setup>
// import { ref } from "vue";

import router from '../router'
import { useApiStore } from '@/stores/ApiStore'
const api = useApiStore()
const login = () => {
    router.push({ name: 'authorization' })
}

</script>

<template>
    <div class="d-flex justify-content-between align-items-center">
        <button type="button" class="btn btn-light" @click="router.push({ name: 'home' })">
            <h3>Event people</h3>
        </button>

        <div class="d-flex justify-content-around align-items-center">
            <button v-if="api.userAuth" type="button" class="btn btn-light">Создать анкету</button>
            <button v-if="api.userAuth" type="button" class="btn btn-light">Аккаунт</button>
            <button v-if="!api.userAuth" type="button" class="btn btn-light" @click="login">Войти</button>
            <button type="button" class="btn btn-light">О нас</button>
            <button type="button" class="btn btn-light">Контакты</button>
            <button v-if="api.userAuth" type="button" class="btn btn-light" @click="api.logout">Выйти</button>
        </div>
    </div>
</template>

<style scoped></style>