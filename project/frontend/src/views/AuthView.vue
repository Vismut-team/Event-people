<script setup>
import { ref } from "vue"
import LoginWindow from '../components/LoginWindow.vue'
import RegistrationWindow from '../components/RegistrationWindow.vue'

const login_active = ref(true)
const change_window = () => {
    login_active.value = !login_active.value
}
</script>
<template>
    <div class="mt-3 mb-5 d-flex justify-content-center">
        <LoginWindow v-if="login_active" :change_window="change_window" />
        <RegistrationWindow v-else :change_window="change_window" />

    </div>
</template>

<style scoped>
.rounded-container {
    border-radius: 12px;
    border: solid;
    padding: 20px;
}
</style>