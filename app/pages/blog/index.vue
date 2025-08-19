<template>
    <h2 class="text-3xl my-8">Blog Posts</h2>

    <p class="text-base text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo eveniet at
        expedita modi. Ipsa doloribus
        dolores exercitationem quaerat autem odio esse aut repellendus porro dolore? Eaque, in! Perspiciatis possimus
        facilis ipsam illum, laudantium nemo laborum dolorem dolore voluptas impedit dolorum ab praesentium officia
        dolores suscipit autem fugit nihil, exercitationem quia consequatur corporis quos minima ipsa? Nemo, quisquam
        nulla rem esse culpa quis dolore mollitia eius, minima nam maxime aperiam laudantium officia consectetur alias
        architecto.</p>

    <section class="grid md:grid-cols-3 mt-8 gap-10">
        <Blog :blogs="blogs" />
    </section>
</template>

<script setup lang="ts">

const { data: blogs } = await useAsyncData('blogs', () => {
    return queryCollection('blogs').all()
})

</script>