<template>
    <div class="card text-center">
    <img :src="product.image" alt="product thumb" class="thumb" />

    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
    <p class="btn my-4">See details</p>
    </NuxtLink>
</div>
</template>

<script setup>
    const { product } = defineProps(['product'])
</script>

<style scoped>
    .card {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
    }
    .thumb {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    .btn {
        background-color: #eab308;
        color: white;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    .btn:hover {
        background-color: #ca8a04;
    }

</style>