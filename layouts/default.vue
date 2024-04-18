<template>
    <div class="container mx-auto p-4">
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">
                    <li><NuxtLink to="/">DOJO SHOP</NuxtLink></li>
            </NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><nuxt-link to="/products" class="btn">Products</nuxt-link></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>

                </ul>
            </nav>
        </header>
        <div class="container mx-auto ">
            <slot />
        </div>
        
    </div>
</template>

<style scoped>
   
    li {
        display: inline;
        margin-right: 10px;
        
    }
    .router-link-exact-active {
        color: #a3a3a3;
    }

</style>
