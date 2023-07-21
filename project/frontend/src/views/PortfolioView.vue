<script setup>
import { ref, watch, computed } from "vue"
// import router from '../router'
import { useApiStore } from '@/stores/ApiStore'
const api = useApiStore()

const services = ref([
    {
        title: "lorem1", items: [
            { title: "lorem1-item1", descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel architecto ullam culpa consectetur maiores nisi harum voluptate illum modi placeat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 500 },
            { title: "lorem1-item2", descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel architecto ullam culpa consectetur maiores nisi harum voluptate illum modi placeat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 500 },
        ]
    },
    {
        title: "lorem2", items: [
            { title: "lorem2-item1", descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel architecto ullam culpa consectetur maiores nisi harum voluptate illum modi placeat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 500 },
            { title: "lorem2-item2", descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel architecto ullam culpa consectetur maiores nisi harum voluptate illum modi placeat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 500 },
        ]
    },
    {
        title: "lorem3", items: [
            { title: "lorem3-item1", descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel architecto ullam culpa consectetur maiores nisi harum voluptate illum modi placeat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 500 },
            { title: "lorem3-item2", descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel architecto ullam culpa consectetur maiores nisi harum voluptate illum modi placeat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 500 },
        ]
    },
    {
        title: "lorem4", items: [
            { title: "lorem4-item1", descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel architecto ullam culpa consectetur maiores nisi harum voluptate illum modi placeat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 500 },
            { title: "lorem4-item2", descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel architecto ullam culpa consectetur maiores nisi harum voluptate illum modi placeat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 500 },
        ]
    },
    {
        title: "lorem5", items: [
            { title: "lorem5-item1", descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel architecto ullam culpa consectetur maiores nisi harum voluptate illum modi placeat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 500 },
            { title: "lorem5-item2", descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel architecto ullam culpa consectetur maiores nisi harum voluptate illum modi placeat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 500 },
        ]
    },
])
</script>
<template>
    <div>
        <h1 class="text-center">Страница пользователя {{ $route.params.id }}</h1>
        <div class="row">
            <div class="col-7">
                <p>Горько! в Перми—Организатор</p>
                <h4>Оксана Еремина</h4>
                <div class="ps-1 pe-1 d-flex justify-content-around">
                    <button class="btn btn-light">Специализация и услуги</button>
                    <button class="btn btn-light">Портфолио</button>
                    <button class="btn btn-light">Описание</button>
                    <button class="btn btn-light">Альбомы</button>
                </div>
                <hr>
                <h6 class="text-center">Специализация и услуги</h6>
                <div class="p-3 d-flex flex-wrap justify-content-between">
                    <button class="btn btn-outline-info">lorem</button>
                    <button class="btn btn-outline-info">lorem</button>
                    <button class="btn btn-outline-info">lorem</button>
                    <button class="btn btn-outline-info">lorem</button>
                    <button class="btn btn-outline-info">lorem</button>
                    <button class="btn btn-outline-info">lorem</button>
                </div>
                <div class=" mt-3">
                    <h3 class="text-center">#TODO: Должны меняться от кнопки</h3>
                    <div class="p-3">
                        <div class="d-flex justify-content-between mb-3">
                            <h5>Свадьба под ключ, бюджет</h5>
                            <h5>от 50 000 ₽</h5>
                        </div>
                        <p>Камерная свадьба - уютное торжество, рассчитанное на 20 и меньшее количество гостей.
                            Предоставляем: - банкетный зал - размещение в коттеджах - несколько площадок для проведения
                            церемонии бракосочетания - оформление свадьбы Арендная плата за ресторан - 10 000 (без банкета)
                            + клининг</p>
                    </div>
                </div>
            </div>
            <div class="col-5">
                <!-- <div>
                    <div class="row">
                        <div class="col-2">
                            <button class="btn btn-outline-light ">
                                <img src="user_standart_avatar.png" class="portfolio-main__avatar-preview" alt="avatar"
                                    @mouseover="style">
                            </button>
                        </div>
                        <div class="col-10">
                            <h5>User First Name</h5>
                            <h5>User Last Name</h5>
                            <h5>User Profession</h5>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>