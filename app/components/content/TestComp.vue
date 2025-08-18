<template>
    <div>
        <h1 class="text-5xl text-red-700 my-5">Holy Shit!</h1>
        <p class="text-base my-1 font-bold">{{ title }}</p>
        <h2 class="text-3xl font-bold my-2"> AND THIS IS SLOT!!! </h2>
        <p class="text-base">
            <slot />
        </p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: 'HOHOHOHOHO'
    }
})
</script>