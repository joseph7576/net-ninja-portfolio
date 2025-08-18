<template>
    <template v-if="page">
        <ContentRenderer :value="page" class="prose" />
    </template>
    <template v-else>
        <div class="empty-page">
            <h1 class="text-5xl font-bold mt-8">Page Not Found</h1>
            <p class="text-base text-gray-900 mt-4">Oops! The content you're looking for doesn't exist.</p>
            <NuxtLink to="/" class="">Go back home</NuxtLink>
        </div>
    </template>
</template>

<script lang="ts" setup>

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection('content').path(route.path).first()
})

useSeoMeta({
    title: page.value?.title,
    description: page.value?.description
})
</script>