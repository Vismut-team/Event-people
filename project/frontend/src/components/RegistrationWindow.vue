<script setup>

import axios from "axios"
import router from '../router'
import { reactive, } from "vue"
import { useApiStore } from '@/stores/ApiStore'

const props = defineProps({
    change_window: Function,
})

const api = useApiStore()

const form_data = reactive({
    username: null,
    email: null,
    password: null,
    password2: null,
    errors: [],
})

function registration() {
    console.log("registration")
}
</script>
<template>
    <div class="rounded-container m-5">
        <div class="text-center">
            <h3>После регистрации вы получите доступ ко всем возможностям сайта</h3>
            <h5 class="align-items-center">Если у вас уже есть аккаунт вы можете <button class="btn btn-outline-info"
                    @click="change_window">войти</button></h5>

        </div>


        <div class="d-flex align-items-center flex-column justify-content-center">
            <h5 class="text-danger" v-for="error in form_data.errors">{{ error }}</h5>

            <form @submit.prevent="registration">
                <div class="mb-3">
                    <input v-model="form_data.username" type="text" class="form-control" placeholder="Имя пользователя">
                </div>
                <div class="mb-3">
                    <input v-model="form_data.email" type="email" class="form-control" placeholder="Почта">
                </div>
                <div class="mb-3">
                    <input v-model="form_data.password" type="password" class="form-control" placeholder="Пароль">
                </div>
                <div class="mb-3">
                    <input v-model="form_data.password2" type="password" class="form-control" placeholder="Пароль">
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-outline-success" type="submit">Регистрация</button>
                </div>
            </form>
        </div>

    </div>
</template>

<style scoped>
.rounded-container {
    border-radius: 12px;
    border: solid;
    padding: 20px;
}
</style>