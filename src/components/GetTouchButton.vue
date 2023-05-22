<script setup lang="ts">
interface Props {
	content: string;
	href?: string;
}
defineProps<Props>();
</script>

<template>
	<a v-if="href" target="_blank" :href="href">
		<div class="button__wrapper">{{ content }}</div>
	</a>
	<div v-else class="button__wrapper">{{ content }}</div>
</template>

<style lang="scss" scoped>
.button {
	&__wrapper {
		background-color: $button-bg;
		color: $button-text;
		border: 1px solid $button-bg;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		border-radius: 30px;
		max-width: 8rem;
		margin: 0 auto;
		cursor: pointer;
		&:hover {
			border: 1px solid $button-border;
		}
	}
}
</style>
