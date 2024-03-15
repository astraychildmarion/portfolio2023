import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import viteImagemin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/portfolio2023/',
	plugins: [
		vue(),
		eslintPlugin({
			include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
		}),
		viteImagemin({
			// 无损压缩配置，无损压缩下图片质量不会变差
			optipng: {
				optimizationLevel: 7,
			},
			// 有损压缩配置，有损压缩下图片质量可能会变差
			pngquant: {
				quality: [0.8, 0.9],
			},
			// svg 优化
			svgo: {
				plugins: [
					{
						name: 'removeViewBox',
					},
					{
						name: 'removeEmptyAttrs',
						active: false,
					},
				],
			},
		}),
	],
	resolve: {
		// 配置路径别名
		alias: {
			'@': '/src',
			'@assets': '/src/assets',
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				// 傳入共用的全域變數scss
				additionalData: `
        @import "@/assets/scss/color.scss";
        `,
			},
		},
	},
	assetsInclude: ['**/*.JPG'],
});
