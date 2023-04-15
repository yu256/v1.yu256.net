<script lang="ts" setup>
import BlogPost from '@/components/BlogPost.vue';
</script>

<template>
  <main>
    <div class="blog">
      <BlogPost />
    </div>
  </main>
</template>

<style scoped lang="scss">
.blog {
  overflow: clip;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
