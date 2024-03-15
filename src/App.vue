<script setup lang="ts">
import Button from './components/GetTouchButton.vue';
import PageHeader from './components/PageHeader.vue';
import WorkExp from './components/WorkExp.vue';
// import MyJPG from '@assets/IMG_2962.jpg';

const buttonText = 'Get in Touch!';
const meName = 'I am Marion,';
const meIntro = 'Frontend developer.';
const meLocation = 'Base in Taiwan.';
const meDetail = 'I am a Frontend developer with experience of 5 years.';
const skillObj = [
	{
		des: 'Experienced frontend developer <br/> Specializing in SaaS and web applications </br> With a keen eye for design.',
		ans: 'Vue 3 and React',
	},
	{
		des: 'Communication?</br>No prob.',
		ans: 'Mandrain (Native), </br>English(Fluent), </br>And some Russian',
	},
];
const job = [
	{
		title: 'Frontend Engineer',
		company: 'Phase 德商飛思',
		time: '2023-2024 • 8 mos',
	},
	{
		title: 'Frontend Engineer',
		company: 'Yi Teng Technology Ltd 溢驣',
		time: '2021-2023 • 1yrs 9 mos',
	},
	{
		title: 'Frontend Engineer',
		company: 'awoo Bros. Internet, Inc. 阿物',
		time: '2019-2021 • 2yrs 1 mos',
	},
	{
		title: 'Web Designer',
		company: 'GAMA Technology',
		time: '2017-2019 • 2yrs 2 mos',
	},
];
const seeMyCV = 'More info please see my CV 👇🏼';
const titleAboutMe = 'About me';
const titleWorkexp = 'Experience';
const mailto = 'mailto:allidareused@gmail.com';
const ChCVhref = 'https://kindly-hole-407.notion.site/Marion-ff51214b9a5d456ca5d3d55d9955900b';
const EngCVhref = 'https://kindly-hole-407.notion.site/Marion-Ma-d11e95c7f6764efb8d8e1a2b3a4f2605';
</script>

<template>
	<PageHeader></PageHeader>
	<section id="me">
		<div class="me__text">
			<div class="me__text__intro">
				Hello, <span class="me__text-color">{{ meName }}</span>
			</div>
			<div class="me__text__intro">{{ meIntro }}</div>
			<div class="me__text__intro">{{ meLocation }}</div>
			<div class="me__text__detail">{{ meDetail }}</div>
			<Button :content="buttonText" :href="mailto"></Button>
		</div>
		<div class="me__pic"><img class="mask" src="/IMG_2962.jpg" alt="marion" /></div>
	</section>
	<section id="skill">
		<div class="section__title">{{ titleAboutMe }}</div>
		<template v-for="obj in skillObj" :key="obj.des">
			<div class="skill__describe" v-html="obj.des"></div>
			<div class="skill__ans" v-html="obj.ans"></div>
		</template>
	</section>
	<section id="exp">
		<div class="section__title">{{ titleWorkexp }}</div>
		<WorkExp :job="job"></WorkExp>
	</section>
	<section id="notionCV">
		<div class="notionCV">
			{{ seeMyCV }}
		</div>
		<Button content="Ch CV" :href="ChCVhref"></Button>
		<Button content="Eng CV" :href="EngCVhref"></Button>
	</section>
	<div class="copyright">Copyright © 2024 Marion Ma</div>
</template>

<style lang="scss" scoped>
section {
	padding: 1rem 0;
	&:last-child {
		padding-bottom: 2rem;
	}
}
.section__title {
	font-size: 1.5rem;
	font-weight: 700;
	padding: 1rem 0 2rem;
	color: $content-title;
}
#me {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 70px;
	.me__text {
		width: 50vw;
		font-size: 2rem;
		text-align: center;
		&__detail {
			font-size: 1rem;
			padding: 1.5rem 0;
		}
		&-color {
			font-weight: bolder;
			font-style: italic;
			animation: Color 4s linear infinite;
		}
	}
	.me__pic {
		img {
			width: 40vw;
			object-fit: cover;
			-webkit-mask-size: cover;
		}
	}
	.mask {
		mask-image: url('@/assets/waterColorMask.png');
		-webkit-mask-image: url('@/assets/waterColorMask.png');
	}
	@media (max-width: 800px) {
		flex-direction: column-reverse;
		.me__text {
			width: 80vw;
			font-size: 2rem;
			text-align: center;
			padding: 2rem 0;
			&__detail {
				font-size: 1rem;
				padding: 1.5rem 0;
			}
			&-color {
				font-weight: bolder;
				font-style: italic;
				animation: Color 4s linear infinite;
			}
		}
		.me__pic {
			img {
				width: 70vw;
				object-fit: cover;
				-webkit-mask-size: cover;
			}
		}
	}
}
#skill {
	.skill {
		&__describe {
			font-weight: 500;
			font-size: 1rem;
			color: $content-title;
			padding: 0.5rem 0;
		}
		&__ans {
			font-weight: 500;
			font-size: 1rem;
			color: $content-ans;
			padding: 0.1rem 1rem 2rem;
		}
	}
}
.notionCV {
	padding: 1rem 0;
}
.copyright {
	color: $content-light;
	font-size: 0.8rem;
	padding: 2rem 0 0.5rem;
}
@keyframes Color {
	0% {
		color: $MOTTI-5;
	}

	20% {
		color: $MOTTI-2;
	}

	40% {
		color: $MOTTI-3;
	}

	60% {
		color: $oenir-3;
	}

	100% {
		color: $MOTTI-5;
	}
}
</style>
<style>
body {
	margin: 0;
	display: flex;
	place-items: center;
	min-width: 320px;
	min-height: 100vh;
}

#app {
	max-width: 1280px;
	margin: 0 auto;
	text-align: center;
}
a {
	text-decoration: none;
}
</style>
