<script setup>
</script>

<template>
    <footer class="pt-3">
        <div class="row">
            <div class="col-5">
                <h6 class="text-center mb-5">FOLLOW</h6>
                <div class="d-flex align-items-center justify-content-around">
                    <div class="footer-follow__img-item" v-for="item in [1, 2, 3, 4]"></div>
                </div>
            </div>
            <div class="col-7">
                <div class="d-flex mb-5">
                    <h6 class="ps-3 pe-3">SEARCH</h6>
                    <h6 class="ps-3 pe-3">ABOUT</h6>
                </div>
                <p>Sign up to get the latest on sales, new releases and more …</p>
                <form class="d-flex me-5 mb-2">
                    <input type="email" class="form-control ms-2 me-2" placeholder="Enter your email address...">
                    <button type="submit" class="btn btn-danger ms-2 me-2">Submit</button>
                </form>
                <div>
                    <p class="m-0 p-1">© 2023 Event people</p>
                    <p class="m-0 p-1">Make with love</p>
                </div>

            </div>
        </div>


    </footer>
</template>

<style scoped>
footer {
    background-color: #1b1f23;
    color: #6b6b6b;
}

.footer-follow__img-item {
    background-color: bisque;
    border-radius: 9999%;
    width: 50px;
    height: 50px;
}
</style>