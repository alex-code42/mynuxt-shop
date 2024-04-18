<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="product.image" alt="product thumb" class="mx-auto my-7" />
            </div>
            <div class="p-7">
                <h1 class="font-bold text-4xl my-7">{{ product.title }}</h1>
                <p class=" font-bold text-gray-800 mt-8 mb-8">Price: {{ product.price }} Euros</p>
                <p class="font-bold border-b-2 bm-8 text-gray-500">Product description:</p>
                <p class=" text-gray-500 mt-4">{{ product.description }}</p>


            </div>
        </div>
    

    
    
</div>
</template>

<script setup>
    const { product } = defineProps(['product'])
</script>