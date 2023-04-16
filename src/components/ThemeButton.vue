<template>
  <button
    @click="toggleTheme()"
    title="テーマを変更する"
    type="button"
  >
    <i class="fa" :class="buttonIcon" />
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const buttonIcon = computed(() => isDark.value ? 'fa-sun-o' : 'fa-moon-o')

let timeout: number | null = null

function toggleTheme() {
	if (timeout) window.clearTimeout(timeout);
  document.body.classList.add('_themeChanging_');
  toggleDark()

	timeout = window.setTimeout(() => {
		document.body.classList.remove('_themeChanging_');
	}, 1000);
}
</script>

<style scoped>
button {
  position: fixed;
  border: none;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  bottom: 1em;
  right: 1em;
  font-size: 1.5em;
  color: var(--foreground);
  background: var(--backgroundLighted);
  z-index: 10;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
}
</style>
