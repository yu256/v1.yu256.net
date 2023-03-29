<script lang="ts" setup>
import GlobalHeader from './components/GlobalHeader.vue'
import GlobalFooter from './components/GlobalFooter.vue'
</script>

<template>
	<GlobalHeader />
	<RouterView />
	<GlobalFooter />
</template>