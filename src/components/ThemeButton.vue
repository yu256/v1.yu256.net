<template>
	<button @click="changeTheme" title="テーマを変更する" type="button" :class="{ dark: props.theme === 'dark' }">{{ buttonText }}</button>
</template>
  
<script lang="ts" setup>
import { watch, computed, getCurrentInstance } from 'vue'

const props = defineProps({
	theme: String,
})
  
const buttonText = computed(() => {
    return props.theme === 'light' ? '🌙' : '🌅'
})

const { emit } = getCurrentInstance()!

const changeTheme = () => {
	const newTheme = props.theme === 'dark' ? 'light' : 'dark'
	emit('theme-changed', newTheme)
}

watch(
	() => props.theme,
	(newTheme, oldTheme) => {
		newTheme !== oldTheme && emit('theme-changed', newTheme)
	}
)
</script>

<style scoped>
button {
	position: fixed;
	border: none;
	width: 80px;
	height: 80px;
	border-radius: 50px;
  	bottom: 2em;
  	right: 2em;
	font-size: 1.5em;
	background: #ffffff;
	z-index: 10;
	transition: background-color 0.5s ease;
}
.dark {
	background: rgb(28, 41, 70);
}
</style>