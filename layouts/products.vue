<template>
    <div class="container mx-auto p-4">
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/products" class="font-bold">Nuxt Dojo Merch</NuxtLink>
                
            </nav>
        </header>
        <div>
            <slot />
        </div>
        <ul class="flex gap-4 pt-4 pb-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
                    <li><nuxt-link to="/products" class="btn">Products</nuxt-link></li>
                </ul>
        
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
