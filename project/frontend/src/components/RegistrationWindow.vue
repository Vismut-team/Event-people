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
    phone_number: null,
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
        <h5 class="text-center">После регистрации вы получите доступ ко всем возможностям сайта</h5>

        <div class="d-flex align-items-center flex-column justify-content-center">
            <div class="text-center text-danger">
                <hr>
                <h5 v-for="error in form_data.errors">{{ error }}</h5>
                <hr>
            </div>
            <form @submit.prevent="registration">
                <div class="mb-3">
                    <input v-model="form_data.username" type="text" class="form-control" placeholder="Имя пользователя">
                </div>
                <div class="mb-3">
                    <input v-model="form_data.phone_number" type="tel" class="form-control" id="phone" name="phone"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Номер телефона">
                </div>
                <div class="mb-3">
                    <input v-model="form_data.password" type="password" class="form-control" placeholder="Пароль">
                </div>
                <div class="mb-3">
                    <input v-model="form_data.password2" type="password" class="form-control" placeholder="Пароль">
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-success" type="submit">Регистрация</button>
                </div>
            </form>
            <h5 class="align-items-center text-center mt-4">Если у вас уже есть аккаунт вы можете <button
                    class="btn btn-outline-info" @click="change_window">войти</button></h5>
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