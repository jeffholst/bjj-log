<script setup>
import DefaultTheme from "vitepress/theme"
import { useRoute } from "vitepress"
import { computed } from "vue"

const { Layout } = DefaultTheme
const route = useRoute()
const isPost = computed(() => route.path.startsWith("/posts/"))
</script>

<template>
  <Layout>
    <template #doc-before>
      <div v-if="isPost">
        <h1>Post Header</h1>
      </div>
    </template>
  </Layout>
</template>
