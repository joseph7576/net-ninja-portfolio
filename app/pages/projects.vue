<template>
    <h1 class="text-5xl font-bold my-8">Projects</h1>
    <p class="text-lg mb-8">Here are some of my projects on GitHub.</p>

    <section class="grid grid-cols-2 gap-10">
        <div v-for="project in data?.viewer.repositories.nodes" :key="project.id"
            class="p-8 border-4 my-4 rounded-lg hover:bg-gray-50">
            <a :href="project.url" target="_blank">
                <h2 class=" text-2xl text-indigo-800 font-semibold mb-2 hover:underline">{{ project.name }}</h2>
            </a>

            <p>{{ project.description }}</p>

            <div class="mt-4">
                <Icon name="mdi:star-shooting" size="1.1rem" class="text-indigo-700" /> Stars: {{
                    project.stargazers.totalCount }}
                <Icon name="mdi:source-fork" size="1.1rem" class="text-indigo-700" /> Forks: {{ project.forks.totalCount
                }}
                <Icon name="mdi:eye" size="1.1rem" class="text-indigo-700" /> Watchers: {{ project.watchers.totalCount
                }}
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const query = gql`
{
  viewer {
    login
    repositories(first: 8, orderBy: {field: CREATED_AT, direction: DESC}) {
      totalCount
      nodes {
        id
        name
        createdAt
        description
        url
        forks {
          totalCount
        }
        watchers {
          totalCount
        }
        stargazers {
          totalCount
        }
      }
    }
  }
}
`

const { data, error } = await useAsyncQuery(query);
</script>