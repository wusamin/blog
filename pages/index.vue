<script setup lang="ts"></script>

<template>
  <ContentList
    path="/article"
    :query="{ sort: [{ date: -1 }] }"
    v-slot="{ list }"
  >
    <div v-for="article in list" :key="article._path">
      <NuxtLink :to="article._path">
        <h3 class="text-2xl">{{ article.title }}</h3>
      </NuxtLink>
      <p class="text-lg">{{ article.description }}</p>
    </div>
  </ContentList>
</template>
