<template>
    <section>
        <h1 class="text-5xl font-bold mt-20">👋 Hello, I'm Yousef Hosseini</h1>
        <p class="text-base text-gray-900 p-2 italic">Backend Developer at Home</p>
    </section>

    <section class="flex flex-col md:flex-row">
        <div class="md:w-3/4">
            <h2 class="text-3xl font-bold mt-8">About Me</h2>
            <p class="text-lg py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aut aspernatur laudantium voluptates amet
                alias
                eum quisquam nobis dolore delectus! Quia sed optio harum incidunt iure modi eveniet officiis aliquid
                perspiciatis, reprehenderit exercitationem expedita officia atque repellat eius facere earum sint
                quaerat
                doloremque error ea! Harum ullam natus eum voluptatibus quibusdam porro, cumque fugit, quam ad tempora
                fuga,
                consectetur quisquam nisi! Consequuntur fuga minima inventore similique, rem placeat. Labore temporibus,
                debitis voluptate esse nulla hic id accusamus optio vel deserunt iure assumenda sapiente. Perspiciatis,
                eaque. Nisi magnam magni hic aperiam odio, facilis unde nemo ea ut, illum veniam dolore repellendus
                necessitatibus, similique iste asperiores. Id placeat cupiditate totam sapiente quidem accusamus.
                Temporibus
                eum voluptas reiciendis delectus ipsa laborum dolore! Nihil magnam non voluptate, perspiciatis totam ea
                placeat debitis dolor fuga recusandae accusantium doloremque adipisci quibusdam odio tempore qui
                deserunt
                vitae dignissimos omnis explicabo sit. Voluptatem accusantium non sit velit sunt.
            </p>
        </div>

        <img src="assets/images/hero.jpg" alt="Hero Image" class="w-1/2 md:max-w-sm p-8 mx-auto">

    </section>

    <section>
        <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>

        <div class="grid md:grid-cols-3 mt-8 gap-10">
            <Blog :blogs="blogs" />
        </div>
    </section>
</template>

<script setup lang="ts">

const { data: blogs } = await useAsyncData('latest-blogs', () => {
    return queryCollection('blogs').limit(3).all()
})
</script>