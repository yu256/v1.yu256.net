<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import GlobalHeader from './components/GlobalHeader.vue'
import GlobalFooter from './components/GlobalFooter.vue'
import ThemeButton from './components/ThemeButton.vue';
const theme = ref('light')
const onThemeChanged = (newTheme: string) => {
  theme.value = newTheme
}
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
const isDarkMode = ref(darkModeMediaQuery.matches)
watchEffect(() => {
  theme.value = isDarkMode.value ? 'dark' : 'light'
})
</script>

<template>
	<ThemeButton :theme="theme" @theme-changed="onThemeChanged" />
	<GlobalHeader :class="theme" />
	<RouterView :class="theme" />
	<GlobalFooter :class="theme" />
</template>