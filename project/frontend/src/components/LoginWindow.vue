<script setup>

import axios from "axios"
import router from '../router'
import { reactive, } from "vue"

import { useApiStore } from '@/stores/ApiStore'
const api = useApiStore()
const props = defineProps({
    change_window: Function,
})

const form_data = reactive({
    username: null,
    password: null,
    remember_me: true,
    errors: [],
})

function login() {
    console.log("login")

}
</script>
<template>
    <div class="rounded-container m-5">
        <div class="mb-4 text-center">
            <h2>Вы не зарегистрированы</h2>
            <p>Чтобы воспользоваться мессенджером вам нужно войти</p>
        </div>


        <div class="d-flex align-items-center flex-column justify-content-center">
            <h5 v-for="error in form_data.errors">{{ error }}</h5>

            <form @submit.prevent="login">
                <div class="mb-3">
                    <input v-model="form_data.username" type="text" class="form-control" placeholder="Имя пользователя">
                </div>
                <div class="mb-3">

                    <input v-model="form_data.password" type="password" class="form-control" placeholder="Пароль">
                </div>
                <div class="mb-3 d-flex justify-content-center align-items-center">
                    <input type="checkbox" class="form-check-input m-0 me-1" v-model="form_data.remember_me">
                    <span>Запомнить меня</span>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-outline-success" type="submit">Войти</button>
                </div>
            </form>
        </div>

        <div class="mt-3">
            <p class="mt-2 text-center">После регистрации вы получите доступ ко всем возможностям сайта</p>

            <div class="d-grid gap-2">
                <button class="btn btn-outline-info" type="button" @click="change_window">Зарегистрироваться</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-icon {
    max-width: 100px;
    border-radius: 50%;
}

.rounded-container {
    border-radius: 12px;
    border: solid;
    padding: 20px;
}
</style>