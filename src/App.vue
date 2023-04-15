<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import GlobalHeader from './components/GlobalHeader.vue';
import GlobalFooter from './components/GlobalFooter.vue';
import ThemeButton from './components/ThemeButton.vue';

const theme = ref('light');
const onThemeChanged = (newTheme: string) => {
  theme.value = newTheme;
};
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const isDarkMode = ref(darkModeMediaQuery.matches);
watchEffect(() => {
  theme.value = isDarkMode.value ? 'dark' : 'light';
});
watchEffect(() => {
  document.body.style.backgroundColor = theme.value === 'dark' ? 'rgba(15,23,42)' : '#f9f4f4';
});
setTimeout(() => {
  document.body.classList.add('loaded');
}, 100);
//ダブルタップでズームされるのを防ぐ
const handleDoubleClick = (event: MouseEvent): void => {
  event.preventDefault();
};
</script>

<template>
  <div @dblclick="handleDoubleClick" :class="theme">
    <ThemeButton :theme="theme" @theme-changed="onThemeChanged" />
    <GlobalHeader />
    <RouterView />
    <GlobalFooter />
  </div>
</template>
