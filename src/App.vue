<script lang="ts" setup>
import GlobalHeader from './components/GlobalHeader.vue';
import GlobalFooter from './components/GlobalFooter.vue';
import ThemeButton from './components/ThemeButton.vue';

import './assets/reset.scss';
import './assets/base.scss';

//ダブルタップでズームされるのを防ぐ
const handleDoubleClick = (event: MouseEvent): void => {
  event.preventDefault();
};
</script>

<template>
  <div @dblclick="handleDoubleClick">
    <ThemeButton />
    <GlobalHeader />
    <RouterView />
    <GlobalFooter />
  </div>
</template>
