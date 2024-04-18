/products/:id

<template>
    <div>
        <ProductDetails :product="product" />
    
        </div>
</template>

<script setup>


const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/'+id


definePageMeta({
    layout: 'products',
})
const {data: product } = await useFetch(uri, {key: id} )
console.log(product)

if (!product.value) {
    throw createError({
        statusCode: 404,
        message: 'Product not found :-(',
        fatal: true
    })
}

</script>

<style scoped>

</style>