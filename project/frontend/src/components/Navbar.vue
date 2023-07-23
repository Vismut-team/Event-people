<script setup>
// import { ref } from "vue";

import { reactive } from 'vue';
import router from '../router'
import { useApiStore } from '@/stores/ApiStore'

const api = useApiStore()

const notificationWindow = reactive({
    active: false,
    items: [
        { id: 1, title: "Notification1", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit" },
        { id: 2, title: "Notification2", text: "Lorem ipsum dolor sit ametelit" },
        { id: 3, title: "Notification3", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, consectetur adipisicing elit" },
        { id: 4, title: "Notification4", text: "Lorem ipsum dolor" },
    ]
})

function notificationWindowOpenClose() {
    //#TODO: refactor this function:
    // get information from server
    // add animation (when user have unread notification)
    console.log('Open-close notifiacotion window')
    notificationWindow.active = !notificationWindow.active
}
</script>

<template>
    <div>
        <nav class="navbar nav-main-container nav-main-container navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid d-flex justify-content-between">
                <button type="button" class="btn btn-outline-dark" @click="router.push({ name: 'home' })">
                    <h3>Event people</h3>
                </button>
                <div>
                    <button v-if="api.userAuth" type="button" class="btn btn-outline-dark nav__button"
                        @click="router.push({ name: 'my-portfolio' })">Аккаунт</button>
                    <button v-if="api.userAuth" id="notificationDropdown" type="button" class="btn"
                        :class="[notificationWindow.active ? 'btn btn-success' : 'btn btn-outline-success']"
                        @click="notificationWindowOpenClose">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 2.1c4.02 0 6.9 3.28 6.9 7.53v1.6c0 .23.2.53.72 1.08l.27.27c1.08 1.1 1.51 1.73 1.51 2.75 0 .44-.05.79-.27 1.2-.45.88-1.42 1.37-2.87 1.37h-1.9c-.64 2.33-2.14 3.6-4.36 3.6-2.25 0-3.75-1.3-4.37-3.67l.02.07H5.74c-1.5 0-2.47-.5-2.9-1.41-.2-.4-.24-.72-.24-1.16 0-1.02.43-1.65 1.51-2.75l.27-.27c.53-.55.72-.85.72-1.08v-1.6C5.1 5.38 7.99 2.1 12 2.1Zm2.47 15.8H9.53c.46 1.25 1.25 1.8 2.47 1.8 1.22 0 2.01-.55 2.47-1.8ZM12 3.9c-2.96 0-5.1 2.43-5.1 5.73v1.6c0 .85-.39 1.46-1.23 2.33l-.28.29c-.75.75-.99 1.11-.99 1.48 0 .19.01.29.06.38.1.22.43.39 1.28.39h12.52c.82 0 1.16-.17 1.28-.4.05-.1.06-.2.06-.37 0-.37-.24-.73-.99-1.48l-.28-.29c-.84-.87-1.23-1.48-1.23-2.33v-1.6c0-3.3-2.13-5.73-5.1-5.73Z">
                            </path>
                        </svg>
                    </button>
                    <button v-if="!api.userAuth" type="button" class="btn btn-outline-success nav__button"
                        @click="router.push({ name: 'authorization' })">Войти</button>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>


                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <button type="button" class="btn btn-outline-dark nav__button"
                                    @click="router.push({ name: 'about' })">О
                                    нас</button>
                            </li>
                            <li class="nav-item">
                                <button type="button" class="btn btn-outline-dark nav__button"
                                    @click="router.push({ name: 'contacts' })">Контакты</button>
                            </li>
                            <li class="nav-item">
                                <button v-if="api.userAuth" type="button" class="btn btn-outline-dark nav__button"
                                    @click="api.logout">Выйти</button>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
        <!-- Notification modal window -->
        <div class="nav-notification-window p-2 d-flex flex-column" v-if="notificationWindow.active"
            v-click-away="notificationWindowOpenClose">
            <h3 class="text-center">Уведомления</h3>
            <hr>
            <div class="nav-notification-window__items">
                <div v-for="notification in notificationWindow.items" :key="notification.id">
                    <h6 class="text-center">{{ notification.title }}</h6>
                    <p>{{ notification.text }}</p>
                </div>
            </div>
            <div class="mt-auto text-center" v-if="notificationWindow.items.length > 0">
                <button class="btn">
                    <h6>Показать все</h6>
                </button>
            </div>
            <div v-else>
                <h6 class="text-center mt-5">Уведомлений нет</h6>
            </div>
        </div>
    </div>
</template>





<style scoped>
.nav-main-container {
    /* background-color: rgba(236, 123, 10, 0.841); */
    padding-left: 10px;
    padding-right: 10px;
    border: solid 1px #e9f3e1;
}

.nav__button {
    width: 100px;
}

.nav-notification-window {
    position: fixed;
    right: 0;
    top: 60px;
    height: 300px;
    max-width: 400px;
    min-width: 250px;
    background-color: rgba(236, 123, 10, 0.841);
    border-radius: 0% 0% 10% 10%;
    border: solid 3px #66d908;
    z-index: 99;
}

.nav-notification-window__items {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
    overflow-y: scroll;
    overflow-x: hidden;
}

.nav-notification-window__items::-webkit-scrollbar-track {
    border-radius: 8px;
}

.nav-notification-window__items::-webkit-scrollbar {
    width: 6px;
}

.nav-notification-window__items::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: transparent;
}

.nav-notification-window__items:hover::-webkit-scrollbar-thumb {
    background: #970707;
}
</style>