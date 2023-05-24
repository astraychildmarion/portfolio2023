<script setup lang="ts">
interface Props {
	content: string;
	href?: string;
}
defineProps<Props>();
</script>

<template>
	<div v-if="href" class="button__wrapper">
		<a target="_blank" :href="href">{{ content }} </a>
	</div>

	<div v-else class="button__wrapper">{{ content }}</div>
</template>

<style lang="scss" scoped>
.button {
	&__wrapper {
		display: inline-block;
		background-color: $button-bg;
		border: 1px solid $button-bg;
		font-size: 1rem;
		border-radius: 30px;
		margin: 0 1rem;
		cursor: pointer;
		a {
			padding: 0.5rem 2rem;
			display: block;
			color: $button-text;
		}
		&:hover {
			border: 1px solid $button-bg-hover;
			background-color: $button-bg-hover;
		}
	}
}
</style>
