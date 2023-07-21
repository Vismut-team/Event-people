<script setup>
import { ref, watch, computed, onMounted } from "vue"
// import router from '../router'
import { useApiStore } from '@/stores/ApiStore'
const api = useApiStore()

const services_from_backend = [
    {
        id: 1,
        title: "lorem1", items: [
            { title: "lorem1-item1", descriptions: "Lorem ipsum dolor sit amet consVel architecto ullam culpa conseate illum modi placeat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 100 },
            { title: "lorem1-item2", descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing eliti placeat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 561 },
            { title: "lorem1-item3", descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel architecto ullam culpa consectetur maiores nisi harum voluptate illum modi placeat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 500 },
            { title: "lorem1-item4", descriptions: "Lorem ipsum dolor sit s nisi harum voluptate illum modi placeat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 45191 },
        ]
    },
    {
        id: 2,
        title: "lorem2", items: [
            { title: "lorem2-item1", descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel architecto ullam culpa consectetur maiores nisi harum voluptate illum modi placeat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 1269 },
        ]
    },
    {
        id: 3,
        title: "lorem3", items: [
            { title: "lorem3-item1", descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel architecto ullam culpa consectetur maiores nisi harum voluptate illum modi placeat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 4300 },
            { title: "lorem3-item2", descriptions: "Lorem ipsum dolor sit maiores nisi harum voluptate illum modi placeat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 999 },
        ]
    },
    {
        id: 4,
        title: "lorem4", items: [
            { title: "lorem4-item1", descriptions: "Lorem ipsum dolor sit consectetur maiores nisi harum voluptate illum modi placeat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 9999 },
            { title: "lorem4-item2", descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel architecto ullam culpa consectetur maiores nisi harum voluptate illum modi placeat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 12500 },
            { title: "lorem4-item3", descriptions: "Lorem ipsum dolor sit amet consectetur, illum modi placeat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 1423 },
        ]
    },
    {
        id: 5,
        title: "lorem5", items: [
            { title: "lorem5-item1", descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel architecto ullam culpa consectetur maiores nisi harum voluptate illum modi placeat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 5500 },
            { title: "lorem5-item2", descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel architecto ullam culpa consectetur maiores nisi harum voluptate illum modi placeat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 400 },
            { title: "lorem5-item3", descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit., tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 600 },
            { title: "lorem5-item4", descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel architecto ullam culpa consectetur maiores nisi harum voe omnis? Libero eius est hic magnam repellendus?", price: 50000 },
            { title: "lorem5-item5", descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel architecto aceat, tenetur nulla sapiente omnis? Libero eius est hic magnam repellendus?", price: 5000 },
        ]
    },
]
const serviceWindow = ref({})
function changeServiceWindow(service) {
    serviceWindow.value = service
}

onMounted(() => {
    if (services_from_backend.length > 0) {
        changeServiceWindow(services_from_backend[0])
    }
})
</script>
<template>
    <div>
        <h1 class="text-center">Страница пользователя {{ $route.params.id }}</h1>
        <div class="row">
            <div class="col-7">
                <p>Горько! в Перми—Организатор</p>
                <h4>Оксана Еремина</h4>
                <div class="ps-1 pe-1 d-flex justify-content-around">
                    <button class="btn btn-light">Услуги</button>
                    <button class="btn btn-light">Портфолио</button>
                    <button class="btn btn-light">Описание</button>
                    <button class="btn btn-light">Альбомы</button>
                </div>
                <div class="border border-2 border-secondary rounded m-3 p-1">


                    <h4 class="text-center">Специализация и услуги</h4>
                    <div class="p-3 d-flex flex-wrap justify-content-between">
                        <button v-for="service in services_from_backend" :key="service.id"
                            @click="changeServiceWindow(service)" class="btn btn-outline-info">lorem</button>
                    </div>
                    <div class=" mt-3">
                        <!-- <h3 class="text-center">#TODO: Должны меняться от кнопки</h3> -->
                        <div class="p-3" v-if="serviceWindow">
                            <div v-for="service_item in serviceWindow.items">
                                <div class="d-flex justify-content-between">
                                    <h5>{{ service_item.title }}</h5>
                                    <h5>{{ service_item.price }}</h5>
                                </div>
                                <p class="pe-5"><small>{{ service_item.descriptions }}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-5">
                <!-- <div>
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
                </div> -->
            </div>
        </div>
    </div>
</template>

<style scoped></style>