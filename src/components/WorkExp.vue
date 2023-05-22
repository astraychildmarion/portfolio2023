<script setup lang="ts">
interface Props {
	job: jobContent[];
}
interface jobContent {
	title: string;
	company: string;
	time: string;
}
defineProps<Props>();
</script>

<template>
	<div v-for="item in job" :key="item.company" class="job__wrapper">
		<div class="job__title">{{ item.title }}</div>
		<div class="job__company">
			{{ item.company }}
		</div>
		<div class="job__time">{{ item.time }}</div>
	</div>
</template>

<style lang="scss" scoped>
.job {
	&__wrapper {
		padding: 1rem 0;
	}
	&__title {
		font-size: 1.2rem;
		color: $content-dark;
		font-weight: bolder;
	}
	&__company {
		font-size: 1rem;
		padding: 0 1rem;
		color: $content-strong;
	}
	&__time {
		font-size: 0.81rem;
		padding: 0 1rem;
		color: $content-strong;
	}
}
</style>
