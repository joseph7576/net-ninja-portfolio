<template>

    <div v-for="blog in blogs" :key="blog.id" class=" bg-white rounded-lg shadow-md overflow-hidden hover:opacity-75">
      
        <NuxtLink :to="blog.path">
            <img :src="`/images/blog/${blog.meta.cover}`" alt="Blog Post Cover Image" class="w-full h-48 object-cover">
        </NuxtLink>

        <div class="p-6">
            <h2 class="text-xl font-bold mb-2">{{ blog.title }}</h2>
            <p class="text-gray-700 mb-4">{{ blog.description }}</p>
            <NuxtLink :to="blog.path"
                class="inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded float-right mb-8">
                Read More
            </NuxtLink>
        </div>

    </div>

</template>

<script setup lang="ts">

const props = defineProps(['blogs'])
</script>