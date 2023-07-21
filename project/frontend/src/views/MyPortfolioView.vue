<script setup>
import { useApiStore } from '@/stores/ApiStore'
import { reactive, computed } from "vue"

const api = useApiStore()

const userDataFromApi = api.getUserFullData()

const userData = reactive(
    {
        firstName: userDataFromApi.firstName,
        lastName: userDataFromApi.lastName,
        phoneNumber: userDataFromApi.phoneNumber,
        email: userDataFromApi.email,
        city: userDataFromApi.city,
    }
)
const cityList = api.getCityList()

function changeUserData() {
    console.log("changed")
    if (userData.firstName && userData.lastName && userData.phoneNumber && userData.city) {
        // TODO refactor this function (api)
        api.updateUserData()
    }
}
</script>
<template>
    <div class="portfolio-main row pb-5">
        <div class=" col-3">
            <div id="list-example" class="portfolio-main__toolbar list-group">
                <a class="list-group-item list-group-item-action" href="#list-item-1">Профиль</a>
                <a class="list-group-item list-group-item-action" href="#list-item-2">Личные данные</a>
                <a class="list-group-item list-group-item-action" href="#list-item-3">Скилы</a>
                <a class="list-group-item list-group-item-action" href="#list-item-4">Отзывы</a>
                <a class="list-group-item list-group-item-action" href="#list-item-5">Соцсети</a>
                <a class="list-group-item list-group-item-action" href="#list-item-6">Уведомления</a>
            </div>
        </div>
        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="col-9 scrollspy-example"
            tabindex="0">

            <div id="list-item-1" class="mb-5">
                <hr>
                <h4 class="text-center">Так участники сообщества видят ваш профиль</h4>
                <hr>
                <div>
                    <div class="row">
                        <div class="col-2">
                            <button class="btn btn-outline-light ">
                                <img src="/user_standart_avatar.png" class="portfolio-main__avatar-preview" alt="avatar"
                                    @mouseover="style">
                            </button>
                        </div>
                        <div class="col-10">
                            <h5>User First Name</h5>
                            <h5>User Last Name</h5>
                            <h5>User Profession</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div id="list-item-2" class="mb-5">
                <hr>
                <h4 class="text-center">Личные данные</h4>
                <hr>
                <form @submit.prevent="changeUserData" class="ps-4 pe-4">
                    <div class="input-group mb-3">
                        <span class="input-group-text">Имя</span>
                        <input v-model="userData.firstName" type="text" class="form-control" placeholder="Имя"
                            aria-label="Username">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Фамилия</span>
                        <input v-model="userData.lastName" type="text" class="form-control" placeholder="Фамилия"
                            aria-label="Username">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Номер телефона</span>
                        <input v-model="userData.phoneNumber" type="tel" class="form-control" placeholder="+7-***-***-**-**"
                            aria-label="Username">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Электронная почта</span>
                        <input v-model="userData.email" type="email" class="form-control" placeholder="example@mail.com"
                            aria-label="Username">
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text">Город</span>
                        <!-- <input v-model="userData.city" type="text" class="form-control"> -->
                        <select class="form-select" aria-label="Default select example">
                            <option v-for="city in cityList" :value="city.id" :key="city.id"
                                :selected="city.id === userData.city.id">{{ city.title }}</option>

                            <!-- <option selected>{{ userData.city.title }}</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option> -->
                        </select>
                    </div>

                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" checked>
                        <label class="form-check-label">Какой-то вариант 1</label>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" checked>
                        <label class="form-check-label">Какой-то вариант 2</label>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" checked>
                        <label class="form-check-label">Какой-то вариант 3</label>
                    </div>
                    <div class="d-grid gap-2 mt-2">
                        <button type="submit" class="btn btn-outline-success">Обновить</button>
                    </div>
                </form>
            </div>
            <div id="list-item-3" class="mb-5">
                <hr>
                <h4 class="text-center">Скилы</h4>
                <hr>
                <div class="text-center">
                    <h5>У вас еще нет скилов</h5>
                    <button class="btn btn-outline-secondary">Вы можете их добавить</button>
                </div>
            </div>
            <div id="list-item-4" class="mb-5">
                <hr>
                <h4 class="text-center">Отзывы</h4>
                <hr>
                <div>
                    <h5 class="text-center">У вас еще нет отзывов</h5>
                </div>
            </div>
            <div id="list-item-5" class="mb-5">
                <hr>
                <h4 class="text-center">Соцсети</h4>
                <hr>
                <div>
                    <div class="input-group mb-3">
                        <img src="/icon-vk.png" width="50px" alt="">
                        <input type="text" class="form-control" placeholder="Профиль ВКонтакте" aria-label="Username">
                    </div>
                    <div class="input-group mb-3">
                        <img src="/icon-telegram.png" width="50px" alt="">
                        <input type="text" class="form-control" placeholder="Профиль В Телеграм" aria-label="Username">
                    </div>
                </div>
            </div>
            <div id="list-item-6" class="mb-5">
                <h4 class="text-center">Уведомления</h4>
                <hr>
                <div>
                    <p class="text-center">У вас нет уведомлений</p>
                </div>
            </div>



        </div>
    </div>
</template>

<style scoped>
.portfolio-main {
    max-width: 1000px;
    margin: auto;
}

.portfolio-main__toolbar {
    position: fixed;
    z-index: 1;
}

.portfolio-main__toolbar a {
    padding-left: 30px;
    padding-right: 30px;
}

.portfolio-main__avatar-preview {
    border-radius: 50%;
    width: 80px;
    height: 80px;
}
</style>