<script setup>
import { ref, watch, computed } from "vue"
import router from '../router'

import LoginWindow from '../components/LoginWindow.vue'
import RegistrationWindow from '../components/RegistrationWindow.vue'
import { useApiStore } from '@/stores/ApiStore'

const api = useApiStore()
const login_active = ref(true)
const change_window = () => {
    login_active.value = !login_active.value
}
const auth = computed(() => { return api.userAuth })
watch(auth, () => {
    if (auth.value === true) {
        router.push({ name: 'home' })
    }
})

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