<template>
    <div class="mt-7 max-w-sm mx-auto text-center card p-7">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p>Ooops</p>
        <p class="mt-7 text-2xl font-bold">{{ error.message }}</p>
        <p class="mt-7 text-xl">{{ error.description }}</p>
        <button class="mt-7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="handleClearError">Go back</button>

    </div>
</template>

<script setup>
    defineProps(['error'])

    const handleClearError = () => clearError({redirect: '/'})
</script>

<style scoped>

</style>