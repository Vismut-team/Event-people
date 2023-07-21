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
    form_data.errors = []
    if (!form_data.username || !form_data.password) {
        form_data.errors.push("Заполните все поля формы")
        return false
    }
    api.login(form_data.username, form_data.password, form_data.remember_me)

}
</script>
<template>
    <div class="rounded-container p-5">
        <h5 class="text-center">Вход на сайт Event people</h5>

        <div class="d-flex align-items-center flex-column justify-content-center">
            <div class="text-center text-danger">
                <hr>
                <h5 v-for="error in form_data.errors">{{ error }}</h5>
                <hr>
            </div>

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
                    <button class="btn btn-success" type="submit">Войти</button>
                </div>
            </form>
        </div>
        <h5 class="align-items-center text-center mt-4">Если у вас еще нет аккаунта, вы можете <button
                class="btn btn-outline-info" @click="change_window">зарегистрироваться</button></h5>
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